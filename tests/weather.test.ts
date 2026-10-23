import test from "node:test";
import assert from "node:assert/strict";
import worker from "../worker";
import { weatherResponse } from "../weather-api";
import { loadWeather } from "../client/src/components/WeatherSection";
const sample = {
  current: {
    temperature_2m: 18,
    apparent_temperature: 17,
    relative_humidity_2m: 45,
    precipitation: 0,
    weather_code: 0,
    wind_speed_10m: 8,
  },
  daily: {
    time: ["2026-10-23"],
    weather_code: [0],
    temperature_2m_max: [22],
    temperature_2m_min: [10],
    precipitation_probability_max: [5],
    uv_index_max: [4],
  },
};
test("native weather API validates coordinates, payload and failures", async () => {
  const savedFetch = globalThis.fetch,
    savedCaches = globalThis.caches;
  Object.defineProperty(globalThis, "caches", {
    configurable: true,
    value: { default: { match: async () => null, put: async () => {} } },
  });
  const ctx = { waitUntil() {} };
  try {
    assert.equal(
      (
        await weatherResponse(
          new Request("https://oshbazaar.org/api/weather"),
          ctx
        )
      ).status,
      400
    );
    globalThis.fetch = async () => Response.json(sample);
    const success = await weatherResponse(
      new Request(
        "https://oshbazaar.org/api/weather?lat=42.874967&lon=74.570242"
      ),
      ctx
    );
    assert.equal(success.status, 200);
    assert.equal(((await success.json()) as any).daily.uv_index_max[0], 4);
    globalThis.fetch = async () =>
      Response.json({ current: {}, daily: { time: [] } });
    assert.equal(
      (
        await weatherResponse(
          new Request(
            "https://oshbazaar.org/api/weather?lat=42.874967&lon=74.570242"
          ),
          ctx
        )
      ).status,
      502
    );
    globalThis.fetch = async () => {
      throw Error("offline");
    };
    assert.equal(
      (
        await weatherResponse(
          new Request(
            "https://oshbazaar.org/api/weather?lat=42.874967&lon=74.570242"
          ),
          ctx
        )
      ).status,
      502
    );
  } finally {
    globalThis.fetch = savedFetch;
    Object.defineProperty(globalThis, "caches", {
      configurable: true,
      value: savedCaches,
    });
  }
});
test("client native success, direct fallback, cached timestamp and invalid failure", async () => {
  const saved = globalThis.fetch;
  const entries = new Map<string, string>();
  Object.defineProperty(globalThis, "sessionStorage", {
    configurable: true,
    value: {
      getItem: (k: string) => entries.get(k) ?? null,
      setItem: (k: string, v: string) => entries.set(k, v),
    },
  });
  try {
    const calls: string[] = [];
    globalThis.fetch = async url => {
      calls.push(String(url));
      return String(url).startsWith("/api/")
        ? new Response("not JSON", { headers: { "content-type": "text/html" } })
        : Response.json(sample);
    };
    const data = await loadWeather(42.874967, 74.570242);
    assert.equal(data.current?.temperature_2m, 18);
    assert.equal(calls.length, 2);
    assert.ok(calls[1].startsWith("https://api.open-meteo.com/"));
    const cached = await loadWeather(42.874967, 74.570242);
    assert.equal(cached._fetchedAt, data._fetchedAt);
    assert.equal(calls.length, 2);
    entries.clear();
    globalThis.fetch = async () => Response.json(sample);
    assert.equal(
      (await loadWeather(42.874967, 74.570242)).daily?.uv_index_max?.[0],
      4
    );
    entries.clear();
    globalThis.fetch = async () => Response.json({ current: {}, daily: {} });
    await assert.rejects(loadWeather(42.874967, 74.570242));
  } finally {
    globalThis.fetch = saved;
  }
});

test("Worker weather accepts only the site's location before accessing upstream or cache", async () => {
  const savedFetch = globalThis.fetch,
    savedCaches = globalThis.caches;
  const keys: string[] = [],
    upstream: string[] = [];
  let puts = 0;
  Object.defineProperty(globalThis, "caches", {
    configurable: true,
    value: {
      default: {
        match: async (key: Request) => {
          keys.push(key.url);
          return null;
        },
        put: async () => {
          puts++;
        },
      },
    },
  });
  globalThis.fetch = async url => {
    upstream.push(String(url));
    return Response.json(sample);
  };
  const ctx = { waitUntil() {} },
    env = {
      ASSETS: {
        fetch: async () => {
          throw Error("unexpected asset");
        },
      },
    };
  try {
    for (const query of [
      "",
      "?lat=&lon=",
      "?lat=42&lon=74",
      "?lat=91&lon=181",
      "?lat=NaN&lon=74.570242",
    ]) {
      const response = await worker.fetch(
        new Request("https://oshbazaar.org/api/weather" + query),
        env,
        ctx
      );
      assert.equal(response.status, 400);
    }
    assert.equal(keys.length, 0);
    assert.equal(upstream.length, 0);
    assert.equal(puts, 0);
    const response = await worker.fetch(
      new Request(
        "https://oshbazaar.org/api/weather?lat=42.8749670&lon=74.5702420"
      ),
      env,
      ctx
    );
    assert.equal(response.status, 200);
    assert.deepEqual(keys, [
      "https://oshbazaar.org/api/weather?lat=42.874967&lon=74.570242",
    ]);
    const target = new URL(upstream[0]);
    assert.equal(target.searchParams.get("latitude"), "42.874967");
    assert.equal(target.searchParams.get("longitude"), "74.570242");
    assert.equal(puts, 1);
  } finally {
    globalThis.fetch = savedFetch;
    Object.defineProperty(globalThis, "caches", {
      configurable: true,
      value: savedCaches,
    });
  }
});

test("Worker weather HEAD has no body for fresh, cached, invalid and unavailable responses", async () => {
  const savedFetch = globalThis.fetch,
    savedCaches = globalThis.caches;
  let cached = false;
  Object.defineProperty(globalThis, "caches", {
    configurable: true,
    value: {
      default: {
        match: async () =>
          cached
            ? Response.json(sample, {
                headers: {
                  "Cache-Control": "public,max-age=600",
                  "X-Test-Cache": "hit",
                },
              })
            : null,
        put: async () => {},
      },
    },
  });
  const ctx = { waitUntil() {} },
    env = {
      ASSETS: {
        fetch: async () => {
          throw Error("unexpected asset");
        },
      },
    };
  const url = "https://oshbazaar.org/api/weather?lat=42.874967&lon=74.570242";
  const head = (target = url) =>
    worker.fetch(new Request(target, { method: "HEAD" }), env, ctx);
  try {
    globalThis.fetch = async () => Response.json(sample);
    let response = await head();
    assert.equal(response.status, 200);
    assert.equal(await response.text(), "");
    assert.equal(response.headers.get("Content-Type"), "application/json");
    assert.equal(response.headers.get("Cache-Control"), "public,max-age=600");
    cached = true;
    response = await head();
    assert.equal(response.status, 200);
    assert.equal(await response.text(), "");
    assert.equal(response.headers.get("X-Test-Cache"), "hit");
    const get = await worker.fetch(new Request(url), env, ctx);
    assert.deepEqual(await get.json(), sample);
    response = await head("https://oshbazaar.org/api/weather?lat=0&lon=0");
    assert.equal(response.status, 400);
    assert.equal(await response.text(), "");
    assert.equal(response.headers.get("Content-Type"), "application/json");
    cached = false;
    globalThis.fetch = async () => {
      throw Error("offline");
    };
    response = await head();
    assert.equal(response.status, 502);
    assert.equal(await response.text(), "");
    assert.equal(response.headers.get("Content-Type"), "application/json");
  } finally {
    globalThis.fetch = savedFetch;
    Object.defineProperty(globalThis, "caches", {
      configurable: true,
      value: savedCaches,
    });
  }
});

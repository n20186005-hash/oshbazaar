import test from "node:test";
import assert from "node:assert/strict";
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
          new Request("https://oshbazaar.org/api/weather?lat=42&lon=74"),
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
          new Request("https://oshbazaar.org/api/weather?lat=42&lon=74"),
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

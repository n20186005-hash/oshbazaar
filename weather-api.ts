const TTL = 600;
const LATITUDE = 42.874967;
const LONGITUDE = 74.570242;
import { validForecast } from "./client/src/lib/weather-contract";
export async function weatherResponse(
  request: Request,
  ctx: { waitUntil(p: Promise<unknown>): void }
) {
  const finish = (response: Response) =>
    request.method === "HEAD"
      ? new Response(null, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        })
      : response;
  const input = new URL(request.url),
    lat = Number(input.searchParams.get("lat")),
    lon = Number(input.searchParams.get("lon"));
  if (
    !input.searchParams.has("lat") ||
    !input.searchParams.has("lon") ||
    !Number.isFinite(lat) ||
    !Number.isFinite(lon) ||
    lat !== LATITUDE ||
    lon !== LONGITUDE
  )
    return finish(
      Response.json({ error: "invalid coordinates" }, { status: 400 })
    );
  const key = new Request(
      `https://oshbazaar.org/api/weather?lat=${LATITUDE}&lon=${LONGITUDE}`
    ),
    cache = (caches as any).default;
  try {
    const cached = await cache.match(key);
    if (cached) return finish(cached);
  } catch {}
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max&forecast_days=7&timezone=Asia%2FBishkek`;
    const upstream = await fetch(url, { signal: AbortSignal.timeout(6000) });
    if (!upstream.ok) throw Error("upstream");
    const data = await upstream.json();
    if (!validForecast(data)) throw Error("invalid forecast");
    const response = Response.json(data, {
      headers: { "Cache-Control": `public,max-age=${TTL}` },
    });
    ctx.waitUntil(cache.put(key, response.clone()).catch(() => {}));
    return finish(response);
  } catch {
    return finish(
      Response.json({ error: "weather unavailable" }, { status: 502 })
    );
  }
}

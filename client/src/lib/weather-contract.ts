export function validForecast(data: any): boolean {
  const c = data?.current,
    d = data?.daily;
  return (
    !!c &&
    !!d &&
    [
      "temperature_2m",
      "apparent_temperature",
      "relative_humidity_2m",
      "precipitation",
      "weather_code",
      "wind_speed_10m",
    ].every(k => Number.isFinite(c[k])) &&
    Array.isArray(d.time) &&
    d.time.length > 0 &&
    [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_probability_max",
      "uv_index_max",
    ].every(
      k =>
        Array.isArray(d[k]) &&
        d[k].length === d.time.length &&
        d[k].every(Number.isFinite)
    )
  );
}

import { useEffect, useState } from "react";
import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Droplets,
  Snowflake,
  Sun,
  Thermometer,
  Umbrella,
  Wind,
} from "lucide-react";

type Locale = "ky" | "en";

type OpenMeteoResponse = {
  current?: {
    temperature_2m?: number;
    apparent_temperature?: number;
    relative_humidity_2m?: number;
    precipitation?: number;
    weather_code?: number;
    wind_speed_10m?: number;
  };
  daily?: {
    time?: string[];
    weather_code?: number[];
    temperature_2m_max?: number[];
    temperature_2m_min?: number[];
    precipitation_probability_max?: number[];
  };
};

const WMO: Record<number, { ky: string; en: string; Icon: typeof Cloud }> = {
  0: { ky: "Ачык асман", en: "Clear sky", Icon: Sun },
  1: { ky: "Негизинен ачык", en: "Mainly clear", Icon: CloudSun },
  2: { ky: "Сейрек булуттуу", en: "Partly cloudy", Icon: CloudSun },
  3: { ky: "Булуттуу", en: "Overcast", Icon: Cloud },
  45: { ky: "Туман", en: "Fog", Icon: CloudFog },
  48: { ky: "Будуракай туман", en: "Rime fog", Icon: CloudFog },
  51: { ky: "Жеңил ным", en: "Light drizzle", Icon: CloudDrizzle },
  53: { ky: "Нымдуу жаан", en: "Drizzle", Icon: CloudDrizzle },
  55: { ky: "Коюу ным", en: "Dense drizzle", Icon: CloudDrizzle },
  56: { ky: "Муздак ным", en: "Freezing drizzle", Icon: CloudDrizzle },
  57: { ky: "Муздак ным", en: "Freezing drizzle", Icon: CloudDrizzle },
  61: { ky: "Жөнөкөй жаан", en: "Slight rain", Icon: CloudRain },
  63: { ky: "Жаан", en: "Rain", Icon: CloudRain },
  65: { ky: "Күчтүү жаан", en: "Heavy rain", Icon: CloudRain },
  66: { ky: "Муздак жаан", en: "Freezing rain", Icon: CloudRain },
  67: { ky: "Муздак жаан", en: "Freezing rain", Icon: CloudRain },
  71: { ky: "Жөнөкөй кар", en: "Slight snow", Icon: CloudSnow },
  73: { ky: "Кар", en: "Snow", Icon: CloudSnow },
  75: { ky: "Күчтүү кар", en: "Heavy snow", Icon: Snowflake },
  77: { ky: "Кар бөрттөлөрү", en: "Snow grains", Icon: CloudSnow },
  80: { ky: "Жаан тамчылары", en: "Rain showers", Icon: CloudRain },
  81: { ky: "Жаан тамчылары", en: "Rain showers", Icon: CloudRain },
  82: { ky: "Күчтүү тамчы", en: "Violent showers", Icon: CloudRain },
  85: { ky: "Кар тамчылары", en: "Snow showers", Icon: CloudSnow },
  86: { ky: "Күчтүү кар тамчы", en: "Heavy snow showers", Icon: Snowflake },
  95: { ky: "Чагылган", en: "Thunderstorm", Icon: CloudLightning },
  96: { ky: "Чагылган + кар", en: "Thunderstorm w/ hail", Icon: CloudLightning },
  99: { ky: "Чагылган + кар", en: "Thunderstorm w/ hail", Icon: CloudLightning },
};

const describe = (code: number | undefined, locale: Locale) => {
  const hit = code !== undefined ? WMO[code] : undefined;
  return hit ?? { ky: "—", en: "—", Icon: Cloud };
};

const BUILD_URL = (lat: number, lon: number) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
  `&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m` +
  `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max` +
  `&forecast_days=7&timezone=auto`;

async function loadWeather(lat: number, lon: number): Promise<OpenMeteoResponse> {
  const cacheKey = `osh-weather-${lat.toFixed(4)}-${lon.toFixed(4)}`;
  try {
    const raw = sessionStorage.getItem(cacheKey);
    if (raw) {
      const parsed = JSON.parse(raw) as { t: number; d: OpenMeteoResponse };
      if (Date.now() - parsed.t < 30 * 60 * 1000) return parsed.d;
    }
  } catch {
    /* ignore cache read errors */
  }

  const sources = [`/api/weather?lat=${lat}&lon=${lon}`, BUILD_URL(lat, lon)];
  for (const url of sources) {
    try {
      const res = await fetch(url);
      const contentType = res.headers.get("content-type") ?? "";
      // On static-asset deploys an unknown path returns the SPA shell (HTML), not JSON.
      if (!res.ok || !contentType.includes("application/json")) continue;
      const data = (await res.json()) as OpenMeteoResponse;
      if (!data.current || !data.daily) continue;
      try {
        sessionStorage.setItem(cacheKey, JSON.stringify({ t: Date.now(), d: data }));
      } catch {
        /* ignore quota errors */
      }
      return data;
    } catch {
      /* try next source */
    }
  }
  throw new Error("weather unavailable");
}

const labels = {
  ky: {
    label: "04 / АБА ЫРАЙЫ",
    title: "Бүгүн жана жакынкы күндөр",
    intro: "Базарга чыгаарда аба ырайын билип алыңыз. Маалымат жергиликтүү метеостанциялардын орточо байкоолоруна негизделген; чыгууга так убакытты тандаңыз.",
    now: "Азыр",
    feels: "Сезилет",
    humidity: "Нымдуулук",
    wind: "Шамал",
    forecast: "Болжолдуу аба ырайы",
    bringUmbrella: "Жаан болушу ыктымал — умтуу алыңыз.",
    noUmbrella: "Жаан күтүлбөйт — умтуу керек эмес.",
    updated: "Жаңыртылды",
    unavailable: "Аба ырайынын маалыматы убактылуу жеткиликсиз.",
    retry: "Кайра аракет",
    rainChance: "Жаан ыктымалдыгы",
  },
  en: {
    label: "04 / WEATHER",
    title: "Today and the coming days",
    intro: "Check the conditions before heading to the bazaar. Figures draw on local station averages; pick a precise time on the day you go.",
    now: "Now",
    feels: "Feels like",
    humidity: "Humidity",
    wind: "Wind",
    forecast: "Forecast",
    bringUmbrella: "Rain is likely — bring an umbrella.",
    noUmbrella: "No rain expected — an umbrella is not needed.",
    updated: "Updated",
    unavailable: "Weather information is temporarily unavailable.",
    retry: "Try again",
    rainChance: "Rain chance",
  },
} as const;

export default function WeatherSection({
  locale,
  lat,
  lon,
}: {
  locale: Locale;
  lat: number;
  lon: number;
}) {
  const t = labels[locale];
  const [data, setData] = useState<OpenMeteoResponse | null>(null);
  const [error, setError] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    setError(false);
    loadWeather(lat, lon)
      .then((d) => {
        if (cancelled) return;
        setData(d);
        setUpdatedAt(Date.now());
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [lat, lon]);

  const current = data?.current;
  const daily = data?.daily;
  const todayCode = current?.weather_code;
  const todayRain = daily?.precipitation_probability_max?.[0] ?? 0;
  const shouldBringUmbrella = todayRain >= 50 || (current?.precipitation ?? 0) > 0;

  const dayFormatter = new Intl.DateTimeFormat(locale === "ky" ? "ky-KG" : "en-US", {
    weekday: "short",
  });

  return (
    <section className="weather-section" id="weather">
      <div className="section-number">{t.label}</div>
      <div className="section-heading heading-split">
        <h2>{t.title}</h2>
        <p>{t.intro}</p>
      </div>

      {error && (
        <div className="weather-empty">
          <p>{t.unavailable}</p>
          <button type="button" onClick={() => loadWeather(lat, lon).then(setData).catch(() => setError(true))}>
            {t.retry}
          </button>
        </div>
      )}

      {!error && !data && <div className="weather-empty"><p>…</p></div>}

      {!error && data && (
        <div className="weather-body">
          <article className="weather-now">
            {todayCode !== undefined &&
              (() => {
                const { Icon, ky, en } = describe(todayCode, locale);
                return (
                  <>
                    <Icon size={58} strokeWidth={1.4} className="weather-now-icon" />
                    <p className="weather-now-name">{locale === "ky" ? ky : en}</p>
                  </>
                );
              })()}
            <p className="weather-now-temp">
              {Math.round(current?.temperature_2m ?? 0)}°C
            </p>
            <dl className="weather-now-meta">
              <div><Thermometer size={15} /><dt>{t.feels}</dt><dd>{Math.round(current?.apparent_temperature ?? 0)}°</dd></div>
              <div><Droplets size={15} /><dt>{t.humidity}</dt><dd>{current?.relative_humidity_2m ?? "—"}%</dd></div>
              <div><Wind size={15} /><dt>{t.wind}</dt><dd>{Math.round(current?.wind_speed_10m ?? 0)} km/h</dd></div>
            </dl>
            <p className={`weather-umbrella ${shouldBringUmbrella ? "is-rain" : "is-dry"}`}>
              <Umbrella size={16} /> {shouldBringUmbrella ? t.bringUmbrella : t.noUmbrella}
            </p>
            {updatedAt && (
              <p className="weather-updated">
                {t.updated} {new Date(updatedAt).toLocaleTimeString(locale === "ky" ? "ky-KG" : "en-US", { hour: "2-digit", minute: "2-digit" })}
              </p>
            )}
          </article>

          <div className="weather-forecast">
            <p className="weather-forecast-title">{t.forecast}</p>
            <div className="weather-forecast-row">
              {daily?.time?.map((iso, i) => {
                const code = daily.weather_code?.[i];
                const max = daily.temperature_2m_max?.[i];
                const min = daily.temperature_2m_min?.[i];
                const rain = daily.precipitation_probability_max?.[i] ?? 0;
                const { Icon, ky, en } = describe(code, locale);
                const isToday = i === 0;
                return (
                  <article key={iso} className={isToday ? "is-today" : ""}>
                    <span className="weather-day">{isToday ? t.now : dayFormatter.format(new Date(`${iso}T00:00`))}</span>
                    <Icon size={26} strokeWidth={1.4} className="weather-day-icon" />
                    <span className="weather-day-temp">{Math.round(min ?? 0)}° / {Math.round(max ?? 0)}°</span>
                    <span className="weather-day-rain"><Droplets size={12} />{rain}%</span>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

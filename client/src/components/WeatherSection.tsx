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
    uv_index?: number;
  };
  daily?: {
    time?: string[];
    weather_code?: number[];
    temperature_2m_max?: number[];
    temperature_2m_min?: number[];
    precipitation_probability_max?: number[];
    uv_index_max?: number[];
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

const describe = (code: number | undefined, _locale: Locale) => {
  const hit = code !== undefined ? WMO[code] : undefined;
  return hit ?? { ky: "—", en: "—", Icon: Cloud };
};

// --- weather categories (by WMO code) -------------------------------------
const inSet = (code: number, list: number[]) => list.includes(code);
const CAT = {
  clear: [0, 1],
  cloudy: [2, 3],
  fog: [45, 48],
  drizzle: [51, 53, 55, 56, 57],
  rain: [61, 63, 65, 66, 67, 80, 81, 82],
  snow: [71, 73, 75, 77, 85, 86],
  storm: [95, 96, 99],
};

// --- wind speed (km/h) -> Beaufort level ----------------------------------
function beaufort(kmh: number): number {
  if (kmh < 1) return 0;
  if (kmh < 6) return 1;
  if (kmh < 12) return 2;
  if (kmh < 20) return 3;
  if (kmh < 29) return 4;
  if (kmh < 39) return 5;
  if (kmh < 50) return 6;
  if (kmh < 62) return 7;
  if (kmh < 75) return 8;
  if (kmh < 89) return 9;
  if (kmh < 103) return 10;
  return 11;
}

// --- actionable advice engine ----------------------------------------------
type Tip = { ky: string; en: string };
type Advice = { outfit: Tip[]; activities: Tip[]; items: Tip[]; risk: Tip[] };

function buildAdvice(d: {
  code: number;
  maxTemp: number;
  minTemp: number;
  windKmh: number;
  rainProb: number;
  uv: number;
}): Advice {
  const a: Advice = { outfit: [], activities: [], items: [], risk: [] };
  const add = (bucket: keyof Advice, ky: string, en: string) => a[bucket].push({ ky, en });

  const isDrizzle = inSet(d.code, CAT.drizzle);
  const isRain = inSet(d.code, CAT.rain);
  const isStorm = inSet(d.code, CAT.storm);
  const isSnow = inSet(d.code, CAT.snow);
  const isFog = inSet(d.code, CAT.fog);
  const isClear = inSet(d.code, CAT.clear);
  const isCloudy = inSet(d.code, CAT.cloudy);
  const windLevel = beaufort(d.windKmh);

  // 🌂 precipitation -------------------------------------------------------
  if (d.rainProb >= 60) {
    add("outfit", "Жаан болушу ыктымал — жаанга каршы чапан же умтуу алыңыз.", "Rain is likely — bring a raincoat or umbrella.");
    add("activities", "Ички бөлмөлөргө артыкчылык бериңиз, ачык асман астындагы айланаларды кийинчерээк жасоо жакшы.", "Prefer indoor areas; postpone open-air plans.");
    add("items", "Жаан чапан же умтуу.", "Raincoat or umbrella.");
  }
  if (isDrizzle) {
    add("outfit", "Жол бети сызгыр — басып жүргөндө аякбашыңызга көңүл бургула.", "Pavements are slippery — mind your step.");
    add("activities", "Ачык асман астындагы базар катарлары начарраак сезилет.", "Open-air market rows feel less pleasant.");
    add("items", "Бүктөлмө умтуу.", "A folding umbrella.");
  }
  if (isRain) {
    add("risk", "Жаан күчтүү — өрөөндөрдөн, жапыз жерлерден алыс болуңуз.", "Heavy rain — avoid valleys and low-lying spots.");
    add("activities", "Ачык асман астындагы айланаларды сунуш кылбайбыз; кеме же лифт иштебей калышы мүмкүн.", "Open-air plans aren't ideal; boats or lifts may stop.");
    add("items", "Жаан чапан; узун саптуу умтуу сунуш кылынбайт (шамал).", "Raincoat; skip long-handle umbrellas (wind).");
  }
  if (isStorm) {
    add("risk", "Чагылгандан сактануу: тоого чыкпаңыз, сууда ойнобоңуз, бактын алдында жашынбаңыз.", "Watch for lightning: no hikes, no water play, don't shelter under trees.");
    add("activities", "Суу проекттери көбүнчө жабык болот.", "Water activities are likely closed.");
  }

  // 🌞 heat & UV -----------------------------------------------------------
  if (d.maxTemp >= 32) {
    add("outfit", "Аба ысык — түштөн кийинки ысыкты ачыкка чыгаардан качыңыз.", "Hot — avoid the midday heat outdoors.");
    add("activities", "Ачык асман астындагы убактыңызды кыскартыңыз.", "Shorten time spent outdoors.");
    add("items", "Күн коргогуч, жетиштүү суу, ысыктан сактоочу каражаттар.", "Sunscreen, plenty of water, heat protection.");
  }
  if (d.uv >= 5) {
    add("outfit", "Ультрафиолет күчтүү — күн коргогуч колдонуңуз.", "Strong UV — use sunscreen.");
    add("items", "Күн коргогуч крем, көз айнек, панама.", "Sunscreen, sunglasses, sun hat.");
  }

  // ❄️ cold ----------------------------------------------------------------
  if (d.maxTemp - d.minTemp > 8) {
    add("outfit", "Күндүзгү жана түнкү температура айырмасы чоң — үстүңүзгө чапан алыңыз.", "Big day-night swing — bring a layer you can add or remove.");
  }
  if (d.maxTemp <= 10) {
    add("outfit", "Аба салкын — суукка каршы даярданыңыз.", "Cold — prepare for low temperatures.");
    add("items", "Жылуу чапан, шарф.", "Warm coat, scarf.");
  }

  // 💨 wind ----------------------------------------------------------------
  if (windLevel >= 5 && windLevel <= 6) {
    add("outfit", "Шамал күчтүүрөөк.", "Breezy.");
    add("activities", "Ачык асман астындагы базар катарлары же кемелер иштебей калышы мүмкүн.", "Open-air market rows or boats may pause.");
    add("items", "Шляпа учуп кетиши ыктымал, кенен көйнөктөн качыңыз.", "Hats may blow away; skip loose dresses.");
  }
  if (windLevel >= 7) {
    add("risk", "Шамал катуу — жарнама түзүлмаларынан жана базардын чатырларынан алыс болуңуз.", "Strong wind — stay away from billboards and market awnings.");
    add("activities", "Ачык деңиз же жогорку шарчылар көбүнчө жабык.", "Open-air upper decks are likely closed.");
  }

  // ☁️ clear / cloudy ------------------------------------------------------
  if (isClear) {
    add("outfit", "Аба ачык — ачык асман астында сейилдөөгө ылайык.", "Clear — good for outdoor strolling.");
    add("activities", "Күн чыгышын же батышын көрүүгө ылайык.", "Good for sunrise or sunset views.");
    add("items", "Күн коргогучту унутпаңыз.", "Don't forget sunscreen.");
  }
  if (isCloudy) {
    add("outfit", "Жарыктык жумшак — сүрөткө тартууга абдан ылайык.", "Soft light — great for photos.");
    add("activities", "Күйгүзбөй туруп узак убакыт ачыкта басууга болот.", "No scorching — good for a long walk outdoors.");
  }

  // 🌫️ fog -----------------------------------------------------------------
  if (isFog) {
    add("risk", "Көрүнүү аймагы начар — кеме же транспорт кечигип калышы мүмкүн.", "Poor visibility — ferries or transport may be delayed.");
    add("activities", "Тоо же деңиз көрүнүштөрүн көрүүгө ылайык эмес.", "Not good for mountain or distance views.");
    add("items", "Маска.", "A mask.");
  }

  // ❄️ snow on ground ------------------------------------------------------
  if (isSnow) {
    add("outfit", "Кар жаап жатат — ысып кийиниңиз, буткап жолдо ойнооңуз.", "Snow falling — dress warm and watch slippery paths.");
  }

  // dedupe within each bucket (keep first occurrence)
  (Object.keys(a) as (keyof Advice)[]).forEach((k) => {
    const seen = new Set<string>();
    a[k] = a[k].filter((t) => {
      if (seen.has(t.ky)) return false;
      seen.add(t.ky);
      return true;
    });
  });
  return a;
}

const BUILD_URL = (lat: number, lon: number) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
  `&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,uv_index` +
  `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max` +
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
    uv: "УФ индекси",
    forecast: "Болжолдуу аба ырайы",
    bringUmbrella: "Жаан болушу ыктымал — умтуу алыңыз.",
    noUmbrella: "Жаан күтүлбөйт — умтуу керек эмес.",
    updated: "Жаңыртылды",
    unavailable: "Аба ырайынын маалыматы убактылуу жеткиликсиз.",
    retry: "Кайра аракет",
    rainChance: "Жаан ыктымалдыгы",
    adviceOutfit: "Кийим",
    adviceActivity: "Эс алуу",
    adviceItems: "Керектүү буюмдар",
    riskTitle: "Коопсуздук эскертүүсү",
    noRisk: "Метео эскертүү жок.",
  },
  en: {
    label: "04 / WEATHER",
    title: "Today and the coming days",
    intro: "Check the conditions before heading to the bazaar. Figures draw on local station averages; pick a precise time on the day you go.",
    now: "Now",
    feels: "Feels like",
    humidity: "Humidity",
    wind: "Wind",
    uv: "UV index",
    forecast: "Forecast",
    bringUmbrella: "Rain is likely — bring an umbrella.",
    noUmbrella: "No rain expected — an umbrella is not needed.",
    updated: "Updated",
    unavailable: "Weather information is temporarily unavailable.",
    retry: "Try again",
    rainChance: "Rain chance",
    adviceOutfit: "What to wear",
    adviceActivity: "What to do",
    adviceItems: "What to bring",
    riskTitle: "Safety notice",
    noRisk: "No weather alerts.",
  },
} as const;

type Block = { key: keyof Advice; title: string };

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
  const todayCode = current?.weather_code ?? daily?.weather_code?.[0];
  const todayRain = daily?.precipitation_probability_max?.[0] ?? 0;
  const shouldBringUmbrella = todayRain >= 50 || (current?.precipitation ?? 0) > 0;

  // advice is built from "today": current conditions + today's daily range
  const advice: Advice | null =
    data && todayCode !== undefined
      ? buildAdvice({
          code: todayCode,
          maxTemp: daily?.temperature_2m_max?.[0] ?? current?.temperature_2m ?? 0,
          minTemp: daily?.temperature_2m_min?.[0] ?? current?.temperature_2m ?? 0,
          windKmh: current?.wind_speed_10m ?? 0,
          rainProb: todayRain,
          uv: current?.uv_index ?? daily?.uv_index_max?.[0] ?? 0,
        })
      : null;

  const dayFormatter = new Intl.DateTimeFormat(locale === "ky" ? "ky-KG" : "en-US", {
    weekday: "short",
  });

  const blocks: Block[] = [
    { key: "outfit", title: t.adviceOutfit },
    { key: "activities", title: t.adviceActivity },
    { key: "items", title: t.adviceItems },
  ];

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
              <div><Sun size={15} /><dt>{t.uv}</dt><dd>{current?.uv_index != null ? Math.round(current.uv_index) : "—"}</dd></div>
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

            {advice && (
              <div className="weather-advice">
                {advice.risk.length > 0 && (
                  <div className="weather-risk" role="alert">
                    <span className="weather-risk-title">{t.riskTitle}</span>
                    <ul>
                      {advice.risk.map((tip, i) => (
                        <li key={i}>{tip[locale]}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="weather-advice-grid">
                  {blocks.map((b) => {
                    const tips = advice[b.key];
                    if (tips.length === 0) return null;
                    return (
                      <div className="weather-advice-block" key={b.key}>
                        <h3>{b.title}</h3>
                        <ul>
                          {tips.map((tip, i) => (
                            <li key={i}>{tip[locale]}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

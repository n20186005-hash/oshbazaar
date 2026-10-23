import { ArrowLeft, ShieldCheck } from "lucide-react";
type Locale = "ky" | "en";
type Kind = "privacy" | "terms" | "cookies";
const copy = {
  ky: {
    back: "Башкы бетке кайтуу",
    updated: "Жаңыртылды: 2026-жылдын 23-октябры",
    privacy: {
      title: "Купуялык саясаты",
      intro: "Бул көз карандысыз гиддин чыныгы кызматтары жана маалымат агымы.",
      sections: [
        [
          "Кызматтар",
          "Барак Google Analytics өлчөө скриптин, Google Maps картасын жана Google Fonts шрифттерин колдонот. Google Analytics барак ачылганда жүктөлөт; cookie’ни браузердин жөндөөлөрүнөн башкара аласыз.",
        ],
        [
          "Аба ырайы жана сактагыч",
          "Браузер адегенде ушул сайттын /api/weather дарегинен маалымат алат; ал жеткиликсиз болсо Open-Meteo кызматына түз кайрыла алат. Болжол кыска мөөнөткө сессия сактагычында сакталат. Тил барактын URL дарегинен тандалат.",
        ],
        [
          "Хостинг",
          "Хостинг суроо-талаптардын техникалык маалыматтарын иштете алат. Cloudflare өзүнчө иштөө көрсөткүчтөрүнүн/RUM скриптин кошушу мүмкүн; скрипттин болушу маалымат чындап жөнөтүлгөнүн ырастабайт.",
        ],
        [
          "Жок кызматтар",
          "Бул сайтта аккаунт, брондоо же байланыш формасы жок. Браузердин cookie жана сактагыч жөндөөлөрүн өзүңүз башкара аласыз.",
        ],
      ],
    },
    terms: {
      title: "Колдонуу шарттары",
      intro: "Бул базардын же мамлекеттик мекеменин расмий сайты эмес.",
      sections: [
        [
          "Маалыматтын чеги",
          "Маалымат жалпы багыт үчүн берилет. Бул гид бүгүнкү иштөөнү, көчүрүүнүн аякташын, так графикти же кызматтарды кепилдебейт. Сапар алдында керектүү жайды жана кирүүнү расмий канал же сатуучу аркылуу тактаңыз.",
        ],
        [
          "Сүрөттөр",
          "Thomas Depenbusch (Depi) тарткан 2007-жылдагы сүрөт CC BY 2.0 лицензиясында; булагы жана өзгөртүү маалыматы сүрөттүн жанында берилген. Тарыхый сүрөт азыркы абалдын далили эмес.",
        ],
        [
          "Тышкы шилтемелер",
          "Үчүнчү жактын кызматтары өз алдынча иштейт. Алардын мазмуну жана жеткиликтүүлүгү өзгөрүшү мүмкүн.",
        ],
      ],
    },
    cookies: {
      title: "Cookie жана сактагыч маалыматы",
      intro: "Гид колдонгон cookie жана браузер сактагычы жөнүндө маалымат.",
      sections: [
        [
          "Google Analytics",
          "Сайт Google Analytics өлчөө мүмкүнчүлүгүн жүктөйт. Cookie’ни бөгөттөө же өчүрүү үчүн браузердин жөндөөлөрүн колдонуңуз.",
        ],
        [
          "Аба ырайы",
          "Болжолдун кэши сессия сактагычында болушу мүмкүн. Ал карта белгисинин жалпы координаттарына тиешелүү; сайт түзмөктүн геолокациясын сурабайт.",
        ],
        [
          "Тил жана башка кызматтар",
          "Тил URL менен аныкталат. Google Maps, Google Fonts, Open-Meteo жана хостинг кызматтарынын өз саясаттары бар; браузердин сактагычын тазалоо алардын бардык маалымат иштетүүсүн токтотот деп кепилденбейт.",
        ],
      ],
    },
  },
  en: {
    back: "Back to the guide",
    updated: "Updated 23 October 2026",
    privacy: {
      title: "Privacy policy",
      intro: "The services and data flow used by this independent guide.",
      sections: [
        [
          "Services",
          "The page uses a Google Analytics measurement script, embedded Google Maps and Google Fonts. Google Analytics loads when pages open; use your browser settings to manage cookies.",
        ],
        [
          "Weather and storage",
          "The browser first requests this site’s /api/weather endpoint; if unavailable, it can request Open-Meteo directly. Forecasts may be cached briefly in session storage. The page URL selects language.",
        ],
        [
          "Hosting",
          "Hosting can process technical request data. Cloudflare may add a separate performance/RUM beacon; script presence alone does not establish successful metric transmission.",
        ],
        [
          "Absent features",
          "This site has no accounts, booking service or contact form. You can manage cookies and browser storage through your browser settings.",
        ],
      ],
    },
    terms: {
      title: "Terms of use",
      intro:
        "This is not an official website of the market or a public authority.",
      sections: [
        [
          "Limits of information",
          "Information provides general orientation. This guide does not guarantee operation today, completed relocation, a full schedule or facilities. Confirm the intended site and access with official channels or the trader before travel.",
        ],
        [
          "Photographs",
          "Thomas Depenbusch (Depi)’s 2007 photograph is licensed CC BY 2.0; source and modification notices appear beside the image. A historic photograph is not proof of current conditions.",
        ],
        [
          "External links",
          "Third-party services operate independently. Their content and availability can change.",
        ],
      ],
    },
    cookies: {
      title: "Cookies and browser storage",
      intro:
        "Information about the cookies and browser storage used by the guide.",
      sections: [
        [
          "Google Analytics",
          "The site loads Google Analytics measurement capability. Use browser settings to block or remove cookies.",
        ],
        [
          "Weather",
          "Forecast data can be cached in session storage for the public map-listing coordinates. The site does not request device geolocation.",
        ],
        [
          "Language and other services",
          "Language follows the URL. Google Maps, Google Fonts, Open-Meteo and hosting services apply their own policies; clearing browser storage is not guaranteed to stop all of their data processing.",
        ],
      ],
    },
  },
} as const;
export default function LegalPage({
  locale,
  kind,
}: {
  locale: Locale;
  kind: Kind;
}) {
  const c = copy[locale],
    page = c[kind],
    prefix = locale === "en" ? "/en" : "";
  return (
    <main className="legal-shell">
      <header className="legal-header">
        <a href={prefix + "/"}>
          <ArrowLeft size={17} />
          {c.back}
        </a>
        <div className="language-toggle">
          <a href={"/" + kind} hrefLang="ky">
            KY
          </a>
          <a href={"/en/" + kind} hrefLang="en">
            EN
          </a>
        </div>
      </header>
      <article className="legal-paper">
        <div className="legal-mark">
          <ShieldCheck size={22} />
          <span>OSH BAZAAR</span>
        </div>
        <p className="eyebrow">{c.updated}</p>
        <h1>{page.title}</h1>
        <p className="legal-intro">{page.intro}</p>
        <div className="legal-sections">
          {page.sections.map(([title, body], i) => (
            <section key={title}>
              <span>0{i + 1}</span>
              <div>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </section>
          ))}
        </div>
        {kind !== "terms" && (
          <p>
            <a href="https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/">
              Cloudflare:{" "}
              {locale === "ky"
                ? "маалыматты чогултуу жөнүндө"
                : "data collection documentation"}
            </a>
          </p>
        )}
        <p>
          <a href={prefix + "/privacy"}>{copy[locale].privacy.title}</a> ·{" "}
          <a href={prefix + "/terms"}>{copy[locale].terms.title}</a> ·{" "}
          <a href={prefix + "/cookies"}>{copy[locale].cookies.title}</a>
        </p>
      </article>
    </main>
  );
}

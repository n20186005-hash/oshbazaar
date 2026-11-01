import { useState } from "react";
import { MapPin, ArrowUpRight, Menu, Languages } from "lucide-react";
import WeatherSection from "@/components/WeatherSection";
type Locale = "ky" | "en";
const MAP = "https://maps.app.goo.gl/Zwu3fXYciWxa9A7ZA";
const MUNICIPAL = "https://www.bishkek.gov.kg/ru/post/34542";
const TRANSFER =
  "https://ru.kabar.kg/news/novyj-oshskij-rynok-budet-prinadlezhat-gosudarstvu/";
const PHOTO =
  "https://commons.wikimedia.org/wiki/File:Osh_Bazaar_Bishkek,_Kyrgyzstan_(1407198324).jpg";
const copy = {
  ky: {
    title: "Ош базары",
    location: "Бишкек · Кыргызстан",
    kicker: "КӨЗ КАРАНДЫСЫЗ ГИД",
    deck: "Бүгүн иштейби, кайсы жерге баруу керек жана эмнени алдын ала тактоо зарыл? Бул гид картадагы белгилөөнү базардын азыркы иштөө абалынан бөлүп көрсөтөт.",
    nav: ["Абалы", "Баруу", "Аба ырайы", "Карта", "Суроолор"],
    map: "Картадагы белгилөөнү текшерүү",
    plan: "Сапардан мурда окуңуз",
    statusTitle: "Ош базары бүгүн иштейби?",
    statusBody:
      "Бул гид бүгүн бардык катарлардын иштегенин же көчүрүү аяктаганын так ырастабайт. 2026-жылдын 4-сентябрындагы Кабар кабарында жаңы базардын курулушу жана сатуучуларды көчүрүүгө даярдык айтылган. 30-октябрь 2026 текшерүү боюнча жаңы базардын негизги курулушу аяктаган деп баяндалат, ачылышы 2027-жылдын жазына пландалган. Мэриянын билдирүүсү «Ош базары» аймагындагы текшерүүнү баяндайт. Сапар алдында керектүү сатуучу же шаардык расмий канал аркылуу соода ордун жана кирүүнү тактаңыз.",
    municipal: "Мэриянын билдирүүсү",
    transfer: "Кабар: көчүрүү жөнүндө 4-сентябрдагы кабар",
    date: "Текшерилген күн: 2026-жылдын 30-октябры",
    cue: "Google Maps текшерүүдө 09:00 ачылуу белгисин көрсөткөн. Бул толук апталык график же бүгүнкү иштөөнүн кепилдиги эмес.",
    rating: "Google Maps: 3.6/5 · 39 279 пикир · 30-октябрь 2026",
    photoAlt:
      "2007-жылы сүрөткө тартылган базардагы кургатылган азыктар жана соода текчелери",
    photoNote:
      "2007-жылдагы сүрөт; азыркы соода ордун же иштөө абалын ырастабайт.",
    credit:
      "Сүрөт: Thomas Depenbusch (Depi), 16-сентябрь 2007 · өлчөмү/кысылышы өзгөртүлгөн; көрсөтүүдө кесилген жана түсү жөндөлгөн.",
    fieldTitle: "Базарды түшүнүү, сапарды тактоо",
    fieldBody:
      "«Ош базары» бул гидде Бишкектеги карта белгисине тиешелүү. Аны Ош шаарындагы башка базарлар менен чаташтырбаңыз. Тарыхый сүрөттөр соода турмушун көрсөтөт, бирок бүгүнкү ассортиментти, кызматтарды же ачылууну далилдебейт.",
    visitTitle: "Барууну кантип пландаса болот?",
    cards: [
      [
        "Иштөө убактысы",
        "Толук график ырасталган эмес",
        "Керектүү катар, кире бериш жана иш күнүн түздөн-түз тактаңыз.",
      ],
      [
        "Жайгашкан жер",
        "Эски жана жаңы жайды тактаңыз",
        "Картадагы белгини көрүп эле көчүрүү бүттү же бүтө элек деп жыйынтык чыгарбаңыз.",
      ],
      [
        "Жетүү жолу",
        "Акыркы маалыматты караңыз",
        "Расмий транспорт маалыматын жана түшүү чекитин сапар күнү текшериңиз.",
      ],
      [
        "Керектүү кызмат",
        "Алдын ала сураңыз",
        "Даараткана, токтотмо, тоскоолдуксуз кирүү жана төлөм ыкмасын бул гид кепилдебейт.",
      ],
    ],
    routesTitle: "Жетүү жана күнүмдүк даярдык",
    routes: [
      [
        "КООМДУК УНАА",
        "Каттамды кайра тактаңыз",
        "Тандалган соода жайына барчу каттамды жана кайтуу жолун текшериңиз; эски автобекетке же мурдагы каттам номерине таянбаңыз.",
      ],
      [
        "ТАКСИ",
        "Түшүү жерин сүйлөшүңүз",
        "Айдоочу менен так даректи жана коопсуз түшүү жерин тактаңыз; кайсы базар жайына баратканыңызды айтыңыз.",
      ],
      [
        "КЫСКА БАРУУ",
        "Ийкемдүү план түзүңүз",
        "Ачылыш ырасталса, өзүңүзгө керек бөлүктү гана тандаңыз; жабык жайга кирүүгө аракет кылбаңыз.",
      ],
      [
        "СЫЙ-УРМАТ",
        "Сатып алуу жана сүрөт",
        "Бааны жана төлөмдү алдын ала тактаңыз. Адамды жакындан сүрөткө тартардан мурда уруксат сураңыз.",
      ],
    ],
    mapTitle: "Берилген Google Maps белгиси",
    mapBody:
      "Белги: Бишкек, Кыргызстан; 42.874967, 74.570242. Бул жаңы комплекстин ырасталган координаты эмес. Бүгүн бара турган соода ордун өзүнчө тактаңыз.",
    faqTitle: "Сапар алдында суроолор",
    faq: [
      [
        "Ош базары бүгүн иштейби?",
        "Бул гид бүгүнкү иштөөнү так ырастабайт. Көчүрүү тууралуу 2026-жылдагы билдирүүлөр жана картадагы 09:00 белгиси бардык катарлардын ачылышын билдирбейт; сатуучу же расмий шаардык канал аркылуу текшериңиз.",
      ],
      [
        "Ош базары кайсы шаарда?",
        "Бул гид Бишкектеги Ош базарынын берилген карта белгисин сүрөттөйт, Ош шаарындагы базарды эмес. Бүгүнкү соода дарегин сапар алдында тактаңыз.",
      ],
      [
        "Иштөө убактысы 09:00–17:00бү?",
        "Толук апталык график ырасталган эмес. 30-октябрь 2026 текшерүүдө Maps 09:00 ачылуу белгисин көрсөткөн; жабылуу убактысын мындан чыгарууга болбойт.",
      ],
      [
        "Жаңы базарга көчүү аяктадыбы?",
        "4-сентябрдагы Кабар кабары көчүрүүгө даярдык жөнүндө. 30-октябрь 2026 текшерүү боюнча жаңы базардын негизги курулушу аяктаган деп баяндалат, ачылышы 2027-жылдын жазына пландалган. Бул гид көчүүнүн аяктаганын же жаңы комплекстин бүгүнкү ачылышын ырастабайт.",
      ],
      [
        "Даараткана же тоскоолдуксуз кирүү барбы?",
        "Кызматтарды, кирүүнү жана жардамды барчу соода жайыңыздан алдын ала тактаңыз; бул гид аларды текшерген эмес.",
      ],
    ],
    sourcesTitle: "Булактар жана чектөөлөр",
    sourcesBody:
      "Google Maps баасы үчүнчү жактын белгилүү күндөгү маалыматы. Бул сайт пикирлерди чогулткан эмес жана расмий базар оператору эмес. Булактардын датасын жана кайсы жай жөнүндө экенин салыштырыңыз.",
    footer:
      "Көз карандысыз маалыматтык гид; мамлекеттик органдарга же базардын операторуна тиешеси жок.",
    guidesTitle: "Гиддер жана темалар",
    guides: [
      ["Ош базары бүгүн иштейби?", "/status"],
      ["Көчүрүү графиги", "/relocation-timeline"],
      ["Эски жана жаңы базар", "/old-vs-new-osh-bazaar"],
      ["Жаңы Ош базары 2027", "/new-osh-bazaar-2027"],
      ["Кантип баруу", "/getting-to-osh-bazaar"],
      ["43-автобус", "/bus-43"],
      ["Биринчи ирет соода", "/first-time-shopping-guide"],
      ["Эмне жеген", "/what-to-eat-at-osh-bazaar"],
      ["Жакында эмне кылуу", "/things-to-do-near-osh-bazaar"],
      ["Жабык болсо эмне кылам", "/if-osh-bazaar-is-closed"],
    ],
    legal: ["Купуялык", "Шарттар", "Cookie маалыматы"],
    menu: "Меню",
    skip: "Негизги мазмунга өтүү",
  },
  en: {
    title: "Osh Bazaar",
    location: "Bishkek · Kyrgyzstan",
    kicker: "INDEPENDENT VISITOR GUIDE",
    deck: "Is it operating today, which location should you use, and what needs checking first? This guide distinguishes the supplied map listing from verified current trading status.",
    nav: ["Status", "Plan a visit", "Weather", "Map", "Questions"],
    map: "Check the map listing",
    plan: "Read before travelling",
    statusTitle: "Is Osh Bazaar open today?",
    statusBody:
      "This guide cannot confirm that every trading area is operating today or that relocation is complete. Kabar’s 4 September 2026 report described construction of a new market and preparations to transfer traders. As of the 30 October 2026 check, the new market’s main construction is reported complete and opening is planned for spring 2027. A municipal notice describes an inspection at Osh Bazary. Before travel, confirm your intended trader’s current location and access with the trader or official city channels.",
    municipal: "Municipal notice",
    transfer: "Kabar: 4 September transfer report",
    date: "Checked 30 October 2026",
    cue: "Google Maps showed an opens-at-09:00 cue when checked. This is not a complete weekly schedule or a guarantee of trading today.",
    rating: "Google Maps: 3.6/5 · 39,279 reviews · 30 October 2026",
    photoAlt: "Market stalls and dried goods photographed in 2007",
    photoNote:
      "Historic 2007 photograph; it does not establish current trading location or operation.",
    credit:
      "Photo: Thomas Depenbusch (Depi), 16 September 2007 · resized/compressed; display crop and colour treatment.",
    fieldTitle: "Understand the market; confirm your visit",
    fieldBody:
      "Here, “Osh Bazaar” refers to the supplied Bishkek map listing, rather than a market in Osh city. Historical photographs illustrate market life; they do not verify today’s goods, facilities or opening.",
    visitTitle: "What to check before travelling",
    cards: [
      [
        "HOURS",
        "Full schedule unverified",
        "Confirm your intended trading area, entrance and trading day directly.",
      ],
      [
        "LOCATION",
        "Distinguish old and new sites",
        "A map pin alone does not establish whether a transfer has or has not finished.",
      ],
      [
        "TRANSPORT",
        "Check current connections",
        "Verify transport information and your drop-off point on the day.",
      ],
      [
        "FACILITIES",
        "Ask before relying on them",
        "This guide does not guarantee toilets, parking, step-free access or payment methods.",
      ],
    ],
    routesTitle: "Getting there and preparing",
    routes: [
      [
        "PUBLIC TRANSPORT",
        "Recheck your connection",
        "Confirm the route to the intended trading location and your return journey; do not rely on a former bus station or old route number.",
      ],
      [
        "TAXI",
        "Agree on the destination",
        "Confirm the exact address and a safe drop-off point with the driver; specify which market site you mean.",
      ],
      [
        "SHORT VISIT",
        "Keep plans flexible",
        "If operation is confirmed, choose the area relevant to your visit. Do not enter closed areas.",
      ],
      [
        "RESPECT",
        "Buying and photography",
        "Agree on price and payment before purchasing. Ask before close photographs of people.",
      ],
    ],
    mapTitle: "The supplied Google Maps listing",
    mapBody:
      "Listing reference: Bishkek, Kyrgyzstan; 42.874967, 74.570242. These are not verified coordinates for a new complex. Confirm the trading site you intend to visit separately.",
    faqTitle: "Questions before a visit",
    faq: [
      [
        "Is Osh Bazaar open today?",
        "This guide cannot confirm today’s operation. The 2026 transfer announcements and a Maps 09:00 opening cue do not establish that every area is open; check with the intended trader or official city channels.",
      ],
      [
        "Which city is this Osh Bazaar in?",
        "This guide concerns the supplied Bishkek listing, rather than a market in Osh city. Confirm your current trading destination before travelling.",
      ],
      [
        "Are the hours 09:00–17:00?",
        "A full weekly schedule has not been verified. Maps showed an opens-at-09:00 cue when checked on 30 October 2026; a closing time cannot be inferred from that cue.",
      ],
      [
        "Has the new market transfer finished?",
        "Kabar’s 4 September report described preparations for a transfer. As of the 30 October 2026 check, the new market’s main construction is reported complete and opening is planned for spring 2027. This guide does not establish completed relocation or today’s opening of the new complex.",
      ],
      [
        "Are toilets or step-free routes available?",
        "Confirm facilities, access and assistance with the trading site you plan to visit; they have not been verified by this guide.",
      ],
    ],
    sourcesTitle: "Sources and limits",
    sourcesBody:
      "The Google Maps rating is a dated third-party snapshot. This site did not collect the reviews and is not the market operator. Compare each source’s date and the location it describes.",
    footer:
      "Independent information guide; not affiliated with a public authority or market operator.",
    guidesTitle: "Guides and topics",
    guides: [
      ["Is Osh Bazaar open today?", "/status"],
      ["Relocation timeline", "/relocation-timeline"],
      ["Old and new market", "/old-vs-new-osh-bazaar"],
      ["New Osh Bazaar 2027", "/new-osh-bazaar-2027"],
      ["How to get there", "/getting-to-osh-bazaar"],
      ["Bus 43", "/bus-43"],
      ["First-time shopping", "/first-time-shopping-guide"],
      ["What to eat", "/what-to-eat-at-osh-bazaar"],
      ["Things to do nearby", "/things-to-do-near-osh-bazaar"],
      ["If Osh Bazaar is closed", "/if-osh-bazaar-is-closed"],
    ],
    legal: ["Privacy", "Terms", "Cookie information"],
    menu: "Menu",
    skip: "Skip to main content",
  },
} as const;
function Credit({ locale }: { locale: Locale }) {
  return (
    <p className="photo-credit">
      <a href={PHOTO}>{copy[locale].credit}</a>{" "}
      <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>
    </p>
  );
}
export default function Home({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const prefix = locale === "en" ? "/en" : "";
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
  const place = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Osh Bazaar, Bishkek — listing reference",
    url: "https://oshbazaar.org" + prefix + "/",
    description:
      "Independent listing reference; confirm current trading location and operation before travel.",
    hasMap: MAP,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bishkek",
      addressCountry: "KG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.874967,
      longitude: 74.570242,
    },
    image: "https://oshbazaar.org/assets/social.jpg",
  };
  return (
    <div className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }}
      />
      <a className="skip-link" href="#content">
        {t.skip}
      </a>
      <header className="site-header">
        <a href={prefix + "/"} className="brand">
          <img src="/assets/osh-bazaar-mark.webp" alt="" />
          <span>
            {t.title}
            <small>{t.kicker}</small>
          </span>
        </a>
        <nav id="main-menu" data-open={menuOpen} aria-label={t.menu}>
          {t.nav.map((label, i) => (
            <a
              key={label}
              href={"#" + ["status", "visit", "weather", "map", "faq"][i]}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="language-toggle">
          <Languages size={15} />
          <a
            href="/"
            hrefLang="ky"
            aria-current={locale === "ky" ? "page" : undefined}
          >
            KY
          </a>
          <a
            href="/en/"
            hrefLang="en"
            aria-current={locale === "en" ? "page" : undefined}
          >
            EN
          </a>
        </div>
        <button
          className="menu-button"
          aria-controls="main-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={18} />
          {t.menu}
        </button>
      </header>
      <main id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">{t.kicker}</p>
            <p className="hero-location">
              <MapPin size={16} />
              {t.location}
            </p>
            <h1>{t.title}</h1>
            <p className="hero-deck">{t.deck}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#status">
                {t.plan}
              </a>
              <a className="button button-quiet" href={MAP}>
                {t.map}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <figure className="hero-photo-wrap">
            <img
              className="hero-photo"
              src="/assets/osh-bazaar-market.webp"
              alt={t.photoAlt}
              width="1400"
              height="930"
            />
            <figcaption>
              <Credit locale={locale} />
              <p className="photo-credit">{t.photoNote}</p>
            </figcaption>
          </figure>
        </section>
        <section id="status" className="status-section">
          <p className="section-number">{t.date}</p>
          <h2>{t.statusTitle}</h2>
          <p>{t.statusBody}</p>
          <p>{t.cue}</p>
          <p>
            <a href={MUNICIPAL}>{t.municipal} ↗</a> ·{" "}
            <a href={TRANSFER}>{t.transfer} ↗</a>
          </p>
        </section>
        <section id="market" className="field-section">
          <div className="field-grid">
            <div className="field-title">
              <h2>{t.fieldTitle}</h2>
            </div>
            <div className="field-copy">
              <p>{t.fieldBody}</p>
            </div>
          </div>
        </section>
        <section
          id="visit"
          className="plan-section"
          style={{ backgroundImage: "url(/assets/osh-bazaar-paper.webp)" }}
        >
          <div className="section-heading">
            <h2>{t.visitTitle}</h2>
          </div>
          <div className="fact-grid">
            {t.cards.map(([label, title, body]) => (
              <article className="fact-card" key={label}>
                <p>{label}</p>
                <h3>{title}</h3>
                <span>{body}</span>
              </article>
            ))}
          </div>
        </section>
        <WeatherSection locale={locale} lat={42.874967} lon={74.570242} />
        <section
          id="know"
          className="route-section"
          style={{ backgroundImage: "url(/assets/osh-bazaar-textile.webp)" }}
        >
          <div className="section-heading">
            <h2>{t.routesTitle}</h2>
          </div>
          <div className="route-list">
            {t.routes.map(([label, title, body]) => (
              <article key={label}>
                <span>{label}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="map" className="map-section">
          <div className="map-note">
            <h2>{t.mapTitle}</h2>
            <p>{t.mapBody}</p>
            <a href={MAP}>{t.map} ↗</a>
            <p className="map-rating">{t.rating}</p>
          </div>
          <iframe
            title={t.mapTitle}
            src="https://www.google.com/maps?q=42.874967,74.570242&output=embed"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </section>
        <section id="faq" className="faq-section">
          <div className="faq-heading">
            <h2>{t.faqTitle}</h2>
          </div>
          <div className="faq-list">
            {t.faq.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="source-card">
          <div>
            <h2>{t.sourcesTitle}</h2>
            <p>{t.sourcesBody}</p>
            <p>{t.date}</p>
            <p>
              <a href={MUNICIPAL}>{t.municipal}</a> ·{" "}
              <a href={TRANSFER}>{t.transfer}</a> ·{" "}
              <a href={MAP}>Google Maps</a>
            </p>
          </div>
        </section>
        <section id="guides" className="home-guides">
          <h2>{t.guidesTitle}</h2>
          <ul>
            {t.guides.map(([label, href]) => (
              <li key={href}>
                <a href={prefix + href}>{label}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-brand">
          <img src="/assets/osh-bazaar-mark.webp" alt="" />
          <p>{t.title}</p>
        </div>
        <div className="footer-statement">
          <p>{t.footer}</p>
        </div>
        <div className="footer-meta">
          <div>
            {t.legal.map((label, i) => (
              <a
                key={label}
                href={prefix + "/" + ["privacy", "terms", "cookies"][i]}
              >
                {label}
              </a>
            ))}
          </div>
          <Credit locale={locale} />
          <small>©2026 Osh Bazaar Field Notes</small>
        </div>
      </footer>
    </div>
  );
}

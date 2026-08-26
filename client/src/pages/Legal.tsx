/**
 * Style reminder — 市集田野笔记：法律页面延续纸张、石榴红索引和不带营销压力的阅读节奏。
 */
import { useEffect, useState } from "react";
import { ArrowLeft, Languages, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

type Locale = "ky" | "en";
type LegalKind = "privacy" | "terms" | "cookies";

const legalCopy = {
  ky: {
    back: "Башкы бетке кайтуу",
    brandKicker: "ТАЛАА ЖАЗМАЛАРЫ",
    updated: "Акыркы жаңыртуу: 2026-жылдын августу",
    privacy: { title: "Купуялык саясаты", intro: "Бул көз карандысыз маалыматтык сайт эң аз зарыл болгон маалымат менен иштөөгө умтулат.", sections: [["Биз чогулткан маалымат", "Биз кызматты көрсөтүү үчүн керектүү эң аз көлөмдөгү маалыматты гана иштетүүгө аракет кылабыз. Ал браузер жана түзмөк тууралуу техникалык маалыматты, cookie жана сиз өзүңүз байланыш аркылуу берген маалыматты камтышы мүмкүн."], ["Маалыматты кантип колдонобуз", "Маалымат сайттын мазмунун жана колдонуу ыңгайлуулугун жакшыртуу, сурамдарга жооп берүү жана тиешелүү мыйзамдык милдеттерди аткаруу үчүн гана колдонулат."], ["Үчүнчү жактын кызматтары", "Барак карта көрсөтүү үчүн Google Maps сыяктуу кызматтарды колдоно алат. Мындай кызматтардын өз купуялык шарттары болот."], ["Сиздин укуктарыңыз", "Колдонулган мыйзамдарга жараша, жеке маалыматка жетүү, аны оңдоо же өчүрүүнү суроо жана даттануу укугуңуз болушу мүмкүн."]] },
    terms: { title: "Колдонуу шарттары", intro: "Бул сайтка кирүү менен сиз төмөнкү маалыматтык колдонуу шарттарын түшүнөсүз.", sections: [["Мазмунду колдонуу", "Бардык материал маалыматтык максатта гана берилет. Бул көз карандысыз үчүнчү тараптын жол көрсөткүчү жана базардын, мамлекеттик органдардын же коммерциялык операторлордун расмий барагы эмес."], ["Маалыматтын тактыгы", "Биз мазмунду так берүүгө аракет кылабыз, бирок толуктугун же азыркы абалын кепилдей албайбыз. Каттам, иш убактысы жана шарттар өзгөрүшү мүмкүн; маанилүү маалыматты сапар алдында расмий каналдан текшериңиз."], ["Автордук укук", "Барактагы оригиналдуу текст жана дизайн корголот. Фотосүрөттөрдүн укугу тиешелүү авторлорго таандык; ар бир материалдын лицензиялык шартын урматтаңыз."], ["Жоопкерчиликтин чеги", "Бул материал “кандай болсо ошондой” берилет. Бул барактагы маалыматтын негизинде кабыл алынган саякат чечимдеринен келип чыккан чыгым үчүн сайт жооп бербейт."]] },
    cookies: { title: "Cookie жөндөөлөрү", intro: "Cookie браузердеги жөндөөлөрдү эстеп, баракты ыңгайлуураак кылышы мүмкүн.", sections: [["Зарыл cookie", "Бул cookie сайттын негизги иштеши үчүн колдонулушу мүмкүн жана өчүрүлбөйт."], ["Аналитикалык cookie", "Эгер активдештирилсе, алар анонимдүү колдонуу үлгүлөрүн түшүнүүгө жардам берет. Бул демо баракта анализ cookie’си жүктөлбөйт."], ["Каалоо cookie", "Тил тандооңуз жергиликтүү браузер сактагычында сакталып, кийинки ачканда ошол тил көрсөтүлөт."], ["Тандоолорду башкаруу", "Браузериңиздин cookie жөндөөлөрүн каалаган убакта өзгөртө аласыз. Айрым cookie’лерди өчүрүү сайттын айрым ыңгайлуулуктарына таасир этиши мүмкүн."]] },
  },
  en: {
    back: "Back to the guide",
    brandKicker: "FIELD NOTES",
    updated: "Last updated: August 2026",
    privacy: { title: "Privacy policy", intro: "This independent information site aims to work with the minimum data needed to provide the guide.", sections: [["Information we collect", "We aim to process only the minimum information needed to provide the service. This may include technical browser and device information, cookies, and information you voluntarily provide when contacting us."], ["How we use information", "Information is used only to improve the site’s content and usability, respond to requests, and meet applicable legal obligations."], ["Third-party services", "The page may use services such as Google Maps to display location information. These services have their own privacy terms."], ["Your rights", "Depending on applicable law, you may have rights to access, correct, request deletion of, or raise concerns about your personal information."]] },
    terms: { title: "Terms of use", intro: "By accessing this site, you acknowledge the following information-use terms.", sections: [["Using the content", "All material is provided for information only. This is an independent third-party guide, not an official site of the bazaar, any public authority, or a commercial operator."], ["Accuracy of information", "We work to present useful information but cannot guarantee its completeness or current status. Routes, hours, and conditions can change; check official channels before any important journey."], ["Intellectual property", "Original copy and design on this site are protected. Image rights belong to their respective creators; respect the licence terms for each asset."], ["Limitation of liability", "Material is provided as is. This site is not responsible for loss arising from travel decisions made using information on this page."]] },
    cookies: { title: "Cookie settings", intro: "Cookies can remember browser choices and make the guide easier to use.", sections: [["Necessary cookies", "These cookies may be used for the basic functioning of the site and cannot be switched off."], ["Analytics cookies", "If enabled, they help us understand anonymous usage patterns. No analytics cookie is loaded in this demonstration page."], ["Preference cookies", "Your language choice is saved in local browser storage so the same language can appear on your next visit."], ["Managing your choices", "You can change cookie settings in your browser at any time. Disabling some cookies may affect certain conveniences on the site."]] },
  },
} as const;

function LegalPage({ kind }: { kind: LegalKind }) {
  const [locale, setLocale] = useState<Locale>(() => typeof window !== "undefined" && window.localStorage.getItem("osh-bazaar-locale") === "en" ? "en" : "ky");
  const c = legalCopy[locale];
  const page = c[kind];
  useEffect(() => { document.documentElement.lang = locale; document.title = `${page.title} — Ош базары`; }, [locale, page.title]);
  const select = (next: Locale) => { setLocale(next); window.localStorage.setItem("osh-bazaar-locale", next); };

  return <main className="legal-shell">
    <header className="legal-header"><Link href="/"><ArrowLeft size={17} />{c.back}</Link><div className="language-toggle"><Languages size={15} /><button className={locale === "ky" ? "is-active" : ""} onClick={() => select("ky")}>KY</button><button className={locale === "en" ? "is-active" : ""} onClick={() => select("en")}>EN</button></div></header>
    <article className="legal-paper"><div className="legal-mark"><ShieldCheck size={22} /><span>ОШ БАЗАРЫ / {c.brandKicker}</span></div><p className="eyebrow"><span />{c.updated}</p><h1>{page.title}</h1><p className="legal-intro">{page.intro}</p><div className="legal-sections">{page.sections.map(([title, body], index) => <section key={title}><span>0{index + 1}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</div></article>
  </main>;
}

export const PrivacyPage = () => <LegalPage kind="privacy" />;
export const TermsPage = () => <LegalPage kind="terms" />;
export const CookiesPage = () => <LegalPage kind="cookies" />;

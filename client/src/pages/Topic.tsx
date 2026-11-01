import { Languages, ArrowUpRight } from "lucide-react";
import { getTopic, topicPath, type Locale } from "@/topics";

const MUNICIPAL = "https://www.bishkek.gov.kg/ru/post/34542";
const TRANSFER =
  "https://ru.kabar.kg/news/novyj-oshskij-rynok-budet-prinadlezhat-gosudarstvu/";

const labels = {
  ky: {
    updated: "Текшерилген күн",
    sourceTitle: "Булактар жана чектөөлөр",
    sourceBody:
      "Бул сайт расмий базар оператору эмес. Булактардын датасын жана кайсы жай жөнүндө экенин салыштырыңыз.",
    municipal: "Мэриянын билдирүүсү",
    transfer: "Кабар: көчүрүү жөнүндө кабар",
    related: "Байланыштуу гиддер",
    faq: "Суроолор",
    footer:
      "Көз карандысыз маалыматтык гид; мамлекеттик органдарга же базардын операторуна тиешеси жок.",
    legal: ["Купуялык", "Шарттар", "Cookie маалыматы"],
    brandName: "Ош базары",
    brandKicker: "КӨЗ КАРАНДЫСЫЗ ГИД",
  },
  en: {
    updated: "Checked",
    sourceTitle: "Sources and limits",
    sourceBody:
      "This site is not the official market operator. Compare each source’s date and the location it describes.",
    municipal: "Municipal notice",
    transfer: "Kabar: transfer report",
    related: "Related guides",
    faq: "Questions",
    footer:
      "Independent information guide; not affiliated with a public authority or market operator.",
    legal: ["Privacy", "Terms", "Cookie information"],
    brandName: "Osh Bazaar",
    brandKicker: "INDEPENDENT VISITOR GUIDE",
  },
} as const;

export default function Topic({ locale, slug }: { locale: Locale; slug: string }) {
  const topic = getTopic(slug);
  if (!topic) return null;
  const t = topic[locale];
  const l = labels[locale];
  const prefix = locale === "en" ? "/en" : "";

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: l.brandName,
        item: "https://oshbazaar.org" + prefix + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t.h1,
        item: "https://oshbazaar.org" + topicPath(locale, slug),
      },
    ],
  };

  return (
    <div className="topic-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <header className="topic-header">
        <a href={prefix + "/"} className="brand">
          <img src="/assets/osh-bazaar-mark.webp" alt="" />
          <span>
            {l.brandName}
            <small>{l.brandKicker}</small>
          </span>
        </a>
        <div className="language-toggle">
          <Languages size={15} />
          <a
            href={topicPath("ky", slug)}
            hrefLang="ky"
            aria-current={locale === "ky" ? "page" : undefined}
          >
            KY
          </a>
          <a
            href={topicPath("en", slug)}
            hrefLang="en"
            aria-current={locale === "en" ? "page" : undefined}
          >
            EN
          </a>
        </div>
      </header>
      <main id="content" className="topic-article">
        <article>
          <p className="eyebrow">{t.updated}</p>
          <h1>{t.h1}</h1>
          <p className="topic-lead">{t.lead}</p>
          {t.sections.map((s) => (
            <section className="topic-section" key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
          <section className="faq-section" id="faq">
            <div className="faq-heading">
              <h2>{l.faq}</h2>
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
          <section className="topic-source">
            <h2>{l.sourceTitle}</h2>
            <p>{l.sourceBody}</p>
            <p>{t.updated}</p>
            <p>
              <a href={MUNICIPAL}>{l.municipal} ↗</a> ·{" "}
              <a href={TRANSFER}>{l.transfer} ↗</a>
            </p>
          </section>
          {topic.related.length > 0 && (
            <section className="topic-links">
              <h2>{l.related}</h2>
              <ul>
                {topic.related.map((r) => {
                  const rt = getTopic(r);
                  if (!rt) return null;
                  return (
                    <li key={r}>
                      <a href={topicPath(locale, r)}>
                        {rt[locale].h1} <ArrowUpRight size={14} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
        </article>
      </main>
      <footer className="site-footer">
        <div className="footer-brand">
          <img src="/assets/osh-bazaar-mark.webp" alt="" />
          <p>{l.brandName}</p>
        </div>
        <div className="footer-statement">
          <p>{l.footer}</p>
        </div>
        <div className="footer-meta">
          <div>
            {l.legal.map((label, i) => (
              <a
                key={label}
                href={prefix + "/" + ["privacy", "terms", "cookies"][i]}
              >
                {label}
              </a>
            ))}
          </div>
          <small>©2026 Osh Bazaar Field Notes</small>
        </div>
      </footer>
    </div>
  );
}

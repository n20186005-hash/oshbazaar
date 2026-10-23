export default function NotFound({ locale = "ky" }: { locale?: "ky" | "en" }) {
  return (
    <main className="legal-shell">
      <section className="legal-paper">
        <h1>
          {locale === "ky"
            ? "404 — Барак табылган жок"
            : "404 — Page not found"}
        </h1>
        <p>
          {locale === "ky"
            ? "Бул дарек жеткиликсиз."
            : "This address is unavailable."}
        </p>
        <a href={locale === "ky" ? "/" : "/en/"}>
          {locale === "ky" ? "Башкы бетке кайтуу" : "Return to the guide"}
        </a>
      </section>
    </main>
  );
}

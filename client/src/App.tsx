import Home from "./pages/Home";
import LegalPage from "./pages/Legal";
import NotFound from "./pages/NotFound";
export default function App({ path = "/" }: { path?: string }) {
  const locale = path.startsWith("/en/") || path === "/en" ? "en" : "ky";
  const route = locale === "en" ? path.slice(3) || "/" : path;
  if (route === "/") return <Home locale={locale} />;
  if (["/privacy", "/terms", "/cookies"].includes(route))
    return (
      <LegalPage
        locale={locale}
        kind={route.slice(1) as "privacy" | "terms" | "cookies"}
      />
    );
  return <NotFound locale={locale} />;
}

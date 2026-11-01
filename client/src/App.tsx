import Home from "./pages/Home";
import LegalPage from "./pages/Legal";
import NotFound from "./pages/NotFound";
import Topic from "./pages/Topic";
import { topicSlugs } from "./topics";
export default function App({ path = "/" }: { path?: string }) {
  const locale = path.startsWith("/en/") || path === "/en" ? "en" : "ky";
  let route = locale === "en" ? path.slice(3) || "/" : path;
  if (route.length > 1 && route.endsWith("/")) route = route.slice(0, -1);
  if (route === "/") return <Home locale={locale} />;
  if (["/privacy", "/terms", "/cookies"].includes(route))
    return (
      <LegalPage
        locale={locale}
        kind={route.slice(1) as "privacy" | "terms" | "cookies"}
      />
    );
  if (topicSlugs.includes(route.slice(1)))
    return <Topic locale={locale} slug={route.slice(1)} />;
  return <NotFound locale={locale} />;
}

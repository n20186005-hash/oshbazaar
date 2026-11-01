import { renderToString } from "react-dom/server";
import App from "./App";
import { TOPICS, topicSlugs } from "./topics";
export function render(path: string) {
  return renderToString(<App path={path} />);
}
export { TOPICS, topicSlugs };

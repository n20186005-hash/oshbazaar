import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory cache for the weather proxy (server-side fetch + short TTL).
const weatherCache = new Map<string, { at: number; body: unknown }>();
const WEATHER_TTL_MS = 10 * 60 * 1000; // 10 minutes

app.get("/api/weather", async (req, res) => {
  const lat = Number(req.query.lat);
  const lon = Number(req.query.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    res.status(400).json({ error: "missing lat/lon" });
    return;
  }
  const key = `${lat.toFixed(4)},${lon.toFixed(4)}`;
  const cached = weatherCache.get(key);
  if (cached && Date.now() - cached.at < WEATHER_TTL_MS) {
    res.json(cached.body);
    return;
  }
  try {
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      `&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m` +
      `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max` +
      `&forecast_days=7&timezone=auto`;
    const upstream = await fetch(url, { headers: { accept: "application/json" } });
    const body = await upstream.json();
    weatherCache.set(key, { at: Date.now(), body });
    res.json(body);
  } catch {
    res.status(502).json({ error: "weather upstream unavailable" });
  }
});

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);

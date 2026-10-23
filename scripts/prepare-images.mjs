import sharp from "sharp";
import { mkdir } from "node:fs/promises";
await mkdir("client/public/assets", { recursive: true });
for (const [name, width] of [
  ["osh-bazaar-mark.png", 160],
  ["osh-bazaar-market.jpg", 1400],
  ["osh-bazaar-paper.png", 1200],
  ["osh-bazaar-textile.png", 1200],
])
  await sharp("assets/source/" + name)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile("client/public/assets/" + name.replace(/\.(png|jpg)$/, ".webp"));
await sharp("assets/source/osh-bazaar-market.jpg")
  .resize({ width: 1200 })
  .jpeg({ quality: 85 })
  .toFile("client/public/assets/social.jpg");

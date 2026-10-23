# Osh Bazaar — independent visitor guide

React/Vite guide with Kyrgyz at `/` and English at `/en/`, including the existing privacy, terms and cookie-information pages in both languages. The build prerenders the same React components used for hydration. Cloudflare Workers serves the HTML and the native `/api/weather?lat=…&lon=…` endpoint. The client retains its Open-Meteo fallback.

Use the package-pinned pnpm to install, then run `pnpm check`, `pnpm test` and `pnpm build`. The Worker configuration builds the full site with `npm run build`; a bare Vite build does not generate the route snapshots. Preview only after the build is frozen so the runtime asset manifest matches the HTML.

The supplied Bishkek map listing does not establish current operating status or completed relocation. The guide links dated municipal/state-agency information and explains what visitors must verify before travel. Google Analytics capability is preserved; cookie copy describes its actual loading rather than promising an absent consent control.

Original artwork and photograph source files are retained in `assets/source/`. `scripts/prepare-images.mjs` creates smaller public derivatives. See `ASSET_MANIFEST.md` for the exact photo source, licence and modification notice.

# Osh Bazaar Field Notes — complete source package

This folder contains the complete source code for the bilingual Osh Bazaar public-interest guide, together with every image used by the published page. The delivery copy uses local image paths so it can be retained or moved without relying on hosted project storage.

## Run locally

Use Node.js 22 or newer and pnpm 10 or newer. From this folder, run:

```bash
pnpm install
pnpm dev
```

To produce a production build, run:

```bash
pnpm build
```

## Included contents

| Path | Purpose |
|---|---|
| `client/` | React pages, components, styles, favicon, and bundled website assets. |
| `client/public/assets/` | All four images actually referenced by the home page. |
| `server/` and `shared/` | Template compatibility code required by the project build. |
| `package.json` and `pnpm-lock.yaml` | Dependency definitions and reproducible package lock. |
| `ideas.md` | Approved visual direction and brand decisions. |
| `ASSET_MANIFEST.md` | Image-by-image inventory and usage mapping. |

> The package intentionally excludes `node_modules/`, build output, logs, and version-control metadata. These are regenerated locally and are not part of the website source or original visual asset set.

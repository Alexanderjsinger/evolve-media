# Evolve Media

Marketing site for Evolve Media. Alexander runs digital marketing for small and mid-size businesses.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static files land in `dist/`.

## Cloudflare Pages

Connect this repository when you are ready to host it. No custom domain is required. Pages will assign a `pages.dev` address.

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node | 22 |

Set `siteUrl` in `src/data/site.ts` when a domain is chosen. Canonical URLs turn on from that value.

## Inquiry form

The form posts to [FormSubmit](https://formsubmit.co) and is delivered to `alexander.jeffrey.singer@gmail.com`.

The first submission sends a confirmation to that inbox. Open it and confirm the address. Until that click, FormSubmit holds the messages.

Copy, offers, proof, and the price live in `src/data/site.ts`.

# Evolve Media

Marketing site for Evolve Media. Alexander runs digital marketing for owner-led businesses under 50 people.

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

## Hosting

Cloudflare. Current public origin: `https://evolve-media.toastisadog.workers.dev`. Production branch `main`, build command `npm run build`, output `dist`, Node 22.

Copy, offers, proof, and the price live in `src/data/site.ts`.

## Inquiry form

The form posts to [FormSubmit](https://formsubmit.co) and is delivered to `alexander.jeffrey.singer@gmail.com`.

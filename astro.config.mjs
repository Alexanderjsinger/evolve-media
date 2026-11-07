import { defineConfig } from "astro/config";

// Set `site` to the public origin when a domain is chosen (no trailing slash).
// Canonical URLs turn on automatically once `siteUrl` in src/data/site.ts matches.
export default defineConfig({
  output: "static",
  compressHTML: true,
});

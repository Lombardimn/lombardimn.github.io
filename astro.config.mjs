import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// Configurations access routes

const SITE_URL = 'https://lombardidev.github.io'
//const SERVER_PORT = 4321
//const LOCAL_POST = `https://localhost:${SERVER_PORT}` 
//const URL_DOMAIN = 'https://lombardidev.ar'
// const SITE_URL = LOCAL_POST

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: SITE_URL,
});
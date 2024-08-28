import meta from "./content/meta";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  modules: ["@nuxt/icon", "@nuxtjs/seo", "@nuxtjs/sitemap", "@storyblok/nuxt"],
  storyblok: {
    accessToken: "RwMlg5bhpC9t5Yx8rn38SAtt",
    devtools: true,
  },
  site: {
    url: "https://henryowens.dev",
    name: meta.title,
    description: meta.description,
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed
  },
  sitemap: {
    includeAppSources: true,
    exclude: ["/contact"],
  },
});

import meta from "./content/meta";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  nitro: {
    externals: {
      inline: ['unhead'],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  modules: [
    "@nuxt/icon",
    "@nuxtjs/sitemap",
    "nuxt-schema-org",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
  ],

  googleFonts: {
    families: {
      Sono: true,
    },
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

  schemaOrg: {
    identity: {
      "@type": "Person",
      name: "Henry Owens",
      url: "https://henryowens.dev",
      address: {
        addressCountry: "Netherlands",
        addressLocality: "Amsterdam",
        addressRegion: "NH",
      },
      sameAs: [
        "https://github.com/henryowens",
        "https://linkedin.com/in/henrytomowens",
      ],
      jobTitle: "Web Developer",
      description: "I'm a web developer based in Amsterdam.",
      worksFor: {
        "@type": "Organization",
        name: "MatchWornShirt",
      },
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQFrrk9jFYiaMw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1640944712004?e=1741219200&v=beta&t=h07kbXxLWG7FcJcRa4cAZR1y_g-gW0ZCdVnIRd86LbE",
    },
    defaults: true,
  },

  compatibilityDate: "2025-03-26",
});
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@invictus.codes/nuxt-vuetify", "@nuxtjs/tailwindcss"],

  components: ["~/components"],

  css: ["@/assets/style/main.scss", "@/assets/style/util.scss"],

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
        themes: {
          light: {
            colors: {},
          },
          dark: {
            colors: {},
          },
          variables: {},
        },
      },
    },
    moduleOptions: {
      /* vuetify options */

      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,

      /* vite-plugin-vuetify options */
      styles: "sass",
      autoImport: true,
    },
  },

  devtools: { enabled: true },
});

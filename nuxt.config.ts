// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  typescript: {
    shim: false,
  },
})

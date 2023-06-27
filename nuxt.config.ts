import { LOCALES } from "./i18n";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  imports: { autoImport: false  },
  runtimeConfig: {
    public: {
      isProd: process.env.NODE_ENV === 'production'
    }
  },
  i18n: {
    baseUrl: process.env.I18N_BASE_URL,
    locales: [{ iso: 'pt-BR', code: LOCALES.PT_BR }, { iso: 'en-US', code: LOCALES.EN }],
    defaultLocale: LOCALES.PT_BR,
    vueI18n: './i18n.config.ts',
  },
})

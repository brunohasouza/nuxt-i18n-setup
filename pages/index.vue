<template>
  <div class="flex w-full h-screen items-center justify-center flex-col gap-8">
    <div class="flex items-center gap-4">
      <NuxtLink
        class="items-center w-20 h-10 rounded inline-flex justify-center text-center border-none bg-emerald-500 text-white hover:bg-emerald-400 focus:shadow-none focus:outline-none active:bg-emerald-300"
        :class="{ '!bg-emerald-300': locale === LOCALES.PT_BR }"
        :to="switchLocale(LOCALES.PT_BR)"
      >
        PT-BR
      </NuxtLink>
      <NuxtLink
        class="items-center inline-flex justify-center w-20 h-10 rounded text-center border-none bg-emerald-500 text-white hover:bg-emerald-400 focus:shadow-none focus:outline-none active:bg-emerald-300"
        :class="{ '!bg-emerald-300': locale === LOCALES.EN }"
        :to="switchLocale(LOCALES.EN)"
      >
        EN
      </NuxtLink>
    </div>
    <div class="flex items-center gap-4 w-full flex-wrap justify-center px-4">
      <span class="bg-sky-500 text-white text-center inline-block py-2 px-4 rounded">{{ t('navigation.news') }}</span>
      <span class="bg-sky-500 text-white text-center inline-block py-2 px-4 rounded">{{ t('navigation.sales') }}</span>
      <span class="bg-sky-500 text-white text-center inline-block py-2 px-4 rounded">{{ t('navigation.celebrity') }}</span>
      <span class="bg-sky-500 text-white text-center inline-block py-2 px-4 rounded">{{ t('navigation.diamonds') }}</span>
      <span class="bg-sky-500 text-white text-center inline-block py-2 px-4 rounded">{{ t('navigation.overdoseColor') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n, useSwitchLocalePath } from '#imports';
  import { LOCALES } from '@/i18n';

  const { t, locale } = useI18n()
  const switchLocale = useSwitchLocalePath()

</script>

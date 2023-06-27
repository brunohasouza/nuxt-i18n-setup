<template>
  <Html :lang="head.htmlAttrs?.lang">
    <Head>
      <Title>Nuxt Test</Title>
      <template v-if="config.public.isProd">
        <Link v-for="link in head.link" :key="link.id" v-bind="link" />
        <Meta v-for="meta in head.meta" :key="meta.id" v-bind="meta" />
      </template>
    </Head>
    <Body>
      <slot />
    </Body>
  </Html>
</template>

<script setup lang="ts">
  import { useLocaleHead, useRuntimeConfig } from '#imports'

  const config = useRuntimeConfig()
  const head = useLocaleHead({
    addSeoAttributes: true
  })
</script>

<style scoped>

</style>
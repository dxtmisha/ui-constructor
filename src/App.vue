<script setup lang="ts">
import { useTranslateRef } from '../composables/ref/useTranslateRef.ts'
import { watch } from 'vue'

const translate = useTranslateRef([
  'TITLE_MAIN',
  'TITLE_COMPANY',
  'BASKET_EMPTY_LINK',
  'HEADER_MENU_TITLE'
] as const)

watch(translate, () => console.log('[] translate', translate.value))
</script>

<template>
  <div style="display: flex; gap: 16px; padding: 16px 24px;">
    {{ translate.TITLE_COMPANY }}
  </div>
</template>

<style lang="scss"></style>

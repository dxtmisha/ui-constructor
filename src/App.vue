<script setup lang="ts">
import { useTranslateRef } from '../composables/ref/useTranslateRef.ts'

const t = useTranslateRef(['a'] as const)
</script>

<template>
  <div>{{ t.a }}<m3-image value="home"/></div>
</template>

<style lang="scss"></style>

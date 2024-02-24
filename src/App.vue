<script setup lang="ts">
import { useTranslateRef } from '../composables/ref/useTranslateRef.ts'

const t = useTranslateRef(['a'] as const)
</script>

<template>
  <div>{{ t.a }}<c2-image value="message-dots-02"/></div>
</template>

<style lang="scss"></style>

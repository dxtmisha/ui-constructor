<script setup lang="ts">
import { Icons } from '../classes/Icons.ts'

Icons.add('name', 'file')
</script>

<template>
  <m3-progress
    :delay-hide="480"
  />
  <div style="display: flex; position: relative; height: 800px; width: 800px; gap: 16px; padding: 16px 24px;">
    <m3-image :value="file"/>
  </div>
</template>

<style lang="scss"></style>

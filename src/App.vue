<script setup lang="ts">
import { useLoadingRef } from '../composables/ref/useLoadingRef.ts'
import { Loading } from '../classes/Loading.ts'

const loading = useLoadingRef()

const onShow = () => Loading.show()
const onHide = () => Loading.hide()
</script>

<template>
  <m3-progress
    :delay-hide="480"
    :visible="loading"
  />
  <div style="display: flex; gap: 16px; padding: 16px 24px;">
    {{ loading }}
    <m3-button label="show" @click="onShow"/>
    <m3-button label="hide" @click="onHide"/>
  </div>
</template>

<style lang="scss"></style>

<script setup lang="ts">
import { useLoadingRef } from 'ui'

const load = useLoadingRef()

console.warn('Coral Club: Design system')
</script>

<template>
  <div class="cc-mutation">
    <div class="cc-mutation__load">
      <c2-progress :visible="load"/>
    </div>
    <div class="cc-mutation__item">
      <c2-mutation/>
    </div>
  </div>
</template>

<style lang="scss">
.cc-mutation {
  &__load {
    position: fixed;
    top: 0;
    right: 0;
    bottom: auto;
    left: 0;
    z-index: 262144;
  }

  &__item {
    display: none;
  }
}
</style>

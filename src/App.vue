<script setup lang="ts">
import { ref } from 'vue'

import { M3Image } from '../m3/Image'
import { M3Button } from '../m3/Button'
import { M3Skeleton } from '../m3/Skeleton'
import { M3SkeletonItem } from '../m3/SkeletonItem'

import { makeIconsC2 } from '../c2/icons.ts'

makeIconsC2()

const status = ref(false)

const onClick = () => (status.value = !status.value)
</script>

<template>
  <div>
    <div style="padding: 16px;">
      <m3-button label="Status: " @click="onClick">{{ status }}</m3-button>
    </div>
    <m3-skeleton :active="status">
      <template v-slot:default="{classText, classBackground, classBorder}">
        <div
          :class="classBorder"
          style="width: 320px; border: solid #0f1e29 1px; border-radius: 8px; overflow: hidden"
        >
          <div :class="classBackground" style="height: 240px; position: relative;">
            <m3-image
              value="https://drscdn.500px.org/photo/294267357/q%3D80_m%3D2000/v2?sig=03989c1970e5921d8ab67b23e03e79b8db13b7e7d3bc3f72829cc9eecbb42cf4"/>
          </div>
          <div style="padding: 16px;">
            <div :class="classText" class="m3-font--titleLarge">Title</div>
            <m3-skeleton-item text style="padding-top: 8px;">
              a spoken or written representation or account of a person.
            </m3-skeleton-item>
            <m3-skeleton-item style="padding-top: 8px;" length="2" text/>
          </div>
          <div style="display: flex; padding: 16px; justify-content: flex-end; gap: 8px;">
            <m3-skeleton-item :tag="M3Button" background :props="{icon: 'bar-chart-01', label: 'Label'}"/>
            <m3-button icon="bar-chart-01" label="Label"/>
          </div>
        </div>
      </template>
    </m3-skeleton>
  </div>
</template>

<style lang="scss"></style>

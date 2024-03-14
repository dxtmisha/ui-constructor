<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/isFilled'
// import { inArray } from '../../functions/inArray'

import { SkeletonDesign } from '../../constructors/Skeleton/SkeletonDesign'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type SkeletonEmits,
  type SkeletonSlots
} from '../../constructors/Skeleton/types'

import {
  propsInstruction // ,
  // propsValues
} from './props'

defineOptions({
  name: 'M3Skeleton'
})

const emits = defineEmits<SkeletonEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm3-skeleton': true,
    'm3-skeleton--active': props.active
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new SkeletonDesign(
  'm3.skeleton',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

// const {
//   classes,
//   styles
// } = design.setup()
const render = design.render()

defineSlots<SkeletonSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Skeleton/style";
@import "styleToken";

@include initDesignBasic('m3.skeleton') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinSkeleton;

  // Styles from tokens
  // Стили из токенов
  @include mixinSkeletonToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>

<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/isFilled'
// import { inArray } from '../../functions/inArray'

import { SkeletonItemDesign } from '../../constructors/SkeletonItem/SkeletonItemDesign'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type SkeletonItemEmits,
  type SkeletonItemSlots
} from '../../constructors/SkeletonItem/types'

import {
  propsInstruction // ,
  // propsValues
} from './props'

defineOptions({
  name: 'M3SkeletonItem'
})

const emits = defineEmits<SkeletonItemEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm3-skeletonItem': true,
    'm3-skeletonItem--text': props.text,
    'm3-skeletonItem--background': props.background,
    'm3-skeletonItem--border': props.border
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new SkeletonItemDesign(
  'm3.skeletonItem',
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

defineSlots<SkeletonItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/SkeletonItem/style";
@import "styleToken";

@include initDesignBasic('m3.skeletonItem') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinSkeletonItem;

  // Styles from tokens
  // Стили из токенов
  @include mixinSkeletonItemToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>

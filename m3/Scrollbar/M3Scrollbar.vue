<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/isFilled'
// import { inArray } from '../../functions/inArray'

import { ScrollbarDesign } from '../../constructors/Scrollbar/ScrollbarDesign'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type ScrollbarEmits,
  type ScrollbarSlots
} from '../../constructors/Scrollbar/types'

import {
  propsInstruction // ,
  // propsValues
} from './props'

defineOptions({
  name: 'M3Scrollbar'
})

const emits = defineEmits<ScrollbarEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm3-scrollbar': true,
    'm3-scrollbar--visible': props.visible,
    'm3-scrollbar--border': props.border,
    'm3-scrollbar--inverse': props.inverse
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ScrollbarDesign(
  'm3.scrollbar',
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

defineSlots<ScrollbarSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Scrollbar/style";
@import "styleToken";

@include initDesignBasic('m3.scrollbar') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinScrollbar;

  // Styles from tokens
  // Стили из токенов
  @include mixinScrollbarToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>

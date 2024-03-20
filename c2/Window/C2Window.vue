<script setup lang="ts">
import { computed } from 'vue'

import { isFilled } from '../../functions/isFilled'
import { inArray } from '../../functions/inArray'

import { WindowDesign } from '../../constructors/Window/WindowDesign'

import { C2Scrollbar } from '../Scrollbar'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type WindowEmits,
  type WindowSlots
} from '../../constructors/Window/types'

import {
  propsInstruction,
  propsValues
} from './props'

defineOptions({
  name: 'C2Window'
})

const emits = defineEmits<WindowEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c2-window': true,
    'c2-window--width--custom': isFilled(props.width) && !inArray(propsValues.width, props.width),
    [`c2-window--width--${props.width}`]: inArray(propsValues.width, props.width),
    'c2-window--height--custom': isFilled(props.height) && !inArray(propsValues.height, props.height),
    [`c2-window--height--${props.height}`]: inArray(propsValues.height, props.height),
    [`c2-window--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    'c2-window--overscroll': props.overscroll,
    'c2-window--dense': props.dense,
    'c2-window--fullscreen': props.fullscreen,
    [`c2-window--alignment--${props.alignment}`]: inArray(propsValues.alignment, props.alignment),
    [`c2-window--origin--${props.origin}`]: inArray(propsValues.origin, props.origin)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  'c2-window-sys-width': props.width ?? null,
  'c2-window-sys-height': props.height ?? null
  // :styles-values [!] System label / Системная метка
}))

const design = new WindowDesign(
  'c2.window',
  props,
  {
    emits,
    components: {
      scrollbar: C2Scrollbar
    },
    classes: classesToken,
    styles: stylesToken
  }
)

// const {
//   classes,
//   styles
// } = design.setup()
const render = design.render()

defineSlots<WindowSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Window/style";
@import "styleToken";

@include initDesignBasic('c2.window') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinWindow;

  // Styles from tokens
  // Стили из токенов
  @include mixinWindowToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>

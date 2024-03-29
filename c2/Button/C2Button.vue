<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/isFilled'
import { inArray } from '../../functions/inArray'

import { ButtonDesign } from '../../constructors/Button/ButtonDesign'
import { C2Icon } from '../Icon'
import { C2Progress } from '../Progress'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type ButtonEmits,
  type ButtonSlots
} from '../../constructors/Button/types'

import {
  propsInstruction,
  propsValues
} from './props'

defineOptions({
  name: 'C2Button'
})

const emits = defineEmits<ButtonEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c2-button': true,
    'c2-button--focus': props.focus,
    'c2-button--disabled': props.disabled,
    'c2-button--selected': props.selected,
    'c2-button--loading': props.loading,
    'c2-button--readonly': props.readonly,
    [`c2-button--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    'c2-button--intent': props.intent,
    'c2-button--primary': props.primary && !props.secondary && !props.outline && !props.ghost,
    'c2-button--secondary': props.secondary,
    'c2-button--outline': props.outline,
    'c2-button--ghost': props.ghost,
    [`c2-button--size--${props.size}`]: inArray(propsValues.size, props.size),
    [`c2-palette c2-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ButtonDesign(
  'c2.button',
  props,
  {
    emits,
    components: {
      icon: C2Icon,
      progress: C2Progress
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

defineSlots<ButtonSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Button/style";
@import "styleToken";

@include initDesignBasic('c2.button') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinButton;

  // Styles from tokens
  // Стили из токенов
  @include mixinButtonToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>

<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/isFilled'
import { inArray } from '../../functions/inArray'

import { ButtonDesign } from '../../constructors/Button/ButtonDesign'
import { C1Icon } from '../Icon'
import { C1Progress } from '../Progress'
import { C1Ripple } from '../Ripple'

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
  name: 'C1Button'
})

const emits = defineEmits<ButtonEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c1-button': true,
    'c1-button--focus': props.focus,
    'c1-button--disabled': props.disabled,
    'c1-button--selected': props.selected,
    'c1-button--loading': props.loading,
    'c1-button--readonly': props.readonly,
    [`c1-button--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    [`c1-button--size--${props.size}`]: inArray(propsValues.size, props.size),
    'c1-button--contained': props.contained && !props.outlined && !props.white && !props.text,
    'c1-button--outlined': props.outlined,
    'c1-button--white': props.white,
    'c1-button--text': props.text,
    [`c1-palette c1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ButtonDesign(
  'c1.button',
  props,
  {
    emits,
    components: {
      icon: C1Icon,
      progress: C1Progress,
      ripple: C1Ripple
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

@include initDesignBasic('c1.button') {
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

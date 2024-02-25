<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/isFilled'
import { inArray } from '../../functions/inArray'

import { ButtonDesign } from '../../constructors/Button/ButtonDesign'
import { M2Icon } from '../Icon'
import { M2Progress } from '../Progress'
import { M2Ripple } from '../Ripple'

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
  name: 'M2Button'
})

const emits = defineEmits<ButtonEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm2-button': true,
    'm2-button--focus': props.focus,
    'm2-button--disabled': props.disabled,
    'm2-button--selected': props.selected,
    'm2-button--loading': props.loading,
    'm2-button--readonly': props.readonly,
    [`m2-button--adaptive--${props.adaptive}`]: inArray(propsValues.adaptive, props.adaptive),
    [`m2-button--height--${props.height}`]: inArray(propsValues.height, props.height),
    'm2-button--contained': props.contained && !props.outlined && !props.text,
    'm2-button--outlined': props.outlined,
    'm2-button--text': props.text,
    [`m2-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ButtonDesign(
  'm2.button',
  props,
  {
    emits,
    components: {
      icon: M2Icon,
      progress: M2Progress,
      ripple: M2Ripple
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

@include initDesignBasic('m2.button') {
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

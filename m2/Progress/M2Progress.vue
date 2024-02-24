<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/isFilled'
import { inArray } from '../../functions/inArray'

import { ProgressDesign } from '../../constructors/Progress/ProgressDesign'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type ProgressEmits,
  type ProgressSlots
} from '../../constructors/Progress/types'

import {
  propsInstruction,
  propsValues
} from './props'

defineOptions({
  name: 'M2Progress'
})

const emits = defineEmits<ProgressEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm2-progress': true,
    'm2-progress--linear': props.linear && !props.circular,
    'm2-progress--circular': props.circular,
    [`m2-progress--indeterminate--${props.indeterminate}`]: inArray(propsValues.indeterminate, props.indeterminate),
    [`m2-progress--position--${props.position}`]: inArray(propsValues.position, props.position),
    'm2-progress--dense': props.dense,
    'm2-progress--inverse': props.inverse
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ProgressDesign(
  'm2.progress',
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

defineSlots<ProgressSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Progress/style";
@import "styleToken";

@include initDesignBasic('m2.progress') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinProgress;

  // Styles from tokens
  // Стили из токенов
  @include mixinProgressToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>

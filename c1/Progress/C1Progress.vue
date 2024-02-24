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
  name: 'C1Progress'
})

const emits = defineEmits<ProgressEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c1-progress': true,
    'c1-progress--linear': props.linear && !props.circular,
    'c1-progress--circular': props.circular,
    [`c1-progress--indeterminate--${props.indeterminate}`]: inArray(propsValues.indeterminate, props.indeterminate),
    [`c1-progress--position--${props.position}`]: inArray(propsValues.position, props.position),
    'c1-progress--dense': props.dense,
    'c1-progress--inverse': props.inverse
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ProgressDesign(
  'c1.progress',
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

@include initDesignBasic('c1.progress') {
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

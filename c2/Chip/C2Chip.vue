<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/isFilled'
// import { inArray } from '../../functions/inArray'

import { ChipDesign } from '../../constructors/Chip/ChipDesign'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type ChipEmits,
  type ChipSlots
} from '../../constructors/Chip/types'

import {
  propsInstruction // ,
  // propsValues
} from './props'

defineOptions({
  name: 'C2Chip'
})

const emits = defineEmits<ChipEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c2-chip': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ChipDesign(
  'c2.chip',
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

defineSlots<ChipSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Chip/style";
@import "styleToken";

@include initDesignBasic('c2.chip') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinChip;

  // Styles from tokens
  // Стили из токенов
  @include mixinChipToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>

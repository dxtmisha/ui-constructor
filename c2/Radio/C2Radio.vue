<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/isFilled'
import { inArray } from '../../functions/inArray'

import { RadioDesign } from '../../constructors/Radio/RadioDesign'

import { C2Image } from '../Image'
import { C2Progress } from '../Progress'
import { C2FieldMessage } from '../FieldMessage'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type RadioEmits,
  type RadioSlots
} from '../../constructors/Radio/types'

import {
  propsInstruction,
  propsValues
} from './props'

defineOptions({
  name: 'C2Radio'
})

const emits = defineEmits<RadioEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c2-radio': true,
    'c2-radio--required': props.required,
    'c2-radio--right': props.right,
    [`c2-radio--size--${props.size}`]: inArray(propsValues.size, props.size),
    'c2-radio--focus': props.focus,
    'c2-radio--disabled': props.disabled
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new RadioDesign(
  'c2.radio',
  props,
  {
    emits,
    components: {
      icon: C2Image,
      progress: C2Progress,
      message: C2FieldMessage
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

defineSlots<RadioSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Radio/style";
@import "styleToken";

@include initDesignBasic('c2.radio') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinRadio;

  // Styles from tokens
  // Стили из токенов
  @include mixinRadioToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>

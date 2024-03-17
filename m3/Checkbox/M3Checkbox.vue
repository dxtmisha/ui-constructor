<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/isFilled'
// import { inArray } from '../../functions/inArray'

import { CheckboxDesign } from '../../constructors/Checkbox/CheckboxDesign'

import { M3Image } from '../Image'
import { M3Ripple } from '../Ripple'
import { M3Progress } from '../Progress'
import { M3FieldMessage } from '../FieldMessage'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type CheckboxEmits,
  type CheckboxSlots
} from '../../constructors/Checkbox/types'

import {
  propsInstruction // ,
  // propsValues
} from './props'

defineOptions({
  name: 'M3Checkbox'
})

const emits = defineEmits<CheckboxEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'm3-checkbox': true,
    'm3-checkbox--required': props.required,
    'm3-checkbox--focus': props.focus,
    'm3-checkbox--disabled': props.disabled
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new CheckboxDesign(
  'm3.checkbox',
  props,
  {
    emits,
    components: {
      icon: M3Image,
      ripple: M3Ripple,
      progress: M3Progress,
      message: M3FieldMessage
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

defineSlots<CheckboxSlots>()
defineExpose(design.expose())
</script>

<template>
  <component :is="render"/>
</template>

<style lang="scss">
@import "../styles/properties";
@import "../../styles/properties";
@import "../../constructors/Checkbox/style";
@import "styleToken";

@include initDesignBasic('m3.checkbox') {
  // Basic styles for a component
  // Базовый стили для компонента
  @include mixinCheckbox;

  // Styles from tokens
  // Стили из токенов
  @include mixinCheckboxToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>

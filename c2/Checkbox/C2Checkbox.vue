<script setup lang="ts">
import { computed } from 'vue'

// import { isFilled } from '../../functions/isFilled'
import { inArray } from '../../functions/inArray'

import { CheckboxDesign } from '../../constructors/Checkbox/CheckboxDesign'

import { C2Image } from '../Image'
import { C2Progress } from '../Progress'
import { C2FieldMessage } from '../FieldMessage'

import {
  type ConstrClasses,
  type ConstrStyles
} from '../../types/constructor'
import {
  type CheckboxEmits,
  type CheckboxSlots
} from '../../constructors/Checkbox/types'

import {
  propsInstruction,
  propsValues
} from './props'

defineOptions({
  name: 'C2Checkbox'
})

const emits = defineEmits<CheckboxEmits>()
const props = defineProps({ ...propsInstruction })

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'c2-checkbox': true,
    'c2-checkbox--required': props.required,
    'c2-checkbox--right': props.right,
    [`c2-checkbox--size--${props.size}`]: inArray(propsValues.size, props.size),
    'c2-checkbox--focus': props.focus,
    'c2-checkbox--disabled': props.disabled
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new CheckboxDesign(
  'c2.checkbox',
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

@include initDesignBasic('c2.checkbox') {
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

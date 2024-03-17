<script setup lang="ts">
import { ref } from 'vue'
import { C2Checkbox } from '../c2/Checkbox'
import { C2Radio } from '../c2/Radio'

const checkbox = ref()
const loading = ref(false)
const v = ref('error')

const onInput = (_: Event, value: any) => {
  console.log('value', value)
}
</script>

<template>
  <div>
    <div>
      <input v-model="v">
      {{ v }}
      <c2-radio
        :loading="loading"
        ref="checkbox"
        name="test"
        label="Label"
        value-variant="variant1"
        required
        :validation-message="v"
        @input="onInput"
      />
      <c2-radio
        :loading="loading"
        ref="checkbox"
        name="test"
        label="Label"
        value-variant="variant2"
        required
        @input="onInput"
      />
      <c2-radio
        :loading="loading"
        ref="checkbox"
        name="test"
        label="Label"
        value-variant="variant3"
        required
        @input="onInput"
      />
    </div>
    <div>
      <c2-checkbox
        name="test"
        label="Label"
        required
        size="sm"
        helper-message="helper message"
      />
    </div>
    <div>
      <c2-checkbox
        name="test"
        label="Label"
        required
        size="md"
        helper-message="helper message"
      />
    </div>
    <div>
      <c2-checkbox
        name="test"
        label="Label"
        required
        size="lg"
        helper-message="helper message"
      />
    </div>
    <div>
      <c2-checkbox
        :loading="loading"
        name="test"
        label="Readonly"
        required
        readonly
        :value="true"
      />
    </div>
    <div>
      <c2-checkbox
        :loading="loading"
        name="test"
        label="Disabled"
        required
        disabled
      />
    </div>
    <div>
      <c2-checkbox
        :loading="loading"
        name="test"
        label="Disabled"
        required
        disabled
        :value="true"
      />
    </div>
    <div>
      <c2-checkbox
        comp
        loading
        label="Label"
        required
        @input="onInput"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>

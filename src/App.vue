<script setup lang="ts">
import { ref } from 'vue'
import { C2Checkbox } from '../c2/Checkbox'

const checkbox = ref()
const loading = ref(false)
const v = ref('error')

const onInput = () => {
  loading.value = !loading.value
}
</script>

<template>
  <div>
    <div>
      <input v-model="v">
      {{ v }}
      <c2-checkbox
        :loading="loading"
        ref="checkbox"
        name="test"
        label="Label"
        required
        :validation-message="v"
      />
    </div>
    <div>
      <c2-checkbox
        ref="checkbox"
        name="test"
        label="Label"
        required
        size="sm"
        helper-message="helper message"
      />
    </div>
    <div>
      <c2-checkbox
        ref="checkbox"
        name="test"
        label="Label"
        required
        size="md"
        helper-message="helper message"
      />
    </div>
    <div>
      <c2-checkbox
        ref="checkbox"
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
        ref="checkbox"
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
        ref="checkbox"
        name="test"
        label="Disabled"
        required
        disabled
      />
    </div>
    <div>
      <c2-checkbox
        :loading="loading"
        ref="checkbox"
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

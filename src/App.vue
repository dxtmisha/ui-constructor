<script setup lang="ts">
import { ref } from 'vue'
import { M3Checkbox } from '../m3/Checkbox'

const checkbox = ref()
const loading = ref(false)
const v = ref('1')

const onInput = () => {
  loading.value = !loading.value
}
</script>

<template>
  <div>
    <div>
      <input v-model="v">
      {{ v }}
      <m3-checkbox
        :loading="loading"
        ref="checkbox"
        name="test"
        label="Label"
        required
        :validation-message="v"
      />
    </div>
    <div>
      <m3-checkbox
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
      <m3-checkbox
        :loading="loading"
        ref="checkbox"
        name="test"
        label="Disabled"
        required
        disabled
      />
    </div>
    <div>
      <m3-checkbox
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
      <m3-checkbox
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

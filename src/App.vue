<script setup lang="ts">
import { C2Button } from '../c2/Button'
</script>

<template>
  <div>
    <div>
      <div>
        <c2-button icon="camera" label="Label"/>
      </div>
      <div style="padding-top: 8px;">
        <c2-button label="Label"/>
      </div>
      <div style="padding-top: 8px;">
        <c2-button icon="camera"/>
      </div>
    </div>
    <div>
      <div style="padding-top: 8px;">
        <c2-button label="Label" size="x"/>
      </div>
      <div style="padding-top: 8px;">
        <c2-button label="Label" size="xs"/>
      </div>
      <div style="padding-top: 8px;">
        <c2-button label="Label" size="sm"/>
      </div>
      <div style="padding-top: 8px;">
        <c2-button label="Label" size="md"/>
      </div>
      <div style="padding-top: 8px;">
        <c2-button label="Label" size="lg"/>
      </div>
      <div style="padding-top: 8px;">
        <c2-button label="Label" size="xl"/>
      </div>
    </div>
    <div style="display: flex; gap: 16px; padding-top: 8px;">
      <c2-button label="Label"/>
      <c2-button label="Label" palette="informative"/>
      <c2-button label="Label" palette="positive"/>
      <c2-button label="Label" palette="negative"/>
      <c2-button label="Label" palette="neutral"/>
    </div>
    <div style="display: flex; gap: 16px; padding-top: 8px;">
      <c2-button secondary label="Label"/>
      <c2-button secondary label="Label" palette="informative"/>
      <c2-button secondary label="Label" palette="positive"/>
      <c2-button secondary label="Label" palette="negative"/>
      <c2-button secondary label="Label" palette="neutral"/>
    </div>
    <div style="display: flex; gap: 16px; padding-top: 8px;">
      <c2-button outline label="Label"/>
      <c2-button outline label="Label" palette="informative"/>
      <c2-button outline label="Label" palette="positive"/>
      <c2-button outline label="Label" palette="negative"/>
      <c2-button outline label="Label" palette="neutral"/>
    </div>
    <div style="display: flex; gap: 16px; padding-top: 8px;">
      <c2-button ghost label="Label"/>
      <c2-button ghost label="Label" palette="informative"/>
      <c2-button ghost label="Label" palette="positive"/>
      <c2-button ghost label="Label" palette="negative"/>
      <c2-button ghost label="Label" palette="neutral"/>
    </div>
  </div>
</template>

<style lang="scss"></style>

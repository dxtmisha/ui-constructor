<script setup lang="ts">
import { C2Button } from '../c2/Button'
import { C2Window } from '../c2/Window'
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

    <c2-window>
      <template v-slot:control="binds">
        <c2-button v-bind="binds">Window</c2-button>
      </template>
      <template v-slot:default>
        <div style="padding: 16px;">
          <p>
            <b>What's Material?</b>
          </p>
          <p>
            Material Design is a design system built and supported<br/>
            by Google designers and developers. Material.io includes<br/>
            in-depth UX guidance and UI component implementations for<br/>
            Android, Flutter, and the Web.
          </p>
          <p>
            The latest version, Material 3, enables personal, adaptive,<br/>
            and expressive experiences – from dynamic color and enhanced<br/>
            accessibility, to foundations for large screen layouts and<br/>
            design tokens.
          </p>
          <div>
            <c2-button outlined class="c2-window--close">Close</c2-button>
          </div>
        </div>
      </template>
    </c2-window>
  </div>
</template>

<style lang="scss"></style>

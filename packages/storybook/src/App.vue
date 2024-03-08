<script setup lang="ts"></script>

<template>
  <div>
    <m3-button label="asd"/>
    <m3-icon label="home"/>
    <a class="c2-link">is A</a>
  </div>
</template>

<style lang="scss">
.c2-link {
  color: var(--st-action-bg-color-primary-solid-normal, #F36355);
  border-color: var(--st-action-bg-color-primary-solid-normal, rgb(123, 123, 123));
  background-color: #F36355;

  &:hover {
    text-decoration: underline;
  }
}
</style>

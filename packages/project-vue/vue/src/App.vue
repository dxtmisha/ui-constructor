<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTranslateRef } from 'ui'

const route = useRoute()
const router = useRouter()

// Получаем список текстов по их ключам
const translate = useTranslateRef([
  'TITLE_COMPANY',
  'BASKET_EMPTY_LINK',
  'HEADER_MENU_TITLE'
] as const)

const isMain = computed(() => route.path === '/')
const onClick = () => router.push('/')
</script>

<template>
  <!-- Класс c2-system обязательно -->
  <div class="c2-system my-6">
    <div class="flex gap-4">
      <router-link class="c2-link" to="/about">{{ translate.TITLE_COMPANY }}</router-link>
      |
      <router-link class="c2-link" to="/shop">{{ translate.HEADER_MENU_TITLE }}</router-link>
    </div>
    <div class="pt-12">
      <router-view/>
    </div>
    <div
      v-if="!isMain"
      class="flex pt-16"
    >
      <c2-button
        :label="translate.BASKET_EMPTY_LINK"
        icon="arrow-right-lg"
        @click="onClick"
      />
    </div>
  </div>
</template>

<style lang="scss">
// Для использования токен надо подключить 1 из скрипт ниже, в зависимости какой версия дизайна надо
// @import "ui/c1/style.scss";
@import "ui/c2/style.scss";

// ВНИМАНМЯ: при копировании свойства из Figma, где используется токен, нужно заменить функцию var на t или tColor, если это цвет
// пример:
// border-radius: var(--st-...-xl, 12px); => border-radius: t(--st-...-xl, 12px);
// background: var(--st-...-normal, #F36355); => background: tColor(--st-...-normal, #F36355);

.c2-link {
  color: tColor(--st-action-bg-color-primary-solid-normal, #F36355);

  &:hover {
    text-decoration: underline;
  }
}
</style>

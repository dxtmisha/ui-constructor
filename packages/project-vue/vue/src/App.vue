<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Global, useApiRef, useTranslateRef } from 'ui'

const route = useRoute()
const router = useRouter()
const itemGlobal = Global.get('item')

// Получаем список текстов по их ключам
const translate = useTranslateRef([
  'TITLE_COMPANY',
  'BASKET_EMPTY_LINK',
  'HEADER_MENU_TITLE'
] as const)

// Получаем данные запроса
const { data: user } = useApiRef<{ id: string, name: string }>('user')

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
    <div v-if="user" class="pt-6">User: {{ user.id ?? '--' }}/ {{ user.name ?? '--' }}</div>
    <div class="pt-6">Global: {{ itemGlobal }}</div>
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
.c2-link {
  color: var(--st-action-bg-color-primary-solid-normal, #F36355);

  &:hover {
    text-decoration: underline;
  }
}
</style>

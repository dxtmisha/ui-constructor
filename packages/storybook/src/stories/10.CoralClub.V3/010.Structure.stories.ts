import type { Meta, StoryObj } from '@storybook/vue3'

import { C2Icon } from 'ui/C2Icon'

import SsNone from '../../components/SsNone.vue'

import { icons } from 'ui/book/values.ts'

const meta = {
  title: 'CC-V3/Структура сайта',
  component: SsNone,
  parameters: {
    design: 'c2'
  },
  argTypes: {},
  args: {}
} satisfies Meta<typeof SsNone>

export default meta

type Story = StoryObj<typeof meta>

export const Cc3Structure: Story = {
  name: 'Структура',
  render: () => ({
    components: {
      C2Icon
    },
    setup () {
      return {
        icons
      }
    },
    template: `
      <div>
        <div class="text-sm font text-center">* Каждый квадрат - это микрофронтенд</div>
        <div class="flex gap-4 pt-4">
          <div class="p-4 border border-white text-sm w-40">
            <div class="text-sm font-bold">Первый уровень</div>
            <div class="pt-1 text-xs">
              Это глобальный библиотека, который всегда будет подключено
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <div class="p-2 border">
              <div class="w-48 h-32 bg-red-200">
                <div class="p-2">
                  <div class="text-sm font-bold">API</div>
                </div>
              </div>
            </div>
            <div class="w-8">
              <C2Icon icon="arrow-sorting-h"/>
            </div>
            <div class="p-2 border">
              <div class="w-48 h-32 bg-purple-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Главная библиотека</div>
                  <div class="pt-1 text-xs">
                    Система дизайна, работа с запросами к API, получение текста, ядро Vue и все глобальные пакеты
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="p-4 border border-white text-sm w-40"/>
          <div class="flex gap-4 items-center">
            <div class="p-2 border border-white">
              <div class="flex justify-center w-48">
                <C2Icon icon="arrow-sorting-v"/>
                <span class="pl-2 opacity-0">POST</span>
              </div>
            </div>
            <div class="w-8"/>
            <div class="p-2 border border-white">
              <div class="w-48">
                <div class="flex justify-center p-2">
                  <C2Icon icon="arrow-up-lg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="p-4 border border-white text-sm w-40">
            <div class="text-sm font-bold">Второй уровень</div>
            <div class="pt-1 text-xs">
              Это независимые друг от друга библиотека. Подключаются только при использовании
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <div class="p-2 border border-white">
              <div class="flex items-center justify-center w-48 h-32">
                <div class="flex items-center p-2">
                  <C2Icon icon="arrow-sorting-v"/>
                  <span class="pl-2">POST</span>
                </div>
              </div>
            </div>
            <div class="w-8"></div>
            <div class="flex gap-2 p-2 border">
              <div class="w-32 h-32 bg-lime-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Пользователь</div>
                  <div class="pt-1 text-xs">
                    Работа с пользователями
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-lime-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Продукт</div>
                  <div class="pt-1 text-xs">
                    Работа с продуктами
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-lime-200">
                <div class="p-2">
                  <div class="text-sm font-bold">...</div>
                  <div class="pt-1 text-xs">
                    ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="p-4 border border-white text-sm w-40"/>
          <div class="flex gap-4 items-center">
            <div class="p-2 border border-white">
              <div class="flex justify-center w-48">
                <C2Icon icon="arrow-sorting-v"/>
                <span class="pl-2 opacity-0">POST</span>
              </div>
            </div>
            <div class="w-8"/>
            <div class="p-2 border border-white">
              <div class="w-48">
                <div class="flex justify-center p-2">
                  <C2Icon icon="arrow-up-lg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="p-4 border border-white text-sm w-40">
            <div class="text-sm font-bold">Третий уровень</div>
            <div class="pt-1 text-xs">
              Это конечные проект. Они могут быть на чистом Vue, Nuxt и Nuxt/ Рендеринг на стороне сервера (SSR)
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <div class="flex gap-2 p-2 border">
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-sm font-bold">header/footer</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Статические страницы</div>
                  <div class="pt-1 text-xs">
                    Nuxt
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Продукты</div>
                  <div class="pt-1 text-xs">
                    Vue, Nuxt или Nuxt/ SSR
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Регистрация</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-sm font-bold">...</div>
                  <div class="pt-1 text-xs">
                    Vue, Nuxt или Nuxt/ SSR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="p-4 border border-white text-sm w-40"/>
          <div class="flex gap-4 items-center">
            <div class="flex gap-2 p-2 border">
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-xs">Личный кабинет</div>
                  <div class="text-sm font-bold">header/footer</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-xs">Личный кабинет</div>
                  <div class="text-sm font-bold">Профиль</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-xs">Личный кабинет</div>
                  <div class="text-sm font-bold">Статистика</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-xs">Личный кабинет</div>
                  <div class="text-sm font-bold">ДОУ</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-xs">Личный кабинет</div>
                  <div class="text-sm font-bold">...</div>
                  <div class="pt-1 text-xs">
                    Vue или Nuxt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  })
}

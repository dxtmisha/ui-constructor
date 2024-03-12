import type { Meta, StoryObj } from '@storybook/vue3'
import { shallowRef } from 'vue'

import { C2Icon } from 'ui/C2Icon'

import {
  c2IconArgs,
  c2IconValues
} from 'ui/book/c2/icon.ts'

import { icons } from 'ui/book/values.ts'

const meta = {
  title: 'C2/Icon',
  component: C2Icon,
  parameters: {
    design: 'c2'
  },
  argTypes: c2IconArgs,
  args: c2IconValues
} satisfies Meta<typeof C2Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {}

export const IconList: Story = {
  name: 'Список иконок',
  render: (args: any) => ({
    components: { C2Icon },
    setup () {
      return {
        args,
        icons
      }
    },
    template: `
      <div class="columns-3 w-full">
        <div
          v-for="(icon, key) of icons"
          :key="key"
          class="flex gap-2 text-center"
        >
          <c2-icon v-bind="args" :icon="icon"/>
          <span>{{ icon }}</span>
        </div>
      </div>
    `
  })
}

export const IconActive: Story = {
  name: 'Active',
  render: () => ({
    components: { C2Icon },
    setup () {
      const active = shallowRef(false)

      setInterval(() => {
        active.value = !active.value
      }, 1000)

      return {
        active
      }
    },
    template: `
      <div class="flex items-center justify-center gap-4">
        <C2Icon
          :active="active"
          icon="location-pointer"
          icon-active="location-pointer-off"
        />
      </div>
    `
  })
}

export const IconAnimationType: Story = {
  name: 'AnimationType',
  render: () => ({
    components: { C2Icon },
    setup () {
      const hide = shallowRef(false)

      setInterval(() => {
        hide.value = !hide.value
      }, 1000)

      return {
        hide
      }
    },
    template: `
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="p-2 border">
          <div class="flex flex-wrap items-center justify-center gap-2">
            <C2Icon
              :hide="hide"
              icon="image-01"
              animation-type="type1"
            />
            <span>animation-type: type1</span>
          </div>
        </div>
        <div class="p-2 border">
          <div class="flex flex-wrap items-center justify-center gap-2">
            <C2Icon
              :hide="hide"
              icon="image-01"
              animation-type="type2"
            />
            <span>animation-type: type2</span>
          </div>
        </div>
      </div>
    `
  })
}

export const IconAnimationShow: Story = {
  name: 'AnimationShow',
  render: () => ({
    components: { C2Icon },
    setup () {
      const show = shallowRef(true)

      setInterval(() => {
        show.value = !show.value
      }, 1000)

      return {
        show
      }
    },
    template: `
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="p-2 border">
          <div class="flex flex-wrap items-center justify-center gap-2">
            <C2Icon
              v-if="show"
              icon="image-01"
              :animation-show="false"
            />
            <span>animation-show: false</span>
          </div>
        </div>
        <div class="p-2 border">
          <div class="flex flex-wrap items-center justify-center gap-2">
            <C2Icon
              v-if="show"
              icon="image-01"
              :animation-show="true"
            />
            <span>animation-show: true</span>
          </div>
        </div>
      </div>
    `
  })
}

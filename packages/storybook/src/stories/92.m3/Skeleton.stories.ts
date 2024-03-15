import type { Meta, StoryObj } from '@storybook/vue3'

import { M3Button } from 'ui/M3Button'
import { M3Image } from 'ui/M3Image'
import { M3Skeleton } from 'ui/M3Skeleton'

import {
  m3SkeletonArgs,
  m3SkeletonText,
  m3SkeletonValues
} from 'ui/book/m3/skeleton.ts'

import { imageLink1 } from 'ui/book/values.ts'

const meta = {
  title: 'M3/Skeleton',
  component: M3Skeleton,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component: m3SkeletonText.main.description.main
      }
    }
  },
  argTypes: m3SkeletonArgs,
  args: m3SkeletonValues
} satisfies Meta<typeof M3Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Skeleton: Story = {
  render: (args: any) => ({
    components: {
      M3Button,
      M3Image,
      M3Skeleton
    },
    setup () {
      return {
        args,
        imageLink1
      }
    },
    template: `
      <m3-skeleton class="flex items-center justify-center gap-2" v-bind="args">
        <template v-slot:default="{classText, classBackground, classBorder}">
          <div
            :class="classBorder"
            class="w-80 border rounded-md overflow-hidden"
          >
            <div :class="classBackground" class="relative h-60">
              <m3-image :value="imageLink1"/>
            </div>
            <div class="px-4 pt-4">
              <div :class="classText" class="m3-font--titleLarge">Title</div>
              <div :class="classText" class="pt-2">
                a spoken or written representation or account of a person.
              </div>
            </div>
            <div class="flex justify-end gap-2 p-4">
              <m3-button :class="classBackground" icon="home" label="Label"/>
            </div>
          </div>
        </template>
      </m3-skeleton>
    `
  })
}

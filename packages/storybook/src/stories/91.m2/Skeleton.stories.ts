import type { Meta, StoryObj } from '@storybook/vue3'

import { M2Button } from 'ui/M2Button'
import { M2Image } from 'ui/M2Image'
import { M2Skeleton } from 'ui/M2Skeleton'

import {
  m2SkeletonArgs,
  m2SkeletonText,
  m2SkeletonValues
} from 'ui/book/m2/skeleton.ts'

import { imageLink1 } from 'ui/book/values.ts'

const meta = {
  title: 'M2/Skeleton',
  component: M2Skeleton,
  tags: ['autodocs'],
  parameters: {
    design: 'm2',
    docs: {
      description: {
        component: m2SkeletonText.main.description.main
      }
    }
  },
  argTypes: m2SkeletonArgs,
  args: m2SkeletonValues
} satisfies Meta<typeof M2Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Skeleton: Story = {
  render: (args: any) => ({
    components: {
      M2Button,
      M2Image,
      M2Skeleton
    },
    setup () {
      return {
        args,
        imageLink1
      }
    },
    template: `
      <m2-skeleton class="flex items-center justify-center gap-2" v-bind="args">
        <template v-slot:default="{classText, classBackground, classBorder}">
          <div
            :class="classBorder"
            class="w-80 border rounded-md overflow-hidden"
          >
            <div :class="classBackground" class="relative h-60">
              <m2-image :value="imageLink1"/>
            </div>
            <div class="px-4 pt-4">
              <div :class="classText" class="m2-font--headline6">Title</div>
              <div :class="classText" class="pt-2">
                a spoken or written representation or account of a person.
              </div>
            </div>
            <div class="flex justify-end gap-2 p-4">
              <m2-button :class="classBackground" icon="home" label="Label"/>
            </div>
          </div>
        </template>
      </m2-skeleton>
    `
  })
}

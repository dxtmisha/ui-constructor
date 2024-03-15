import type { Meta, StoryObj } from '@storybook/vue3'

import { C2Button } from 'ui/C2Button'
import { C2Image } from 'ui/C2Image'
import { C2Skeleton } from 'ui/C2Skeleton'

import {
  c2SkeletonArgs,
  c2SkeletonText,
  c2SkeletonValues
} from 'ui/book/c2/skeleton.ts'

import { imageLink1 } from 'ui/book/values.ts'

const meta = {
  title: 'C2/Skeleton',
  component: C2Skeleton,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: c2SkeletonText.main.description.main
      }
    }
  },
  argTypes: c2SkeletonArgs,
  args: c2SkeletonValues
} satisfies Meta<typeof C2Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Skeleton: Story = {
  render: (args: any) => ({
    components: {
      C2Button,
      C2Image,
      C2Skeleton
    },
    setup () {
      return {
        args,
        imageLink1
      }
    },
    template: `
      <c2-skeleton class="flex items-center justify-center gap-2" v-bind="args">
        <template v-slot:default="{classText, classBackground, classBorder}">
          <div
            :class="classBorder"
            class="w-80 border rounded-md overflow-hidden"
          >
            <div :class="classBackground" class="relative h-60">
              <c2-image :value="imageLink1"/>
            </div>
            <div class="px-4 pt-4">
              <div :class="classText" class="c2-font--display">Title</div>
              <div :class="classText" class="pt-2">
                a spoken or written representation or account of a person.
              </div>
            </div>
            <div class="flex justify-end gap-2 p-4">
              <c2-button :class="classBackground" icon="home" label="Label"/>
            </div>
          </div>
        </template>
      </c2-skeleton>
    `
  })
}

import type { Meta, StoryObj } from '@storybook/vue3'

import { C1Image } from 'ui/C1Image'

import {
  c1ImageArgs,
  c1ImageDescription,
  c1ImageValues
} from 'ui/book/c1/image.ts'

const meta = {
  title: 'C1/Image',
  component: C1Image,
  tags: ['autodocs'],
  parameters: {
    design: 'c1',
    docs: {
      description: {
        component: c1ImageDescription
      }
    }
  },
  argTypes: c1ImageArgs,
  args: c1ImageValues
} satisfies Meta<typeof C1Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {}

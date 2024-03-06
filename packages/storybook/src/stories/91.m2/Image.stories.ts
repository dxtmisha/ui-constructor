import type { Meta, StoryObj } from '@storybook/vue3'

import { M2Image } from 'ui/M2Image'

import {
  m2ImageArgs,
  m2ImageText,
  m2ImageValues
} from 'ui/book/m2/image.ts'

const meta = {
  title: 'M2/Image',
  component: M2Image,
  tags: ['autodocs'],
  parameters: {
    design: 'm2',
    docs: {
      description: {
        component: m2ImageText.main.description.main
      }
    }
  },
  argTypes: m2ImageArgs,
  args: m2ImageValues
} satisfies Meta<typeof M2Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {}

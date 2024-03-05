import type { Meta, StoryObj } from '@storybook/vue3'

import { M3Image } from 'ui/M3Image'

import {
  m3ImageArgs,
  m3ImageText,
  m3ImageValues
} from 'ui/book/m3/image.ts'

const meta = {
  title: 'M3/Image',
  component: M3Image,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component: m3ImageText.main.description.main
      }
    }
  },
  argTypes: m3ImageArgs,
  args: m3ImageValues
} satisfies Meta<typeof M3Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {}

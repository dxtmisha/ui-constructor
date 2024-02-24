import type { Meta, StoryObj } from '@storybook/vue3'

import { M3Icon } from 'ui/M3Icon'

import {
  m3IconArgs,
  m3IconDescription,
  m3IconValues
} from 'ui/book/m3/icon.ts'

const meta = {
  title: 'M3/Icon',
  component: M3Icon,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: { component: m3IconDescription }
    }
  },
  argTypes: m3IconArgs,
  args: m3IconValues
} satisfies Meta<typeof M3Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {}

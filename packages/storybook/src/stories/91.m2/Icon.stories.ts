import type { Meta, StoryObj } from '@storybook/vue3'

import { M2Icon } from 'ui/M2Icon'

import {
  m2IconArgs,
  m2IconText,
  m2IconValues
} from 'ui/book/m2/icon.ts'

const meta = {
  title: 'M2/Icon',
  component: M2Icon,
  tags: ['autodocs'],
  parameters: {
    design: 'm2',
    docs: {
      description: { component: m2IconText.main.description.main }
    }
  },
  argTypes: m2IconArgs,
  args: m2IconValues
} satisfies Meta<typeof M2Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {}

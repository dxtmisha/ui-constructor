import type { Meta, StoryObj } from '@storybook/vue3'

import { renderRipple } from '../../renders/renderRipple.ts'

import { C2Ripple } from 'ui/C2Ripple'

import {
  c2RippleArgs,
  c2RippleDescription,
  c2RippleValues
} from 'ui/book/c2/ripple.ts'

const meta = {
  title: 'C2/Ripple',
  component: C2Ripple,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: c2RippleDescription
      }
    }
  },
  argTypes: c2RippleArgs,
  args: c2RippleValues
} satisfies Meta<typeof C2Ripple>

export default meta

type Story = StoryObj<typeof meta>

export const Ripple: Story = {
  render: renderRipple(C2Ripple)
}

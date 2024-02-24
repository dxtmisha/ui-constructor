import type { Meta, StoryObj } from '@storybook/vue3'

import { renderRipple } from '../../renders/renderRipple.ts'

import { C1Ripple } from 'ui/C1Ripple'

import {
  c1RippleArgs,
  c1RippleDescription,
  c1RippleValues
} from 'ui/book/c1/ripple.ts'

const meta = {
  title: 'C1/Ripple',
  component: C1Ripple,
  tags: ['autodocs'],
  parameters: {
    design: 'c1',
    docs: {
      description: {
        component: c1RippleDescription
      }
    }
  },
  argTypes: c1RippleArgs,
  args: c1RippleValues
} satisfies Meta<typeof C1Ripple>

export default meta

type Story = StoryObj<typeof meta>

export const Ripple: Story = {
  render: renderRipple(C1Ripple)
}

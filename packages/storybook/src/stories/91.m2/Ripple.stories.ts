import type { Meta, StoryObj } from '@storybook/vue3'

import { renderRipple } from '../../renders/renderRipple.ts'

import { M2Ripple } from 'ui/M2Ripple'

import {
  m2RippleArgs,
  m2RippleDescription,
  m2RippleValues
} from 'ui/book/m2/ripple.ts'

const meta = {
  title: 'M2/Ripple',
  component: M2Ripple,
  tags: ['autodocs'],
  parameters: {
    design: 'm2',
    docs: {
      description: {
        component: m2RippleDescription
      }
    }
  },
  argTypes: m2RippleArgs,
  args: m2RippleValues
} satisfies Meta<typeof M2Ripple>

export default meta

type Story = StoryObj<typeof meta>

export const Ripple: Story = {
  render: renderRipple(M2Ripple)
}

import type { Meta, StoryObj } from '@storybook/vue3'

import { renderRipple } from '../../renders/renderRipple.ts'

import { M3Ripple } from 'ui/M3Ripple'

import {
  m3RippleArgs,
  m3RippleDescription,
  m3RippleValues
} from 'ui/book/m3/ripple.ts'

const meta = {
  title: 'M3/Ripple',
  component: M3Ripple,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component: m3RippleDescription
      }
    }
  },
  argTypes: m3RippleArgs,
  args: m3RippleValues
} satisfies Meta<typeof M3Ripple>

export default meta

type Story = StoryObj<typeof meta>

export const Ripple: Story = {
  render: renderRipple(M3Ripple)
}

import type { Meta, StoryObj } from '@storybook/vue3'

import { M3Button } from 'ui/M3Button'

import {
  m3ButtonArgs,
  m3ButtonValues,
  m3ButtonDescription
} from 'ui/book/m3/button.ts'

const meta = {
  title: 'M3/Button',
  component: M3Button,
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component: m3ButtonDescription
      }
    }
  },
  argTypes: m3ButtonArgs,
  args: m3ButtonValues
} satisfies Meta<typeof M3Button>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {}

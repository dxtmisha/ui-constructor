import type { Meta, StoryObj } from '@storybook/vue3'

import { M2Button } from 'ui/M2Button'

import {
  m2ButtonArgs,
  m2ButtonValues,
  m2ButtonDescription
} from 'ui/book/m2/button.ts'

const meta = {
  title: 'M2/Button',
  component: M2Button,
  tags: ['autodocs'],
  parameters: {
    design: 'm2',
    docs: {
      description: {
        component: m2ButtonDescription
      }
    }
  },
  argTypes: m2ButtonArgs,
  args: m2ButtonValues
} satisfies Meta<typeof M2Button>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {}

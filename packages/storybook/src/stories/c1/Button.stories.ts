import type { Meta, StoryObj } from '@storybook/vue3'

import { C1Button } from 'ui/C1Button'

import {
  c1ButtonArgs,
  c1ButtonValues,
  c1ButtonDescription
} from 'ui/book/c1/button.ts'

const meta = {
  title: 'C1/Button',
  component: C1Button,
  tags: ['autodocs'],
  parameters: {
    design: 'c1',
    docs: {
      description: {
        component: c1ButtonDescription
      }
    }
  },
  argTypes: c1ButtonArgs,
  args: c1ButtonValues
} satisfies Meta<typeof C1Button>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {}

import type { Meta, StoryObj } from '@storybook/vue3'

import { M3Checkbox } from 'ui/M3Checkbox'

import {
  m3CheckboxArgs,
  m3CheckboxText,
  m3CheckboxValues
} from 'ui/book/m3/checkbox.ts'

const meta = {
  title: 'M3/Checkbox',
  component: M3Checkbox,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component: m3CheckboxText.main.description.main
      }
    }
  },
  argTypes: m3CheckboxArgs,
  args: m3CheckboxValues
} satisfies Meta<typeof M3Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Checkbox: Story = {}

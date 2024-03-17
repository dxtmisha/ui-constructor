import type { Meta, StoryObj } from '@storybook/vue3'

import { C2Checkbox } from 'ui/C2Checkbox'

import {
  c2CheckboxArgs,
  c2CheckboxText,
  c2CheckboxValues
} from 'ui/book/c2/checkbox.ts'

const meta = {
  title: 'C2/Checkbox',
  component: C2Checkbox,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: c2CheckboxText.main.description.main
      }
    }
  },
  argTypes: c2CheckboxArgs,
  args: c2CheckboxValues
} satisfies Meta<typeof C2Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Checkbox: Story = {}

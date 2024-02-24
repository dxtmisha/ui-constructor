import type { Meta, StoryObj } from '@storybook/vue3'

import { M2Progress } from 'ui/M2Progress'

import {
  m2ProgressArgs,
  m2ProgressDescription,
  m2ProgressValues
} from 'ui/book/m2/progress.ts'

const meta = {
  title: 'M2/Progress',
  component: M2Progress,
  tags: ['autodocs'],
  parameters: {
    design: 'm2',
    docs: {
      description: {
        component: m2ProgressDescription
      }
    }
  },
  argTypes: m2ProgressArgs,
  args: m2ProgressValues
} satisfies Meta<typeof M2Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Progress: Story = {}

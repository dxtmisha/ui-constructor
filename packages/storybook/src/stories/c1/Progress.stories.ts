import type { Meta, StoryObj } from '@storybook/vue3'

import { C1Progress } from 'ui/C1Progress'

import {
  c1ProgressArgs,
  c1ProgressDescription,
  c1ProgressValues
} from 'ui/book/c1/progress.ts'

const meta = {
  title: 'C1/Progress',
  component: C1Progress,
  tags: ['autodocs'],
  parameters: {
    design: 'c1',
    docs: {
      description: {
        component: c1ProgressDescription
      }
    }
  },
  argTypes: c1ProgressArgs,
  args: c1ProgressValues
} satisfies Meta<typeof C1Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Progress: Story = {}

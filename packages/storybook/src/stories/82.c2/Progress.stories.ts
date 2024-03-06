import type { Meta, StoryObj } from '@storybook/vue3'

import { C2Progress } from 'ui/C2Progress'
import {
  c2ProgressArgs,
  c2ProgressDescription,
  c2ProgressValues
} from 'ui/book/c2/progress.ts'

const meta = {
  title: 'C2/Progress',
  component: C2Progress,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: c2ProgressDescription
      }
    }
  },
  argTypes: c2ProgressArgs,
  args: c2ProgressValues
} satisfies Meta<typeof C2Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Progress: Story = {}

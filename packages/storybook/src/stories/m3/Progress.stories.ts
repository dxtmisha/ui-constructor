import type { Meta, StoryObj } from '@storybook/vue3'

import { M3Progress } from 'ui/M3Progress'

import {
  m3ProgressArgs,
  m3ProgressDescription,
  m3ProgressValues
} from 'ui/book/m3/progress.ts'

const meta = {
  title: 'M3/Progress',
  component: M3Progress,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component: m3ProgressDescription
      }
    }
  },
  argTypes: m3ProgressArgs,
  args: m3ProgressValues
} satisfies Meta<typeof M3Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Progress: Story = {}

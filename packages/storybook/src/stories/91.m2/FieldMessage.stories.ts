import type { Meta, StoryObj } from '@storybook/vue3'

import { M3FieldMessage } from 'ui/M3FieldMessage'

import {
  m3FieldMessageArgs,
  m3FieldMessageText,
  m3FieldMessageValues
} from 'ui/book/m3/fieldMessage.ts'

const meta = {
  title: 'M3/FieldMessage',
  component: M3FieldMessage,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component: m3FieldMessageText.main.description.main
      }
    }
  },
  argTypes: m3FieldMessageArgs,
  args: m3FieldMessageValues
} satisfies Meta<typeof M3FieldMessage>

export default meta

type Story = StoryObj<typeof meta>

export const FieldMessage: Story = {}

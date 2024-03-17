import type { Meta, StoryObj } from '@storybook/vue3'

import { C2FieldMessage } from 'ui/C2FieldMessage'

import {
  c2FieldMessageArgs,
  c2FieldMessageText,
  c2FieldMessageValues
} from 'ui/book/c2/fieldMessage.ts'

const meta = {
  title: 'C2/FieldMessage',
  component: C2FieldMessage,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: c2FieldMessageText.main.description.main
      }
    }
  },
  argTypes: c2FieldMessageArgs,
  args: c2FieldMessageValues
} satisfies Meta<typeof C2FieldMessage>

export default meta

type Story = StoryObj<typeof meta>

export const FieldMessage: Story = {}

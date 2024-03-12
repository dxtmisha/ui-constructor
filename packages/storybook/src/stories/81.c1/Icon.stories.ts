import type { Meta, StoryObj } from '@storybook/vue3'

import { C1Icon } from 'ui/C1Icon'
import {
  c1IconArgs,
  c1IconText,
  c1IconValues
} from 'ui/book/c1/icon.ts'

const meta = {
  title: 'C1/Icon',
  component: C1Icon,
  tags: ['autodocs'],
  parameters: {
    design: 'c1',
    docs: {
      description: { component: c1IconText.main.description.main }
    }
  },
  argTypes: c1IconArgs,
  args: c1IconValues
} satisfies Meta<typeof C1Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {}

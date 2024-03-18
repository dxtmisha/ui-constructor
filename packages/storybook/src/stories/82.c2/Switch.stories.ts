import type { Meta, StoryObj } from '@storybook/vue3'

import { C2Switch } from 'ui/C2Switch'

import {
  c2SwitchArgs,
  c2SwitchText,
  c2SwitchValues
} from 'ui/book/c2/switch.ts'

const meta = {
  title: 'C2/Switch',
  component: C2Switch,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: c2SwitchText.main.description.main
      }
    }
  },
  argTypes: c2SwitchArgs,
  args: c2SwitchValues
} satisfies Meta<typeof C2Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Switch: Story = {}

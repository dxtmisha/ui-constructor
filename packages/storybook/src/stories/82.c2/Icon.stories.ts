import type { Meta, StoryObj } from '@storybook/vue3'
import { h, VNode } from 'vue'

import { C2Icon } from 'ui/C2Icon'

import {
  c2IconArgs,
  c2IconDescription,
  c2IconValues
} from 'ui/book/c2/icon.ts'
import { icons } from 'ui/book/values.ts'

const meta = {
  title: 'C2/Icon',
  component: C2Icon,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: { component: c2IconDescription }
    }
  },
  argTypes: c2IconArgs,
  args: c2IconValues
} satisfies Meta<typeof C2Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {}

export const IconList: Story = {
  name: 'Список',
  render (args: any) {
    const children: VNode[] = []

    icons.forEach(icon => children.push(
      h('div', {
        style: {
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }
      }, [
        h(C2Icon, {
          ...args,
          icon
        }),
        h('span', {}, icon)
      ])
    ))

    return () => h('div', { style: { columnCount: '4' } }, children)
  }
}

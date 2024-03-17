import type { Meta, StoryObj } from '@storybook/vue3'

import { C2Radio } from 'ui/C2Radio'

import {
  c2RadioArgs,
  c2RadioText,
  c2RadioValues
} from 'ui/book/c2/radio.ts'

const meta = {
  title: 'C2/Radio',
  component: C2Radio,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: c2RadioText.main.description.main
      }
    }
  },
  argTypes: c2RadioArgs,
  args: c2RadioValues
} satisfies Meta<typeof C2Radio>

export default meta

type Story = StoryObj<typeof meta>

export const Radio: Story = {
  render: (args: any) => ({
    components: {
      C2Radio
    },
    setup () {
      return {
        args
      }
    },
    template: `
      <div class="flex flex-col gap-2">
        <C2Radio name="radio" value-variant="radio1" v-bind="args"/>
        <C2Radio name="radio" value-variant="radio2" v-bind="args"/>
        <C2Radio name="radio" value-variant="radio3" v-bind="args"/>
      </div>
    `
  })
}

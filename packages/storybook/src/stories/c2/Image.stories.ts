import type { Meta, StoryObj } from '@storybook/vue3'

import { renderImageAdaptive } from '../../renders/randerImageAdaptive.ts'

import { C2Image } from 'ui/C2Image'

import {
  c2ImageArgs,
  c2ImageDescription,
  c2ImageDescriptionAdaptive,
  c2ImageValues
} from 'ui/book/c2/image.ts'

const meta = {
  title: 'C2/Image',
  component: C2Image,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: { component: c2ImageDescription }
    }
  },
  argTypes: c2ImageArgs,
  args: c2ImageValues
} satisfies Meta<typeof C2Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {}

export const ImageAdaptive: Story = {
  name: 'Adaptive',
  parameters: {
    docs: {
      description: {
        story: c2ImageDescriptionAdaptive
      }
    }
  },
  render: renderImageAdaptive(C2Image)
}

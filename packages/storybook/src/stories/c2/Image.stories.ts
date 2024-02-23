import type { Meta, StoryObj } from '@storybook/vue3'

import { C2Image } from 'ui/C2Image'

import {
  c2ImageArgs,
  c2ImageDescription,
  c2ImageDescriptionAdaptive,
  c2ImageValues
} from 'ui/book/c2/image.ts'

import galaxyZFold5 from '../assets/Galaxy_Z_Fold5.png'
import galaxyZFlip5 from '../assets/Galaxy_Z_Flip5.png'
import galaxyS23p from '../assets/Galaxy_S23p.png'
import pad from '../assets/pad.png'

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
  render: (args: any) => ({
    components: {
      C2Image
    },
    setup () {
      return {
        args,
        galaxyZFold5,
        galaxyZFlip5,
        galaxyS23p,
        pad
      }
    },
    template: `
      <div style="display: flex; gap: 16px;">
        <div style="position: relative; width: 192px; height: 192px;">
          <c2-image v-bind="args" :value="galaxyS23p" adaptive object-width="76.2"/>
        </div>
        <div style="position: relative; width: 192px; height: 192px;">
          <c2-image v-bind="args" :value="galaxyZFlip5" adaptive object-width="71.9"/>
        </div>
        <div style="position: relative; width: 192px; height: 192px;">
          <c2-image v-bind="args" :value="galaxyZFold5" adaptive object-width="129.9"/>
        </div>
        <div style="position: relative; width: 192px; height: 192px;">
          <c2-image v-bind="args" :value="pad" adaptive object-width="254.3"/>
        </div>
      </div>
    `
  })
}

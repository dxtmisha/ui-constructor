import type { Meta, StoryObj } from '@storybook/vue3'

import { M3Image } from 'ui/M3Image'

import {
  m3ImageArgs,
  m3ImageDescription,
  m3ImageDescriptionAdaptive,
  m3ImageValues
} from 'ui/book/m3/image.ts'

import galaxyZFold5 from '../assets/Galaxy_Z_Fold5.png'
import galaxyZFlip5 from '../assets/Galaxy_Z_Flip5.png'
import galaxyS23p from '../assets/Galaxy_S23p.png'
import pad from '../assets/pad.png'

const meta = {
  title: 'M3/Image',
  component: M3Image,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: { component: m3ImageDescription }
    }
  },
  argTypes: m3ImageArgs,
  args: m3ImageValues
} satisfies Meta<typeof M3Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {}

export const ImageAdaptive: Story = {
  name: 'Adaptive',
  parameters: {
    docs: {
      description: {
        story: m3ImageDescriptionAdaptive
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Image
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
          <m3-image v-bind="args" :value="galaxyS23p" adaptive object-width="76.2"/>
        </div>
        <div style="position: relative; width: 192px; height: 192px;">
          <m3-image v-bind="args" :value="galaxyZFlip5" adaptive object-width="71.9"/>
        </div>
        <div style="position: relative; width: 192px; height: 192px;">
          <m3-image v-bind="args" :value="galaxyZFold5" adaptive object-width="129.9"/>
        </div>
        <div style="position: relative; width: 192px; height: 192px;">
          <m3-image v-bind="args" :value="pad" adaptive object-width="254.3"/>
        </div>
      </div>
    `
  })
}

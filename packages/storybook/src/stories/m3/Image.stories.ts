import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import { Icons } from 'ui'

import { M3Image } from 'ui/M3Image'

import {
  m3ImageArgs,
  m3ImageValues
} from 'ui/book/m3/image.ts'

import dx1228 from '../../assets/DX12-28.png'
import fx135 from '../../assets/FX135.png'
import galaxyZFold5 from '../../assets/Galaxy_Z_Fold5.png'
import galaxyZFlip5 from '../../assets/Galaxy_Z_Flip5.png'
import galaxyS23p from '../../assets/Galaxy_S23p.png'
import pad from '../../assets/pad.png'
import coralclub from '../../assets/coralclub.svg'
import doc from '../../assets/doc.pdf'
import photo from '../../assets/photo.jpg'

const meta = {
  title: 'M3/Image',
  component: M3Image,
  parameters: { design: 'm3' },
  argTypes: m3ImageArgs,
  args: m3ImageValues
} satisfies Meta<typeof M3Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {}

export const Value: Story = {
  render: () => ({
    components: { M3Image },
    setup () {
      return {
        galaxyS23p,
        coralclub,
        doc
      }
    },
    template: `
      <div class="flex flex-wrap items-center justify-center gap-2">
        <div class="p-2 border">
          <div class="pb-2 text-center">Icon</div>
          <div class="relative w-48 h-48">
            <M3Image value="home"/>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Image</div>
          <div class="relative w-48 h-48">
            <M3Image :value="galaxyS23p" size="contain"/>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Image/ SVG</div>
          <div class="relative w-48 h-48">
            <M3Image :value="coralclub" size="contain"/>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">PDF</div>
          <div class="relative w-48 h-48">
            <M3Image :value="doc"/>
          </div>
        </div>
      </div>
    `
  })
}

export const ValueIcon: Story = {
  name: 'Value/ icon',
  render: () => ({
    components: { M3Image },
    setup () {
      Icons.add('icon-image', galaxyS23p)
      Icons.add('icon-svg', coralclub)

      return {}
    },
    template: `
      <div class="flex flex-wrap items-center justify-center gap-2">
        <div class="p-2 border">
          <div class="pb-2 text-center">Icon/ image</div>
          <div class="relative w-48 h-48">
            <M3Image value="icon-image"/>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Icon/ SVG</div>
          <div class="relative w-48 h-48">
            <M3Image value="icon-svg"/>
          </div>
        </div>
      </div>
    `
  })
}

export const ValueUnloaded: Story = {
  name: 'Value/ unloaded',
  render: () => ({
    components: { M3Image },
    setup () {
      const file = ref()

      return {
        file,
        onInput: ({ target }: { target: HTMLInputElement }) => {
          file.value = target.files?.[0]
        }
      }
    },
    template: `
      <div class="flex flex-wrap items-center justify-center gap-2">
        <div class="p-2 border">
          <div class="pb-2">Input</div>
          <input type="file" accept="application/pdf, image/*" @input="onInput">
        </div>
        <div class="p-2 border">
          <div class="relative w-72 h-72">
            <M3Image :value="file" size="contain"/>
          </div>
        </div>
      </div>
    `
  })
}

export const Coordinator: Story = {
  render: () => ({
    components: { M3Image },
    setup () {
      return {
        photo
      }
    },
    template: `
      <div class="flex items-center justify-center gap-4">
        <div class="p-2 border">
          <div class="pb-2 text-center">Standard</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-72 h-44">
              <M3Image :value="photo"/>
            </div>
            <div class="relative w-44 h-44">
              <M3Image :value="photo"/>
            </div>
            <div class="relative w-44 h-72">
              <M3Image :value="photo"/>
            </div>
            <div class="relative w-72 h-32">
              <M3Image :value="photo"/>
            </div>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Coordinator</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-72 h-44">
              <M3Image :value="photo" :coordinator="[5,5,5,50]"/>
            </div>
            <div class="relative w-44 h-44">
              <M3Image :value="photo" :coordinator="[5,5,5,50]"/>
            </div>
            <div class="relative w-44 h-72">
              <M3Image :value="photo" :coordinator="[5,5,5,50]"/>
            </div>
            <div class="relative w-72 h-32">
              <M3Image :value="photo" :coordinator="[5,5,5,50]"/>
            </div>
          </div>
        </div>
      </div>
    `
  })
}

export const Adaptive: Story = {
  render: () => ({
    components: { M3Image },
    setup () {
      return {
        dx1228,
        fx135,
        galaxyS23p,
        galaxyZFlip5,
        galaxyZFold5,
        pad
      }
    },
    template: `
      <div class="flex items-center justify-center gap-4">
        <div class="p-2 border">
          <div class="pb-2 text-center">Standard</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-64 h-48">
              <M3Image :value="dx1228" size="contain"/>
            </div>
            <div class="relative w-64 h-48">
              <M3Image :value="fx135" size="contain"/>
            </div>
            <div class="relative w-48 h-48">
              <M3Image :value="galaxyS23p" size="contain"/>
            </div>
            <div class="relative w-48 h-48">
              <M3Image :value="galaxyZFlip5" size="contain"/>
            </div>
            <div class="relative w-48 h-48">
              <M3Image :value="galaxyZFold5" size="contain"/>
            </div>
            <div class="relative w-48 h-48">
              <M3Image :value="pad" size="contain"/>
            </div>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Adaptive</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-64 h-48">
              <M3Image :value="dx1228" adaptive object-width="63.5"/>
            </div>
            <div class="relative w-64 h-48">
              <M3Image :value="fx135" adaptive object-width="139.5"/>
            </div>
            <div class="relative w-48 h-48">
              <M3Image :value="galaxyS23p" adaptive object-width="76.2"/>
            </div>
            <div class="relative w-48 h-48">
              <M3Image :value="galaxyZFlip5" adaptive object-width="71.9"/>
            </div>
            <div class="relative w-48 h-48">
              <M3Image :value="galaxyZFold5" adaptive object-width="129.9"/>
            </div>
            <div class="relative w-48 h-48">
              <M3Image :value="pad" adaptive object-width="254.3"/>
            </div>
          </div>
        </div>
      </div>
    `
  })
}

export const AdaptiveAlways: Story = {
  name: 'Adaptive/ always',
  render: () => ({
    components: { M3Image },
    setup () {
      return {
        galaxyS23p,
        galaxyZFlip5,
        galaxyZFold5
      }
    },
    template: `
      <div class="flex flex-wrap items-center justify-center gap-2">
        <div class="relative w-48 h-48">
          <M3Image :value="galaxyS23p" adaptive adaptive-always object-width="76.2"/>
        </div>
        <div class="relative w-48 h-48">
          <M3Image :value="galaxyZFlip5" adaptive adaptive-always object-width="71.9"/>
        </div>
        <div class="relative w-48 h-48">
          <M3Image :value="galaxyZFold5" adaptive adaptive-always object-width="129.9"/>
        </div>
      </div>
    `
  })
}

export const AdaptiveGroup: Story = {
  name: 'Adaptive/ group',
  render: () => ({
    components: { M3Image },
    setup () {
      return {
        dx1228,
        fx135,
        galaxyS23p,
        galaxyZFlip5,
        galaxyZFold5,
        pad
      }
    },
    template: `
      <div class="flex items-center justify-center gap-4">
        <div class="p-2 border">
          <div class="pb-2 text-center">Lens</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-64 h-48">
              <M3Image :value="dx1228" adaptive adaptive-group="lens" object-width="63.5"/>
            </div>
            <div class="relative w-64 h-48">
              <M3Image :value="fx135" adaptive adaptive-group="lens" object-width="139.5"/>
            </div>
          </div>
        </div>
        <div class="p-2 border">
          <div class="pb-2 text-center">Phone</div>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <div class="relative w-48 h-48">
              <M3Image :value="galaxyS23p" adaptive adaptive-group="phone" object-width="76.2"/>
            </div>
            <div class="relative w-48 h-48">
              <M3Image :value="pad" adaptive adaptive-group="phone" object-width="254.3"/>
            </div>
          </div>
        </div>
      </div>
    `
  })
}

import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import { M3Button } from 'ui/M3Button'
import { M3Window } from 'ui/M3Window'

import {
  m3WindowArgs,
  m3WindowDescription,
  m3WindowValues
} from 'ui/book/m3/window.ts'

const meta = {
  title: 'M3/Window',
  component: M3Window,
  tags: ['autodocs'],
  parameters: {
    design: 'm3',
    docs: {
      description: {
        component: m3WindowDescription
      }
    }
  },
  argTypes: m3WindowArgs,
  args: m3WindowValues
} satisfies Meta<typeof M3Window>

export default meta

type Story = StoryObj<typeof meta>

export const Window: Story = {
  render: (args: any) => ({
    components: {
      M3Button,
      M3Window
    },
    setup () {
      return {
        args
      }
    },
    template: `
      <m3-window v-bind="args">
        <template v-slot:control="binds">
          <m3-button v-bind="binds">Window</m3-button>
        </template>
        <template v-slot:default>
          <div style="padding: 16px;">
            <p>
              <b>What's Material?</b>
            </p>
            <p>
              Material Design is a design system built and supported<br/>
              by Google designers and developers. Material.io includes<br/>
              in-depth UX guidance and UI component implementations for<br/>
              Android, Flutter, and the Web.
            </p>
            <p>
              The latest version, Material 3, enables personal, adaptive,<br/>
              and expressive experiences – from dynamic color and enhanced<br/>
              accessibility, to foundations for large screen layouts and<br/>
              design tokens.
            </p>
            <div>
              <m3-button outlined class="m3-window--close">Close</m3-button>
            </div>
          </div>
        </template>
      </m3-window>
    `
  })
}

export const WindowContextmenu: Story = {
  name: 'Contextmenu',
  parameters: {
    docs: {
      description: {
        story: 'Свойство contextmenu изменяет открытие окна через правую кнопку мыши, ' +
          'вместо левой, и убирает стандартное меню.'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Button,
      M3Window
    },
    setup () {
      return {
        args
      }
    },
    template: `
      <m3-window contextmenu v-bind="args">
        <template v-slot:control="binds">
          <m3-button v-bind="binds">Contextmenu</m3-button>
        </template>
        <template v-slot:default>

          <div style="padding: 8px 16px;">Item 1</div>
          <div style="padding: 8px 16px;">Item 2</div>
          <div style="padding: 8px 16px;">Item 3</div>
          <div style="padding: 8px 16px;">Item 4</div>
          <div style="padding: 8px 16px;">Item 5</div>
          <div style="padding: 8px 16px;">Item 6</div>
        </template>
      </m3-window>
    `
  })
}

export const WindowOver: Story = {
  name: 'Over',
  parameters: {
    docs: {
      description: {
        story: 'Через свойство over-element можно заставить окно центрироваться относительно выбранного элемента.<br> ' +
          'Свойство работает только если axis равно on.<br> ' +
          'Свойство принимает объект самого элемента или селектор к нужному элементу.'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Button,
      M3Window
    },
    setup () {
      return {
        args
      }
    },
    template: `
      <m3-window
        axis="on"
        over-element="#window-over-item-3"
        v-bind="args"
      >
        <template v-slot:control="binds">
          <m3-button v-bind="binds">Over: Item 3</m3-button>
        </template>
        <template v-slot:default>
          <div style="padding: 8px 16px;">Item 1</div>
          <div style="padding: 8px 16px;">Item 2</div>
          <div style="padding: 8px 16px; background-color: #0b2a32; color: #4db6ac;" id="window-over-item-3">Item 3
          </div>
          <div style="padding: 8px 16px;">Item 4</div>
          <div style="padding: 8px 16px;">Item 5</div>
          <div style="padding: 8px 16px;">Item 6</div>
        </template>
      </m3-window>
    `
  })
}

export const WindowStaticMode: Story = {
  name: 'Static mode',
  parameters: {
    docs: {
      description: {
        story: 'Свойство staticMode включает статический режим. ' +
          'Статический режим переводит окно в position: static, и само окно становится видимым. ' +
          'Это нужно для таких компонентов, как поиск или главное меню справа, которые видны на ПК и скрываются в мобильном режиме.<br> ' +
          'Свойство будет работать только когда adaptive равно 1 из статических значений.'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Button,
      M3Window
    },
    setup () {
      return {
        args
      }
    },
    template: `
      <m3-window
        adaptive="staticLg"
        alignment="left"
        dense
        height="max"
        origin="leftToRight"
        over-element="#window-over-item-3"
        static-mode
        v-bind="args"
      >
        <template v-slot:control="binds">
          <m3-button v-bind="binds">Window</m3-button>
        </template>
        <template v-slot:default>
          <div style="padding: 16px;">
            <p>
              <b>What's Material?</b>
            </p>
            <p>
              Material Design is a design system built and supported<br/>
              by Google designers and developers. Material.io includes<br/>
              in-depth UX guidance and UI component implementations for<br/>
              Android, Flutter, and the Web.
            </p>
            <p>
              The latest version, Material 3, enables personal, adaptive,<br/>
              and expressive experiences – from dynamic color and enhanced<br/>
              accessibility, to foundations for large screen layouts and<br/>
              design tokens.
            </p>
            <div>
              <m3-button outlined class="m3-window--close">Close</m3-button>
            </div>
          </div>
        </template>
      </m3-window>
    `
  })
}

export const WindowManagement: Story = {
  name: 'Management',
  parameters: {
    docs: {
      description: {
        story: 'Управление окном можно через методы <b>setOpen(boolean)</b>, <b>toggle()</b>.</small>'
      }
    }
  },
  render: (args: any) => ({
    components: {
      M3Button,
      M3Window
    },
    setup () {
      const window = ref<any>()

      return {
        args,
        window,
        onClick: () => {
          console.log('window.value', window.value)
          window.value?.toggle()
        }
      }
    },
    template: `
      <div style="display: flex; gap: 16px;">
        <div>
          <m3-button @click="onClick">Open</m3-button>
        </div>
        <div>
          <m3-window
            ref="window"
            adaptive="modal"
            v-bind="args"
          >
            <template v-slot:default>
              <div style="padding: 16px;">
                <p>
                  <b>What's Material?</b>
                </p>
                <p>
                  Material Design is a design system built and supported<br/>
                  by Google designers and developers. Material.io includes<br/>
                  in-depth UX guidance and UI component implementations for<br/>
                  Android, Flutter, and the Web.
                </p>
                <p>
                  The latest version, Material 3, enables personal, adaptive,<br/>
                  and expressive experiences – from dynamic color and enhanced<br/>
                  accessibility, to foundations for large screen layouts and<br/>
                  design tokens.
                </p>
                <div>
                  <m3-button outlined class="m3-window--close">Close</m3-button>
                </div>
              </div>
            </template>
          </m3-window>
        </div>
      </div>
    `
  })
}

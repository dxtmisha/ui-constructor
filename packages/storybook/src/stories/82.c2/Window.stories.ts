import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import { C2Button } from 'ui/C2Button'
import { C2Window } from 'ui/C2Window'

import {
  c2WindowArgs,
  c2WindowText,
  c2WindowValues
} from 'ui/book/c2/window.ts'

const meta = {
  title: 'C2/Window',
  component: C2Window,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: c2WindowText.main.description.main
      }
    }
  },
  argTypes: c2WindowArgs,
  args: c2WindowValues
} satisfies Meta<typeof C2Window>

export default meta

type Story = StoryObj<typeof meta>

export const Window: Story = {
  render: (args: any) => ({
    components: {
      C2Button,
      C2Window
    },
    setup () {
      return {
        args
      }
    },
    template: `
      <c2-window v-bind="args">
        <template v-slot:control="binds">
          <c2-button v-bind="binds">Window</c2-button>
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
              <c2-button outlined class="c2-window--close">Close</c2-button>
            </div>
          </div>
        </template>
      </c2-window>
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
      C2Button,
      C2Window
    },
    setup () {
      return {
        args
      }
    },
    template: `
      <c2-window contextmenu v-bind="args">
        <template v-slot:control="binds">
          <c2-button v-bind="binds">Contextmenu</c2-button>
        </template>
        <template v-slot:default>

          <div style="padding: 8px 16px;">Item 1</div>
          <div style="padding: 8px 16px;">Item 2</div>
          <div style="padding: 8px 16px;">Item 3</div>
          <div style="padding: 8px 16px;">Item 4</div>
          <div style="padding: 8px 16px;">Item 5</div>
          <div style="padding: 8px 16px;">Item 6</div>
        </template>
      </c2-window>
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
      C2Button,
      C2Window
    },
    setup () {
      return {
        args
      }
    },
    template: `
      <c2-window
        axis="on"
        over-element="#window-over-item-3"
        v-bind="args"
      >
        <template v-slot:control="binds">
          <c2-button v-bind="binds">Over: Item 3</c2-button>
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
      </c2-window>
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
      C2Button,
      C2Window
    },
    setup () {
      return {
        args
      }
    },
    template: `
      <c2-window
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
          <c2-button v-bind="binds">Window</c2-button>
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
              <c2-button outlined class="c2-window--close">Close</c2-button>
            </div>
          </div>
        </template>
      </c2-window>
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
      C2Button,
      C2Window
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
          <c2-button @click="onClick">Open</c2-button>
        </div>
        <div>
          <c2-window
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
                  <c2-button outlined class="c2-window--close">Close</c2-button>
                </div>
              </div>
            </template>
          </c2-window>
        </div>
      </div>
    `
  })
}

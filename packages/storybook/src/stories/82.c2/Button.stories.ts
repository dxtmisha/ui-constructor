import type { Meta, StoryObj } from '@storybook/vue3'

import { h, VNode } from 'vue'
import { renderButtonStyle } from '../../renders/renderButtonStyle.ts'

import { C2Button } from 'ui/C2Button'

import {
  c2ButtonArgs,
  c2ButtonStyles,
  c2ButtonValues,
  c2ButtonDescription,
  c2ButtonDescriptionGhost,
  c2ButtonDescriptionHierarchy,
  c2ButtonDescriptionOutline,
  c2ButtonDescriptionPrimary,
  c2ButtonDescriptionSecondary,
  c2ButtonNameHierarchy,
  c2ButtonNameSize
} from 'ui/book/c2/button.ts'
import { propsValues } from 'ui/c2/Button/props.ts'

const meta = {
  title: 'C2/Button',
  component: C2Button,
  tags: ['autodocs'],
  parameters: {
    design: 'c2',
    docs: {
      description: {
        component: c2ButtonDescription
      }
    }
  },
  argTypes: c2ButtonArgs,
  args: c2ButtonValues
} satisfies Meta<typeof C2Button>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {}

export const ButtonHierarchy: Story = {
  name: c2ButtonNameHierarchy,
  parameters: {
    docs: {
      description: {
        story: c2ButtonDescriptionHierarchy
      }
    }
  },
  render () {
    const children: VNode[] = []
    const styleItem = {
      display: 'flex',
      flexBasis: '1px',
      flexGrow: '1',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px'
    }

    c2ButtonStyles.forEach(item => {
      const sizes: VNode[] = []

      propsValues.size.forEach(size => sizes.push(
        h(C2Button, {
          ...item.props,
          label: c2ButtonValues.label,
          size
        })
      ))

      children.push(
        h('div', {
          style: styleItem
        }, [
          h('div', { class: 'c2-font--body--lg' }, item.name),
          ...sizes
        ])
      )
    })

    return () => h('div', {
      style: {
        display: 'flex',
        gap: '16px',
        width: '100%'
      }
    }, children)
  }
}

export const ButtonPrimary: Story = {
  name: 'Primary',
  parameters: {
    docs: {
      description: {
        story: c2ButtonDescriptionPrimary
      }
    }
  },
  args: {
    primary: true
  },
  render: renderButtonStyle(C2Button, c2ButtonValues.label)
}

export const ButtonSecondary: Story = {
  name: 'Secondary',
  parameters: {
    docs: {
      description: {
        story: c2ButtonDescriptionSecondary
      }
    }
  },
  args: {
    secondary: true
  },
  render: renderButtonStyle(C2Button, c2ButtonValues.label)
}

export const ButtonOutline: Story = {
  name: 'Outline',
  parameters: {
    docs: {
      description: {
        story: c2ButtonDescriptionOutline
      }
    }
  },
  args: {
    outline: true
  },
  render: renderButtonStyle(C2Button, c2ButtonValues.label)
}

export const ButtonGhost: Story = {
  name: 'Ghost',
  parameters: {
    docs: {
      description: {
        story: c2ButtonDescriptionGhost
      }
    }
  },
  args: {
    ghost: true
  },
  render: renderButtonStyle(C2Button, c2ButtonValues.label)
}

export const ButtonSize: Story = {
  name: c2ButtonNameSize,
  parameters: {
    docs: {
      description: {
        story: `<p>У кнопки есть ${propsValues.size.length} размеров, от которых зависят размеры используемых в них иконок и шрифта</p>`
      }
    }
  },
  render () {
    const children: VNode[] = []

    propsValues.size.forEach(size => children.push(
      h(C2Button, {
        label: c2ButtonValues.label,
        icon: 'home',
        size
      })
    ))

    return () => h('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }
    }, children)
  }
}

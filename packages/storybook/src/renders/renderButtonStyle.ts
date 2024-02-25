import { h } from 'vue'

export function renderButtonStyle (
  component: any,
  label: string
) {
  return (args: any) => {
    return () => h('div', {
      style: {
        display: 'flex',
        gap: '16px'
      }
    }, [
      h(component, {
        ...args,
        label,
        icon: 'home'
      }),
      h(component, {
        ...args,
        label
      }),
      h(component, {
        ...args,
        label: undefined,
        icon: 'home'
      })
    ])
  }
}

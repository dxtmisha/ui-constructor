import { h } from 'vue'

export function renderRipple (component: any) {
  return (args: any) => {
    return () => h('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '256px'
      }
    }, [
      h(component, args),
      h('span', {}, 'Click')
    ])
  }
}

import { h } from 'vue'

import galaxyS23p from '../stories/assets/Galaxy_S23p.png'
import galaxyZFlip5 from '../stories/assets/Galaxy_Z_Flip5.png'
import galaxyZFold5 from '../stories/assets/Galaxy_Z_Fold5.png'
import pad from '../stories/assets/pad.png'

export function renderImageAdaptive (component: any) {
  return (args: any) => {
    const styleItem = {
      position: 'relative',
      width: '192px',
      height: '192px'
    }

    return () => h('div', {
      style: {
        display: 'flex',
        gap: '16px'
      }
    }, [
      h('div', { style: styleItem }, [h(component, {
        ...args,
        adaptive: true,
        value: galaxyS23p,
        objectWidth: '76.2'
      })]),
      h('div', { style: styleItem }, [h(component, {
        ...args,
        adaptive: true,
        value: galaxyZFlip5,
        objectWidth: '71.9'
      })]),
      h('div', { style: styleItem }, [h(component, {
        ...args,
        adaptive: true,
        value: galaxyZFold5,
        objectWidth: '129.9'
      })]),
      h('div', { style: styleItem }, [h(component, {
        ...args,
        adaptive: true,
        value: pad,
        objectWidth: '254.3'
      })])
    ])
  }
}

import type { Preview } from '@storybook/vue3'

import { decorators } from '../src/decorators'

import { globalTypes } from '../src/config/globalTypes'

import 'ui/dist/plugin.css'
import './../src/style.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes,
  decorators: [decorators]
}

export default preview

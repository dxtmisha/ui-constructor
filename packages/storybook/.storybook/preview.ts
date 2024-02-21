import type { Preview } from '@storybook/vue3'

import { decorators } from '../src/decorators'

import { globalTypes } from '../src/config/globalTypes'

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

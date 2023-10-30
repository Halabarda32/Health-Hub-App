import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/assets/GlobalStyle'
import { theme } from '../src/assets/theme'

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview

export const decorators = [
	Story => (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Story />
		</ThemeProvider>
	),
]

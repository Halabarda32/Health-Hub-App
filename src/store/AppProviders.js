import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../assets/theme'
import { GlobalStyle } from '../assets/GlobalStyle'
import { ErrorProvider } from '../hooks/useErrors'
import { Provider } from 'react-redux'
import { store } from './index'

const AppProviders = ({ children }) => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<ErrorProvider>
					<GlobalStyle />
					{children}
				</ErrorProvider>
			</ThemeProvider>
		</Provider>
	)
}

export default AppProviders

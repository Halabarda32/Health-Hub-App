import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../assets/theme'
import { GlobalStyle } from '../assets/GlobalStyle'
import { ErrorProvider } from '../hooks/useErrors'
import { Provider } from 'react-redux'
import { store } from './index'
import { AuthProvider } from './AuthProvider'

const AppProviders = ({ children }) => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<ErrorProvider>
					<AuthProvider>
						<GlobalStyle />
						{children}
					</AuthProvider>
				</ErrorProvider>
			</ThemeProvider>
		</Provider>
	)
}

export default AppProviders

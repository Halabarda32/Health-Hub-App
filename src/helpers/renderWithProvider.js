import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../assets/theme'
import PatientsProvider from '../store/PatientsContext'

export const renderWithProviders = children => {
	return render(
		<ThemeProvider theme={theme}>
			<PatientsProvider>{children}</PatientsProvider>
		</ThemeProvider>
	)
}

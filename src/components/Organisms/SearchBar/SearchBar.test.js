import { render } from 'test-utils'
import { setupServer } from 'mws/node'
import { handlers } from '../../../mocks/handlers'
import { SearchBar } from './SearchBar'

describe('Search Bar', () => {
	it('Renders component', () => {
		render(<SearchBar />)
	})
})

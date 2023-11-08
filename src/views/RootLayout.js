import { Outlet } from 'react-router-dom'
import { Wrapper, MainContent } from './Root.styled'
import MainNavigation from '../components/Organisms/MainNavigation/MainNavigation'
import { SearchBar } from '../components/Organisms/SearchBar/SearchBar'
import AsideSection from '../components/Templates/AsideSection/AsideSection'
import { useAuth } from '../store/AuthProvider'
import NotesWidget from '../components/Organisms/NotesWidget/NotesWidget'

const RootLayout = () => {
	const { SignOutHandler } = useAuth()
	return (
		<Wrapper>
			<MainNavigation SignOutHandler={SignOutHandler} />
			<SearchBar />
			<MainContent>
				<Outlet />
			</MainContent>
			<AsideSection />
			<NotesWidget />
		</Wrapper>
	)
}

export default RootLayout

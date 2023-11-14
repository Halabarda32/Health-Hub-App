import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Wrapper, MainContent } from './Root.styled'
import MainNavigation from '../components/Organisms/MainNavigation/MainNavigation'
import { SearchBar } from '../components/Organisms/SearchBar/SearchBar'
import AsideSection from '../components/Templates/AsideSection/AsideSection'
import NotesWidget from '../components/Organisms/NotesWidget/NotesWidget'
import { AuthContext } from '../store/AuthProvider'

const RootLayout = () => {
	const { SignOutHandler } = useContext(AuthContext)
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

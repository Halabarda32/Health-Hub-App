import { Outlet, Navigate } from 'react-router-dom'
import { Wrapper, MainContent } from './Root.styled'
import MainNavigation from '../components/Organisms/MainNavigation/MainNavigation'
import { SearchBar } from '../components/Organisms/SearchBar/SearchBar'
import AsideSection from '../components/Templates/AsideSection/AsideSection'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import NotesWidget from '../components/Organisms/NotesWidget/NotesWidget'

const RootLayout = () => {
	const userSignOut = () => {
		signOut(auth)
			.then(() => {
				console.log('sign out successful')
				return <Navigate to="/auth" replace />
			})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<Wrapper>
			<MainNavigation userSignOut={userSignOut} />
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

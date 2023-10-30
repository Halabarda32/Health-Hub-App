import { Logo, StyledLink, Wrapper } from './MainNavigation.styled'
import AuthDetails from '../../../helpers/AuthDetails'

const MainNavigation = ({ userSignOut }) => {
	return (
		<Wrapper>
			<Logo>
				<h1>
					Health Hub
					<br />
					Connect
				</h1>
			</Logo>
			<StyledLink to="/dashboard">Dashboard</StyledLink>
			<StyledLink to="/addPatient">Add Patient</StyledLink>
			<StyledLink to="/notes">Notes</StyledLink>
			<StyledLink to="/auth" onClick={userSignOut}>
				Logout
			</StyledLink>
			<AuthDetails></AuthDetails>
		</Wrapper>
	)
}

export default MainNavigation

import { Logo, StyledLink, Wrapper } from './MainNavigation.styled'

const MainNavigation = ({ SignOutHandler }) => {
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
			<StyledLink to="/auth" onClick={SignOutHandler}>
				Logout
			</StyledLink>
		</Wrapper>
	)
}

export default MainNavigation

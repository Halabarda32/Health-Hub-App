import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-rows: 90px 1fr;
	grid-template-columns: 150px 1fr 0.75fr;
	background-color: ${({ theme }) => theme.colors.lightGrey};
	overflow: hidden;
	
`

export const MainContent = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
`

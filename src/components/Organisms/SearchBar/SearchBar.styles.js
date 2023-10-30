import styled from 'styled-components'
import { Input } from '../../Atoms/Input/Input'

export const SearchBarWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 40px;
	grid-row: 1/2;
	grid-column: 2/3;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

	${Input} {
		font-size: ${({ theme }) => theme.fontSize.xl};
		width: 100%;
		max-width: 350px;
		border: 2px solid ${({ theme }) => theme.colors.lightPurple};
	}
`

export const StatusInfo = styled.div`
	margin-right: 20px;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.l};

	p {
		margin: 5px;
	}
`

export const SearchWrapper = styled.div`
	position: relative;
`

export const SearchResults = styled.ul`
	position: absolute;
	top: 30px;
	left: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 10px;
	max-height: 500px;
	border-radius: 15px;
	background-color: ${({ theme }) => theme.colors.white};
	list-style: none;
	overflow-y: scroll;
	z-index: 1000;
	visibility: ${({ isVisable }) => (isVisable ? 'visable' : 'hidden')};
`

export const SearchResultsItems = styled.li`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.darkGrey};
	background-color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.lightPurple : theme.colors.white)};
	width: 100%;
	padding: 20px 5px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.lightPurple};
	}

	&:not(:last-child) {
		border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
	}
`

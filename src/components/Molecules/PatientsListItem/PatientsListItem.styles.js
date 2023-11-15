import styled from 'styled-components'

export const Wrapper = styled.li`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;

	&:not(:last-child)::after {
		content: '';
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 1px;
		background-color: lightgrey;
	}
`

export const StyledAverage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px;
	width: 35px;
	height: 35px;
	font-weight: bold;
	border-radius: 50px;
	font-size: ${({ theme }) => theme.fontSize.s};
	color: ${({ theme }) => theme.colors.white};
	background: ${({ theme, value }) => {
		if (value > 4) return theme.colors.success
		if (value > 2) return theme.colors.warning
		if (value > 0) return theme.colors.error
		return theme.colors.grey
	}};
`

export const StyledInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 25px 10px;

	p {
		margin: 0;
		color: ${({ theme }) => theme.colors.darkGrey};
	}

	p:first-child {
		display: flex;
		align-items: center;
		font-weight: bold;
		font-size: ${({ theme }) => theme.fontSize.l};
		cursor: pointer;
		&:hover {
			text-decoration: underline;
		}
	}

	p:last-child {
		font-size: ${({ theme }) => theme.fontSize.m};
		color: ${({ theme }) => theme.colors.grey};
	}
`
export const StyledBtnsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 25px 10px;
`

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
	width: 35px;
	height: 35px;
	border-radius: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${({ theme }) => theme.fontSize.s};
	color: ${({ theme }) => theme.colors.white};
	font-weight: bold;
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
	align-items: center;
	padding: 25px 20px;

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

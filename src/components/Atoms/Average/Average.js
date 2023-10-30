import styled from 'styled-components'

export const Average = styled.div`
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

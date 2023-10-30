import styled from 'styled-components'
import { ViewWrapper } from '../../Molecules/ViewWrapper/ViewWrapper'

export const AsideSectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 50px;
	justify-content: flex-start;
	grid-row: 1/3;
	grid-column: 3/3;
	border-left: 1px solid ${({ theme }) => theme.colors.grey};
	overflow-y: scroll;
`

export const AsideSectionHeader = styled.h2`
	margin-right: auto;
	color: ${({ theme }) => theme.colors.darkGrey};
`

export const IndicatorsWrapper = styled(ViewWrapper)`
	margin: 30px 0;
	width: 100%;
	max-width: unset;
	border-radius: 12px;
	color: ${({ theme }) => theme.colors.darkGrey};

	p {
		line-height: 1.4;
	}
`

export const TitleWrapper = styled.div`
	h3 {
		margin: 0;
		font-size: ${({ theme }) => theme.fontSize.xl};
	}

	p {
		margin: 0;
		font-size: ${({ theme }) => theme.fontSize.m};
	}
`
export const ContentWrapper = styled.div`
	display: flex;

	img {
		margin-left: 35px;
		max-width: 200px;
		object-fit: cover;
		border-radius: 8px;
	}
`

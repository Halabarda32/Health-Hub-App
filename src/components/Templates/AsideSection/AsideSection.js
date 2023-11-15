import { useState, useEffect } from 'react'
import { AsideSectionWrapper } from './AsideSection.styles'
import { AsideSectionHeader, IndicatorsWrapper, TitleWrapper, ContentWrapper } from './AsideSection.styles'
import { Button } from '../../Atoms/Button/Button'
import axios from 'axios'

const AsideSection = () => {
	const [articles, setArticles] = useState([])
	const [error, setError] = useState('')

	useEffect(() => {
		axios
			.post(
				'https://graphql.datocms.com/',
				{
					query: `
				{
					allArticles {
					  id
					  title
					  category
					  content
					  image {
						url
					  }
					}
				  }`,
				},
				{
					headers: {
						authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
					},
				}
			)
			.then(({ data: { data } }) => {
				setArticles(data.allArticles)
			})
			.catch(() => {
				setError("Sorry, we couldn't load informations for you.")
			})
	}, [])

	return (
		<AsideSectionWrapper>
			<AsideSectionHeader>Intranet Articles and more...</AsideSectionHeader>
			{articles.length > 0 ? (
				articles.map(({ id, title, category, content, image = null }) => (
					<IndicatorsWrapper key={id}>
						<TitleWrapper>
							<h3>{title}</h3>
							<p>{category}</p>
						</TitleWrapper>
						<ContentWrapper>
							<p>{content}</p>
							{image ? <img src={image.url} alt="article" /> : null}
						</ContentWrapper>
						<Button isBig>Read more</Button>
					</IndicatorsWrapper>
				))
			) : (
				<AsideSectionHeader>{error ? error : 'Loading...'}</AsideSectionHeader>
			)}
		</AsideSectionWrapper>
	)
}

export default AsideSection

import { useState } from 'react'
import Note from '../../Molecules/Note/Note'
import { NotesWrapper, WidgetHandler, Wrapper } from './NotesWidget.styled'
import { useGetNotesQuery } from '../../../store'

const NotesWidget = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { data, isLoading } = useGetNotesQuery()

	const handleToggleWidget = () => setIsOpen(prevState => !prevState)

	return (
		<Wrapper isOpen={isOpen}>
			<WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
			{isLoading ? (
				<h3>Loading...</h3>
			) : (
				<NotesWrapper>
					{data.notes.length ? (
						data.notes.map(({ title, content, id }) => <Note id={id} key={id} title={title} content={content} />)
					) : (
						<p>Create your first note</p>
					)}
				</NotesWrapper>
			)}
		</Wrapper>
	)
}

export default NotesWidget

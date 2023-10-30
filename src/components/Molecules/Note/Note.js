import React from 'react'
import { Title } from '../../Atoms/Title/Title'
import { useRemoveNoteMutation } from '../../../store'
import { NoteWrapper, StyledDeleteButton } from './Note.styled'

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
	const [removeNote] = useRemoveNoteMutation()

	const handleRemoveNote = () => {
		(removeNote({ id: id }))
	}

	return (
		<NoteWrapper>
			<Title>{title}</Title>
			<p>{content}</p>
			<StyledDeleteButton onClick={handleRemoveNote} />
		</NoteWrapper>
	)
}

export default Note

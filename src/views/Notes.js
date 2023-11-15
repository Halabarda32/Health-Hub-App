import { Wrapper, FormWrapper, NotesWrapper, StyledFormField } from './Notes.styled'
import Note from '../components/Molecules/Note/Note'
import { Button } from '../components/Atoms/Button/Button'
import { useAddNoteMutation, useGetNotesQuery } from '../store'
import { useForm } from 'react-hook-form'
import { useError } from '../hooks/useErrors'

const Notes = () => {
	const { register, handleSubmit, reset } = useForm()
	const { dispatchError } = useError()
	const { data, isLoading } = useGetNotesQuery()
	const [addNote] = useAddNoteMutation()

	const handleAddNote = ({ title, content }) => {
		if (!title || !content) {
			dispatchError('Title and content are required!')
		} else {
			addNote({ title, content })
			reset()
		}
	}

	return (
		<Wrapper>
			<FormWrapper onSubmit={handleSubmit(handleAddNote)}>
				<StyledFormField {...register('title')} label="Title" name="title" id="title" />
				<StyledFormField {...register('content')} isTextarea label="Content" name="content" id="content" />
				<Button type="submit">Add</Button>
			</FormWrapper>
			{isLoading ? (
				<h2>Loading...</h2>
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

export default Notes

import { Title } from '../../Atoms/Title/Title'
import { Wrapper } from './ErrorMessage.styled'

const defaultErrorMessage = 'Something went wrong. Please try again, or contact our support.'

const ErrorMessage = ({ message = defaultErrorMessage }) => {
	return (
		<Wrapper>
			<Title>Oops!</Title>
			<p>{message}</p>
		</Wrapper>
	)
}

export default ErrorMessage

import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import FormField from '../components/Molecules/FormField/FormField'
import { Button } from '../components/Atoms/Button/Button'
import AuthDetails from '../helpers/AuthDetails'
import { useError } from '../hooks/useErrors'
import { useAuth } from '../store/AuthProvider'

const SignIn = () => {
	// const { signInHandler } = useAuth()
	const [email, setEmial] = useState('')
	const [password, setPassword] = useState('')
	// const { dispatchError } = useError()
	const navigate = useNavigate()

	const signInHandler = e => {
		e.preventDefault()
		signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				navigate('dashboard')
			})
			.catch(error => {
				console.log(error)
				// dispatchError('Invalid email or password')
			})
	}

	return (
		<form
			onSubmit={signInHandler}
			style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}>
			<FormField label="login" name="login" id="login" onChange={e => setEmial(e.target.value)} />
			<FormField
				label="password"
				name="password"
				id="password"
				type="password"
				onChange={e => setPassword(e.target.value)}
			/>
			<Button type="submit">Sign in</Button>
			<AuthDetails></AuthDetails>
		</form>
	)
}

export default SignIn

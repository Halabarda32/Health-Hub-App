import { useState } from 'react'
import FormField from '../components/Molecules/FormField/FormField'
import { Button } from '../components/Atoms/Button/Button'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const auth = getAuth()
	const navigate = useNavigate()

	const signInHandler = async e => {
		try {
			e.preventDefault()
			signInWithEmailAndPassword(auth, email, password)
			navigate('dashboard')
		} catch (e) {
			console.log(e)
		}
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
			<FormField label="login" name="login" id="login" value={email} onChange={e => setEmail(e.target.value)} />
			<FormField
				label="password"
				name="password"
				id="password"
				type="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<Button type="submit">Sign in</Button>
		</form>
	)
}

export default SignIn

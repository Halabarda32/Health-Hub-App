import React, { useContext, useState } from 'react'
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
// import { useError } from '../hooks/useErrors'

const AuthContext = React.createContext({})

export const AuthProvider = ({ children }) => {
	const [user, setUserData] = useState(null)
	const [email, setEmial] = useState('')
	const [password, setPassword] = useState('')
	// const { dispatchError } = useError()
	// const navigate = useNavigate()

	onAuthStateChanged(auth, user => {
		if (user) {
			setUserData(user)
		} else {
			setUserData(null)
		}
	})

	const signInHandler = async e => {
		try {
			e.preventDefault()
			signInWithEmailAndPassword(auth, email, password)
		} catch (e) {
			console.log(e)
		}
	}

	const SignOutHandler = async () => {
		try {
			await signOut(auth)
		} catch (e) {
			console.log(e)
		}
	}

	return <AuthContext.Provider value={{ user, signInHandler, SignOutHandler }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
	const auth = useContext(AuthContext)

	if (!auth) {
		throw Error('useAuth needs to be used inside AuthContext Provider')
	}

	return auth
}

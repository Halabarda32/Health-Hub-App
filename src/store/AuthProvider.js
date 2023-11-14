import React, { createContext, useState, useEffect } from 'react'
import { onAuthStateChanged, signOut, getAuth } from 'firebase/auth'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
	const auth = getAuth()
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		let unsubscribe
		unsubscribe = onAuthStateChanged(auth, currentUser => {
			setLoading(false)
			if (currentUser) setUser(currentUser)
			else {
				setUser(null)
			}
		})
		return () => {
			if (unsubscribe) unsubscribe()
		}
	}, [])

	const SignOutHandler = async () => {
		try {
			await signOut(auth)
			setUser(null)
		} catch (e) {
			console.error(e)
		}
	}

	const values = {
		user,
		setUser,
	}

	return <AuthContext.Provider value={{ ...values, SignOutHandler }}>{!loading && children}</AuthContext.Provider>
}

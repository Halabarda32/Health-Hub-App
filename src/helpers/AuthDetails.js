import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

const AuthDetails = () => {
	const [authUser, SetAuthUser] = useState(null)

	useEffect(() => {
		const listen = onAuthStateChanged(auth, user => {
			if (user) {
				SetAuthUser(user)
			} else {
				SetAuthUser(null)
			}
		})

		return () => {
			listen()
		}
	}, [])
}

export default AuthDetails

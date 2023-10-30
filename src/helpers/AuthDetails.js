import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

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

	// const userSignOut = () => {
	// 	signOut(auth)
	// 		.then(() => {
	// 			console.log('sign out successful')
	// 		})
	// 		.catch(error => {
	// 			console.log(error)
	// 		})
	// }
}

export default AuthDetails

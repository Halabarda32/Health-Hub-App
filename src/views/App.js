import { useEffect, useState } from 'react'
import { useError } from '../hooks/useErrors'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import RootLayout from './Root'
import AddPatient from './AddPatinet'
import ErrorPage from './Error'
import Dashboard from './Dashboard'
import Notes from './Notes'
import SignIn from './SignIn'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import ErrorMessage from '../components/Molecules/ErrorMessage/ErrorMessage'

const AuthRouter = createBrowserRouter([
	{
		path: '',
		element: <SignIn />,
		errorElement: <ErrorPage />,
		children: [
			{ path: 'auth', element: <SignIn /> },
			{ path: '/', element: <SignIn /> },
		],
	},
])

const router = createBrowserRouter([
	{
		path: '',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'dashboard',
				element: <Dashboard />,
				children: [{ path: ':id?', element: <Dashboard /> }],
			},
			{ path: 'addPatient', element: <AddPatient /> },
			{ path: 'dashboard', element: <Dashboard /> },
			{ path: 'notes', element: <Notes /> },
			{ path: 'notes/note', element: <Notes /> },
			{ path: 'auth', element: <SignIn /> },
			{ path: '/', element: <Navigate to="dashboard" /> },
		],
	},
])

function App() {
	const [authUser, SetAuthUser] = useState(null)
	const { error } = useError()

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

	const LogUser = authUser
	return (
		<>
			{error ? <ErrorMessage message={error} /> : null}
			<RouterProvider router={LogUser ? router : AuthRouter} />
		</>
	)
}

export default App

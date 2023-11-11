// import { useEffect, useState, useContext } from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import SignIn from './SignIn'
import Dashboard from './Dashboard'
import AddPatient from './AddPatinet'
import Notes from './Notes'
import RootLayout from './RootLayout'
import { ProtectedRoute } from '../helpers/ProtectedRoute'
import { useError } from '../hooks/useErrors'
import ErrorMessage from '../components/Molecules/ErrorMessage/ErrorMessage'

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<SignIn />} />
			<Route element={<RootLayout />}>
				<Route path="dashboard" element={<ProtectedRoute />}>
					<Route path=":id?" element={<Dashboard />} />
				</Route>
				<Route path="addPatient" element={<ProtectedRoute />}>
					<Route index element={<AddPatient />} />
				</Route>
				<Route path="notes" element={<ProtectedRoute />}>
					<Route index element={<Notes />} />
				</Route>
			</Route>
		</>
	)
)

function App() {
	const { error } = useError()

	return (
		<>
			{error ? <ErrorMessage message={error} /> : null}
            {console.log(error)}
			<RouterProvider router={router} />
		</>
	)
}

export default App

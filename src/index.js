import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './views/App'
import { worker } from './mocks/browser'
import AppProviders from './store/AppProviders'
import { AuthProvider } from './store/AuthProvider'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import SignIn from './views/SignIn'
import Dashboard from './views/Dashboard'
import AddPatient from './views/AddPatinet'
import Notes from './views/Notes'
import { ProtectedRoute } from './helpers/ProtectedRoute'
import RootLayout from './views/RootLayout'

worker.start()

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<SignIn />}>
				<Route path="auth" element={<SignIn />} />
			</Route>
			<Route path="/" element={<RootLayout />}>
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

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<AppProviders>
			<RouterProvider router={router} />
			{/* <App /> */}
		</AppProviders>
	</React.StrictMode>
)

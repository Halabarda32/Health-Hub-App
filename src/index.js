import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { worker } from './mocks/browser'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase'
import AppProviders from './store/AppProviders'
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Navigate,
	Routes,
} from 'react-router-dom'
import SignIn from './views/SignIn'
import Dashboard from './views/Dashboard'
import AddPatient from './views/AddPatinet'
import Notes from './views/Notes'
import RootLayout from './views/RootLayout'
import { ProtectedRoute } from './helpers/ProtectedRoute'
import { AuthProvider } from './store/AuthProvider'

initializeApp(firebaseConfig)
worker.start()

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

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<AuthProvider>
			<AppProviders>
				<RouterProvider router={router} />
			</AppProviders>
		</AuthProvider>
	</React.StrictMode>
)

// import { useEffect, useState, useContext } from 'react'
// import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom'
// import SignIn from './SignIn'
// import Dashboard from './Dashboard'
// import AddPatient from './AddPatinet'
// import Notes from './Notes'
// import RootLayout from './RootLayout'
// import { ProtectedRoute } from '../helpers/ProtectedRoute'
// import { AuthProvider } from '../store/AuthProvider'
// import { AuthContext } from '../store/AuthProvider'

// const { user } = useContext(AuthContext)

// console.log(user)

// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		<>
// 			{!user ? (
// 				<>
// 					<Route path="/" element={<SignIn />} />
// 					<Route path="auth" element={<SignIn />} />
// 				</>
// 			) : (
// 				<>
// 					<Route path="/" element={<RootLayout />}>
// 						<Route path="dashboard" element={<ProtectedRoute />}>
// 							<Route path=":id?" element={<Dashboard />} />
// 						</Route>
// 						<Route path="addPatient" element={<ProtectedRoute />}>
// 							<Route index element={<AddPatient />} />
// 						</Route>
// 						<Route path="notes" element={<ProtectedRoute />}>
// 							<Route index element={<Notes />} />
// 						</Route>
// 					</Route>
// 				</>
// 			)}
// 		</>
// 	)
// )

// function App() {
// 	return <RouterProvider router={router} />
// }

// export default App

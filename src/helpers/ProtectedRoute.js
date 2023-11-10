import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../store/AuthProvider'

export const ProtectedRoute = () => {
	const { user } = useContext(AuthContext)
	console.log(user)
	if (!user) {
		return <Navigate to="/" replace />
	} else {
		return <Outlet />
	}
}

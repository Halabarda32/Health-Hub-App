import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { useAuth } from '../store/AuthProvider';

export const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/auth" replace />
  return <Outlet />;
};
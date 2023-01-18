
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  if (!currentUser) {
console.log( currentUser )

    return <Navigate to='/login' />;
  }
  return children;
};

export default ProtectedRoute;
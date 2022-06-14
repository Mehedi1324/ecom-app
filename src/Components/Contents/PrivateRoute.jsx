import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ user, children }) => {
  const { email } = useAuth();
  if (!user.email) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;

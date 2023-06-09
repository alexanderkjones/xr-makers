// import React from "react"
// import { Route, Navigate } from "react-router-dom"
// import { useAuth } from "../contexts/AuthContext"

// export default function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth()

//   return (
//     <Route
//       {...rest}
//       render={props => {
//         return currentUser ? <Component {...props} /> : <Navigate to="/" />
//       }}
//     ></Route>
//   )
// }


import React from 'react';
import {ReactNode} from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }: {children:ReactNode}) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;
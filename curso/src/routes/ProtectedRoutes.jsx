import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ({isLoggin,redirectTo,children}) => {
  if (!isLoggin){
    return <Navigate to={redirectTo} replace />
  }

  return children ? children : <Outlet/>
}

export default ProtectedRoutes
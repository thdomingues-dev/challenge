// Packages
import { useContext, ReactElement } from 'react'

// Context
import AuthContext from '../contexts/auth'

// Routes
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes = (): ReactElement => {
  const { logged } = useContext(AuthContext)

  return logged ? <AppRoutes /> : <AuthRoutes />
}

export default Routes

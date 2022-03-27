// Packages
import { ReactElement } from 'react'

// Context
import { AuthProvider } from './contexts/auth'

// Routes
import Routes from './routes'

// Styles
import './index.css'

const App = (): ReactElement => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
)

export default App

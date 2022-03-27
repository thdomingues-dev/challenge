// Packages
import { ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from '../pages'

const AuthRoutes = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
)

export default AuthRoutes

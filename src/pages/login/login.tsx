// Packages
import { ReactElement, useState, useContext, FormEvent } from 'react'

// Context
import AuthContext from '../../contexts/auth'

// Styles
import './styles.css'

const Login = (): ReactElement => {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    signIn(email, password)
  }

  return (
    <div id="login-page">
      <main className="login-page-content">
        <div className="page-title">
          <span>ioasys</span>
          <span>Books</span>
        </div>
        <form className="page-inputs" onSubmit={handleLogin}>
          <div className="input-email">
            <label>Email</label>
            <input
              type="email"
              autoComplete="off"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
              maxLength={40}
            />
          </div>

          <div className="input-password">
            <label>Senha</label>
            <input
              type="password"
              autoComplete="off"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
              maxLength={40}
            />
            <button type="submit">Entrar</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Login

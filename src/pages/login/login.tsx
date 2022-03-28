// Packages
import { ReactElement, useState, useContext, FormEvent } from 'react'

// Context
import AuthContext from '../../contexts/auth'

// Assets
import Vector from '../../assets/vector.svg'

// Styles
import './styles.css'

const Login = (): ReactElement => {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isWrongCredential, setIsWrongCredential] = useState(false)

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()

    const response = await signIn(email, password)

    if (
      response?.message &&
      response.message.includes('Usuário ou senha inválida') &&
      Number(response.status) === 401
    ) {
      setIsWrongCredential(true)
    } else {
      setIsWrongCredential(false)
    }
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
        {isWrongCredential && (
          <div className="page-wrong-credentials">
            <img src={Vector} alt="Vector" />
            <span>Email e/ou senha incorretos.</span>
          </div>
        )}
      </main>
    </div>
  )
}

export default Login

// Packages
import { ReactElement } from 'react'

// Styles
import './styles.css'

const Login = (): ReactElement => (
  <div id="home-page">
    <main className="page-content">
      <div className="page-title">
        <span>ioasys</span>
        <span>Books</span>
      </div>
      <div className="page-inputs">
        <div className="input-email">
          <label>Email</label>
          <input type="email" maxLength={40} />
        </div>

        <div className="input-password">
          <label>Senha</label>
          <input type="password" maxLength={40} />
          <button type="button">Entrar</button>
        </div>
      </div>
    </main>
  </div>
)

export default Login

// Packages
import { ReactElement, useContext } from 'react'

// Contexts
import AuthContext from '../../contexts/auth'

// Icons
import { FiLogOut as FiLogOutIcon } from 'react-icons/fi'

// Styles
import './styles.css'

interface HeaderProps {
  label: string
  description: string
  message: string
  userName: string
}

const Header = (props: HeaderProps): ReactElement => {
  const { label, description, message, userName } = props
  const { signOut } = useContext(AuthContext)

  const handleSignOut = () => signOut()

  return (
    <div className="page-header">
      <div className="left-side-header">
        <strong>{label}</strong>
        <span>{description}</span>
      </div>

      <div className="right-side-header">
        <span>
          {message.concat(', ')}
          <strong>{userName.concat('!')}</strong>
        </span>
        <div className="icon-header" onClick={handleSignOut}>
          <FiLogOutIcon fontSize={16} />
        </div>
      </div>
    </div>
  )
}

export default Header

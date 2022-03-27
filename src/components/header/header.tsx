// Packages
import { ReactElement } from 'react'

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
        <div className="icon-header">
          <FiLogOutIcon fontSize={16} />
        </div>
      </div>
    </div>
  )
}

export default Header

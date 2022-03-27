// Packages
import { ReactElement } from 'react'

// Components
import { Header } from '../../components'

// Styles
import './styles.css'

const Home = (): ReactElement => (
  <div id="home-page">
    <Header label="ioasys" description="Books" message="Bem vindo" userName="Thales" />
  </div>
)

export default Home

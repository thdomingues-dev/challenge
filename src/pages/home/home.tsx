// Packages
import { ReactElement, useState } from 'react'

// Components
import { Header, Pagination } from '../../components'

// Pages
import { Detail } from '../../pages'

// Image
import Book from '../../assets/book.svg'

// Styles
import './styles.css'

const Home = (): ReactElement => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

  return (
    <div id="home-page">
      <Header label="ioasys" description="Books" message="Bem vindo" userName="Thales" />
      <div className="page-grid">
        <div className="book-item" onClick={() => setIsDialogOpen(true)}>
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>

        <div className="book-item">
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>
        <div className="book-item">
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>
        <div className="book-item">
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>
        <div className="book-item">
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>
        <div className="book-item">
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>
        <div className="book-item">
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>
        <div className="book-item">
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>
        <div className="book-item">
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>
        <div className="book-item">
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>
        <div className="book-item">
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>
        <div className="book-item">
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>
        <div className="book-item">
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>
        <div className="book-item">
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>
        <div className="book-item">
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>
        <div className="book-item">
          <img src={Book} alt="book" />
          <div className="book-content">
            <div className="book-content-top">
              <strong>Crossing the Chasm</strong>
              <p>Geoffrey A. Moore</p>
            </div>

            <div className="book-content-bottom">
              <p>150 páginas</p>
              <p>Editora Loyola</p>
              <p>Publicado em 2020</p>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
      {isDialogOpen && (
        <Detail
          onClick={() => {
            setIsDialogOpen(!isDialogOpen)
          }}
        />
      )}
    </div>
  )
}

export default Home

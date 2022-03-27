// Packages
import { ReactElement } from 'react'

// Image
import Book from '../../assets/book.svg'

// Icons
import { FiX as FiXIcon } from 'react-icons/fi'

// Styles
import './styles.css'

interface DetailProps {
  onClick: (arg: any) => void
}

const Detail = ({ onClick }: DetailProps): ReactElement => (
  <div className="page-overlay">
    <div className="detail-page">
      <div className="detail-page-content">
        <img src={Book} alt="book" />

        <div className="content">
          <p>Change By Design Second line exampl...</p>
          <span>Tim Brown, Julie Zhuo, Fried Maximiilian</span>

          <main>
            <p>INFORMACÕES</p>
            <div className="content-information">
              <p>Páginas</p>
              <span>500 páginas</span>
            </div>
            <div className="content-information">
              <p>Editora</p>
              <span>Editora Loyola</span>
            </div>
            <div className="content-information">
              <p>Publicacão</p>
              <span>2022</span>
            </div>
            <div className="content-information">
              <p>Idioma</p>
              <span>Ingles</span>
            </div>
            <div className="content-information">
              <p>Título Org</p>
              <span>asdsadsd</span>
            </div>
            <div className="content-information">
              <p>ISS</p>
              <span>0909323</span>
            </div>
            <div className="content-information">
              <p>ISS</p>
              <span>0909-sadasd-323</span>
            </div>
          </main>

          <div className="content-description">
            <p>Resenha da editora</p>
            <span>
              The subject of “design thinking” is the rage at business schools, throughout corporations, and
              increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its
              celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong
              at every level of business.
            </span>
          </div>
        </div>
      </div>
    </div>
    <button type="button" onClick={onClick}>
      <FiXIcon />
    </button>
  </div>
)

export default Detail

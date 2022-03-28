// Packages
import { ReactElement } from 'react'

// Icons
import { FiX as FiXIcon } from 'react-icons/fi'

// Styles
import './styles.css'

// Api
import { useGetBookByIdQuery } from '../../services/books-api'

// Image
import DefaultBook from '../../assets/default-book.svg'

interface DetailProps {
  bookId: string
  onClick: () => void
}

const Detail = ({ onClick, bookId: id }: DetailProps): ReactElement | null => {
  const { data: book, isFetching: loading } = useGetBookByIdQuery({ id })

  return !loading && book ? (
    <div className="page-overlay">
      <div className="detail-page">
        <div className="detail-page-content">
          <img src={book?.imageUrl || DefaultBook} alt="book" />

          <div className="content">
            <p>{book?.title}</p>
            <span>{book?.authors[0]}</span>

            <main>
              <p>INFORMACÕES</p>
              <div className="content-information">
                <p>Páginas</p>
                <span>{book?.pageCount}</span>
              </div>
              <div className="content-information">
                <p>Editora</p>
                <span>{book?.publisher}</span>
              </div>
              <div className="content-information">
                <p>Publicação</p>
                <span>{book?.published}</span>
              </div>
              <div className="content-information">
                <p>Idioma</p>
                <span>{book?.language}</span>
              </div>
              <div className="content-information">
                <p>Título Original</p>
                <span>{book?.title}</span>
              </div>
              <div className="content-information">
                <p>ISBN-10</p>
                <span>{book?.isbn10}</span>
              </div>
              <div className="content-information">
                <p>ISBN-13</p>
                <span>{book?.isbn13}</span>
              </div>
            </main>

            <div className="content-description">
              <p>Resenha da editora</p>
              <span>{book?.description}</span>
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={onClick}>
        <FiXIcon />
      </button>
    </div>
  ) : null
}

export default Detail

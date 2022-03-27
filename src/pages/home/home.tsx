// Packages
import { ReactElement, useState } from 'react'

// Components
import { Header, Pagination } from '../../components'

// Pages
import { Detail } from '../../pages'

// Assets
import DefaultBook from '../../assets/default-book.svg'

// Styles
import './styles.css'

// Api
import { useGetBooksQuery } from '../../services/books-api'

const Home = (): ReactElement => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [page, setPage] = useState(1)
  const [selectedBook, setSelectedBook] = useState('')
  const { data, isFetching: loading, isError: error } = useGetBooksQuery({ page, amount: 12 })

  const books = data?.data || []
  const totalPages = Math.floor(data?.totalPages || 0)

  const onNextPage = () => setPage(page + 1)
  const onPreviousPage = () => setPage(page - 1)

  const handleClick = (bookId: string) => {
    setSelectedBook(bookId)
    setIsDialogOpen(true)
  }

  return (
    <div id="home-page">
      <Header label="ioasys" description="Books" message="Bem vindo" userName="Thales" />
      <div className="page-grid">
        {!loading && books ? (
          books.map((book, index) => (
            <div className="book-item" key={index} onClick={() => handleClick(book.id)}>
              <img src={book.imageUrl || DefaultBook} alt={book.title} />
              <div className="book-content">
                <div className="book-content-top">
                  <strong>{book.title}</strong>
                  <p>{book.authors[0]}</p>
                </div>

                <div className="book-content-bottom">
                  <p>{`${book?.pageCount} Páginas`}</p>
                  <p>{book.publisher}</p>
                  <p>{book.published}</p>
                </div>
              </div>
            </div>
          ))
        ) : error ? (
          <span>Error when searching for books...</span>
        ) : (
          <span>Loading books...</span>
        )}
      </div>
      <Pagination current={page} total={totalPages} onNextPage={onNextPage} onPreviousPage={onPreviousPage} />
      {isDialogOpen && (
        <Detail
          bookId={selectedBook}
          onClick={() => {
            setIsDialogOpen(!isDialogOpen)
          }}
        />
      )}
    </div>
  )
}

export default Home

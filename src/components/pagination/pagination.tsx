// Packages
import { ReactElement, useEffect, useState } from 'react'

// Icons
import { FiChevronLeft as FiChevronLeftIcon, FiChevronRight as FiChevronRightIcon } from 'react-icons/fi'

// Styles
import './styles.css'

interface Size {
  width: number | undefined
  height: number | undefined
}

const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

interface PaginationProps {
  current: number
  total: number
  onNextPage: () => void
  onPreviousPage: () => void
}

const Pagination = (props: PaginationProps): ReactElement => {
  const windowSize = useWindowSize()
  const { current = 1, total = 1, onNextPage, onPreviousPage } = props

  const isSmallScren = windowSize?.width && windowSize.width < 576

  return !isSmallScren ? (
    <div className="page-pagination">
      <p>
        Página <strong>{current}</strong> de <strong>{total}</strong>
      </p>
      <div className="icon-previous-page" onClick={onPreviousPage}>
        <FiChevronLeftIcon />
      </div>
      <div className="icon-next-page" onClick={onNextPage}>
        <FiChevronRightIcon />
      </div>
    </div>
  ) : (
    <div className="page-pagination">
      <div className="icon-previous-page" onClick={onPreviousPage}>
        <FiChevronLeftIcon />
      </div>
      <p>
        Página <strong>{current}</strong> de <strong>{total}</strong>
      </p>
      <div className="icon-next-page" onClick={onNextPage}>
        <FiChevronRightIcon />
      </div>
    </div>
  )
}

export default Pagination

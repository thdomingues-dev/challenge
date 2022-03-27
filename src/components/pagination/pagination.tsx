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

const Pagination = (): ReactElement => {
  const windowSize = useWindowSize()

  const isSmallScren = windowSize?.width && windowSize.width < 576

  return !isSmallScren ? (
    <div className="page-pagination">
      <p>
        Página <strong>1</strong> de <strong>100</strong>
      </p>
      <div className="icon-previous-page">
        <FiChevronLeftIcon />
      </div>
      <div className="icon-next-page">
        <FiChevronRightIcon />
      </div>
    </div>
  ) : (
    <div className="page-pagination">
      <div className="icon-previous-page">
        <FiChevronLeftIcon />
      </div>
      <p>
        Página <strong>1</strong> de <strong>100</strong>
      </p>
      <div className="icon-next-page">
        <FiChevronRightIcon />
      </div>
    </div>
  )
}

export default Pagination

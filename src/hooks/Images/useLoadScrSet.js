import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const useLoadScrSet = (src, type, sizes) => {
  const [set, setSet] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchImage = async (filePath, size = '') => {
      setIsLoading(true)

      try {
        const { default: image } = await import(
          `${process.env.REACT_APP_ASSETS}/${filePath}`
        )

        if (size) {
          size = ` ${size}w`
        }

        const set = `${image}${size}`

        setSet((srcset) => [...srcset, set])
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    if (!sizes?.length) {
      fetchImage(`${src}.${type}`)
    } else {
      for (const size of sizes) {
        fetchImage(`${src}-${size}w.${type}`, size)
      }
    }

    return () => {
      setSet('')
      setError('')
      setIsLoading(false)
    }
  }, [src])

  return { srcset: set, error, isLoading }
}

useLoadScrSet.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string,
  sizes: PropTypes.array,
}

useLoadScrSet.defaultProps = {
  type: 'png',
  sizes: [],
}

export default useLoadScrSet

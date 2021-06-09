import { useState, useEffect, useRef } from 'react'

const useLoadImage = (src = '', type = 'png') => {
  const cache = useRef({})
  const [source, setSource] = useState(src, type)

  const loadFromCache = () => {
    setSource(cache.current[src])
  }

  const loadFromResource = () => {
    const filePath = `${src}.${type}`

    import(`${process.env.REACT_APP_ASSETS}/${filePath}`)
      .then(({ default: image }) => {
        setSource(image)
        cache.current[src] = `${image}`
      })
      .catch((error) => {
        throw new Error(`An error occurred loading image: ${error}`)
      })
  }

  useEffect(() => {
    if (!src) return false

    if (cache.current[src]) {
      loadFromCache()
    } else {
      loadFromResource()
    }

    return () => {
      setSource('')
    }
  }, [src])

  return source
}

export default useLoadImage

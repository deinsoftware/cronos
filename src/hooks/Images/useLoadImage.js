import { useState, useEffect } from 'react'

const useLoadImage = (src = '', type = 'png') => {
  const [source, setSource] = useState(src, type)

  useEffect(() => {
    const filePath = `${src}.${type}`

    import(`${process.env.REACT_APP_ASSETS}/${filePath}`)
      .then(({ default: image }) => {
        setSource(image)
      })
      .catch((error) => {
        throw new Error(`An error occurred loading image: ${error}`)
      })

    return () => {
      setSource('')
    }
  }, [src, type])

  return source
}

export default useLoadImage

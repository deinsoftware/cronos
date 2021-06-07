import { useState, useEffect } from 'react'

const useLoadImage = (src, type) => {
  const [source, setSource] = useState('')

  useEffect(() => {
    const filePath = `${src}.${type}`

    import(`${process.env.REACT_APP_ASSETS}/${filePath}`).then((image) => {
      setSource(image.default)
    })
  }, [src])

  return source
}

export default useLoadImage

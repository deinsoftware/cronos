import { useState, useEffect } from 'react'

const useLoadScrSet = (src, type = 'png', sizes = []) => {
  const [sourceSet, setSourceSet] = useState([])

  useEffect(() => {
    for (const size of sizes) {
      const filePath = `${src}-${size}w.${type}`

      import(`${process.env.REACT_APP_ASSETS}/${filePath}`)
        .then((image) => {
          const set = `${image.default} ${size}w`

          setSourceSet((sourceSet) => [...sourceSet, set])
        })
        .catch((error) => {
          throw new Error(`An error occurred loading srcset: ${error}`)
        })
    }
  }, [src])

  return sourceSet.join(',')
}

export default useLoadScrSet

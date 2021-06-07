import { useState, useEffect } from 'react'

const useLoadScrSet = (src, type, sizes) => {
  const [sourceSet, setSourceSet] = useState([])

  useEffect(() => {
    for (const size of sizes) {
      const filePath = `${src}-${size}w.${type}`

      import(`${process.env.REACT_APP_ASSETS}/${filePath}`).then((image) => {
        const set = `${image.default} ${size}w`

        setSourceSet((sourceSet) => [...sourceSet, set])
      })
    }
  }, [src])

  return sourceSet.join(',')
}

export default useLoadScrSet

import useLoadScrSet from '../../../hooks/Images/useLoadScrSet'
import { IMAGE_TYPE } from '../../../data/images'

const Source = ({ src, type, sizes }) => {
  const { srcset, isLoading } = useLoadScrSet(src, type, sizes)

  return (
    <>
      {!isLoading && (
        <source
          srcSet={srcset.join(',')}
          type={`image/${IMAGE_TYPE[type] || type}`}
        />
      )}
    </>
  )
}

export default Source

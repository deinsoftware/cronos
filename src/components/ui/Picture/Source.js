import useLoadImage from '../../../hooks/Images/useLoadImage'
import useLoadScrSet from '../../../hooks/Images/useLoadScrSet'
import { IMAGE_TYPE } from '../../../data/images'

const Source = ({ src, type, sizes }) => {
  return (
    <>
      {!sizes?.length ? (
        <source
          src={useLoadImage(src, type)}
          type={`image/${IMAGE_TYPE[type] || type}`}
        />
      ) : (
        <source
          srcSet={useLoadScrSet(src, type, sizes)}
          type={`image/${IMAGE_TYPE[type] || type}`}
        />
      )}
    </>
  )
}

export default Source

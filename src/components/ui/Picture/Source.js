import useLoadImage from '../../../hooks/Images/useLoadImage'
import useLoadScrSet from '../../../hooks/Images/useLoadScrSet'
import { imageType } from '../../../data/images'

const Source = ({ src, type, sizes }) => {
  return (
    <>
      {!sizes?.length ? (
        <source
          src={useLoadImage(src, type)}
          type={`image/${imageType[type] || type}`}
        />
      ) : (
        <source
          srcSet={useLoadScrSet(src, type, sizes)}
          type={`image/${imageType[type] || type}`}
        />
      )}
    </>
  )
}

export default Source

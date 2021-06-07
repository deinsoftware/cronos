import PropTypes from 'prop-types'

import useLoadImage from '../../../hooks/Images/useLoadImage'
import Source from './Source'

const Picture = ({ src, types, sizes, alt, className }) => {
  return (
    <picture>
      {types.map((type) => (
        <Source key={type} sizes={sizes} src={src} type={type} />
      ))}

      <img
        alt={alt}
        className={className}
        src={useLoadImage(
          `${src}${sizes?.length ? `-${sizes[0]}w` : ''}`,
          'png'
        )}
      />
    </picture>
  )
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  types: PropTypes.array,
  sizes: PropTypes.array,
  alt: PropTypes.string,
  className: PropTypes.string,
}

Picture.defaultProps = {
  types: ['png'],
  sizes: [],
  alt: '',
  className: '',
}

export default Picture

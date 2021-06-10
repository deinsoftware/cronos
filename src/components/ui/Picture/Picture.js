import PropTypes from 'prop-types'

import useLoadImage from '../../../hooks/Images/useLoadImage'
import Source from './Source'

const Picture = ({ src, types, sizes, alt, className }) => {
  let defaultSize = ''

  if (sizes?.length) {
    const size = sizes[0]

    defaultSize = `-${size}w`
  }

  return (
    <picture>
      {types.map((type) => (
        <Source key={type} sizes={sizes} src={src} type={type} />
      ))}

      <img
        alt={alt}
        className={className}
        src={useLoadImage(`${src}${defaultSize}`, 'png')}
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

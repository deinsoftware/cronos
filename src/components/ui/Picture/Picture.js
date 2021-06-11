import PropTypes from 'prop-types'

import Source from './Source'
import useLoadScrSet from '../../../hooks/Images/useLoadScrSet'

const Picture = ({ src, types, sizes, alt, className }) => {
  let defaultSize = ''

  if (sizes?.length) {
    const size = sizes[0]

    defaultSize = `-${size}w`
  }

  const { srcset, isLoading } = useLoadScrSet(`${src}${defaultSize}`, 'png')

  return (
    <>
      {!isLoading && (
        <picture>
          {types.map((type) => (
            <Source key={type} sizes={sizes} src={src} type={type} />
          ))}

          <img alt={alt} className={className} src={srcset} />
        </picture>
      )}
    </>
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

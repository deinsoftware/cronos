import PropTypes from 'prop-types'

import './Breadcrumbs.css'

const Breadcrumbs = ({ history, back, text }) => {
  const handleBack = (e) => {
    history.goBack()
  }

  return (
    <>
      <div className={!back ? 'title' : 'subtitle'}>
        {back && (
          <h1>
            <a onClick={handleBack}>&lt;</a>
          </h1>
        )}
        <h1>{text}</h1>
      </div>
    </>
  )
}

Breadcrumbs.propTypes = {
  history: PropTypes.object.isRequired,
  back: PropTypes.bool,
  text: PropTypes.string.isRequired,
}

Breadcrumbs.defaultProps = {
  back: false,
}

export default Breadcrumbs

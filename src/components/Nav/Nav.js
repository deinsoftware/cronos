import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Nav.css'

const Nav = ({ back, text }) => {
  return (
    <nav data-testid="navbar">
      <div className={!back ? 'title' : 'subtitle'}>
        {back && (
          <h1>
            <Link data-testid="home-link" to="/">
              &lt;
            </Link>
          </h1>
        )}
        <h1>{text}</h1>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  back: PropTypes.bool,
  text: PropTypes.string.isRequired,
}

Nav.defaultProps = {
  back: true,
}

export default Nav

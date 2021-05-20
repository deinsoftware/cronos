import { Link } from 'react-router-dom'
import error404 from '../../assets/error/404.png'

import './NotFound.css'

const NotFound = () => {
  return (
    <>
      <div className="not-found" data-testid="not-found">
        <div>
          <h1>OPS! PAGE NOT FOUND</h1>
        </div>

        <img src={error404} alt="Page Not Found" />

        <Link data-testid="home-link" to="/">
          Go Home!
        </Link>
      </div>
    </>
  )
}

export default NotFound

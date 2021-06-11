import { Link } from 'react-router-dom'

import Picture from '../../ui/Picture/Picture'

import './NotFound.css'

const NotFound = () => {
  return (
    <>
      <div className="not-found" data-testid="not-found">
        <div>
          <h1>OOPSY!</h1>
        </div>
        <Picture
          alt="Page Not Found"
          sizes={[320, 480, 720]}
          src="error/404"
          types={['avif', 'webp', 'png']}
        />
        <Link data-testid="home-link" to="/">
          Go Home!
        </Link>
      </div>
    </>
  )
}

export default NotFound

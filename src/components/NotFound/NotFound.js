import { Link } from 'react-router-dom'

import small from '../../assets/error/404-320w.png'
import medium from '../../assets/error/404-480w.png'
import large from '../../assets/error/404-720w.png'

import './NotFound.css'

const NotFound = () => {
  return (
    <>
      <div className="not-found" data-testid="not-found">
        <div>
          <h1>OPS! PAGE NOT FOUND</h1>
        </div>

        <img
          srcSet={`
             ${small} 320w,
             ${medium} 480w,
             ${large} 720w`}
          src={small}
          alt="Page Not Found"
        ></img>

        <Link data-testid="home-link" to="/">
          Go Home!
        </Link>
      </div>
    </>
  )
}

export default NotFound

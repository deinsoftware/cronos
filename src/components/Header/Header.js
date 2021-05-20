import './Header.css'

import logoSvg from '../../assets/logo/logo.svg'
import logoPng from '../../assets/logo/logo.png'

const Header = () => {
  return (
    <header>
      <picture>
        <source type="image/svg+xml" srcSet={logoSvg} />
        <img src={logoPng} alt="logo" />
      </picture>
    </header>
  )
}

export default Header

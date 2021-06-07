import './Header.css'
import Picture from '../../ui/Picture/Picture'

const Header = () => {
  return (
    <header>
      <Picture
        alt="Cronos Logo"
        src="logo/logo"
        types={['svg', 'avif', 'webp', 'png']}
      />
    </header>
  )
}

export default Header

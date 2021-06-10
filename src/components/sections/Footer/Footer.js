import './Footer.css'

import { setTheme } from '../../../utils/theme'

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="#" onClick={() => setTheme('dark')}>
          Dark
        </a>{' '}
        -{' '}
        <a href="#" onClick={() => setTheme('light')}>
          Light
        </a>
      </div>

      <div>
        Created by <a href="https://github.com/equiman">equiman</a> - 2021 ©{' '}
        {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer

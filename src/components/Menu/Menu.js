import { Link } from 'react-router-dom'
import { menuOptions } from '../../data/menu'

import './Menu.css'

const Menu = () => {
  return (
    <>
      <div className="main-menu" data-testid="menu">
        {menuOptions.map((menu, index) => (
          <Link
            key={index}
            data-testid={`${menu.path}-link`}
            to={`/${menu.path}`}
          >
            {menu.text}
          </Link>
        ))}
      </div>
    </>
  )
}

export default Menu

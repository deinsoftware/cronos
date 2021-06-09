import { Link } from 'react-router-dom'

import { MENU_OPTIONS } from '../../../data/menu'

import './Menu.css'

const Menu = () => {
  return (
    <>
      <div className="main-menu" data-testid="menu">
        {MENU_OPTIONS.map((menu) => (
          <Link
            key={menu.path}
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

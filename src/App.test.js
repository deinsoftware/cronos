import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import { menuOptions } from './data/menu'

import App from './App'

describe('App.js', () => {
  const renderWithRouter = (component) => {
    const history = createMemoryHistory()
    return {
      ...render(<Router history={history}>{component}</Router>),
    }
  }

  it('should render the <Home/> page', () => {
    const { container, getByTestId } = renderWithRouter(<App />)
    const title = 'What would you like to practice?'
    expect(container.innerHTML).toMatch(title)

    const home = getByTestId('home')
    expect(container).toContainElement(home)
    const menu = getByTestId('menu')
    expect(home).toContainElement(menu)
  })

  for (const menu of menuOptions) {
    it(`should navigate to the <${menu.text.replace(/\s/g, '')}/> page`, () => {
      const { container, getByTestId } = renderWithRouter(<App />)
      const link = getByTestId(`${menu.path}-link`)
      fireEvent.click(link)

      const title = `${menu.text}`
      expect(container.innerHTML).toMatch(title)

      const homeLink = getByTestId('home-link')
      expect(container).toContainElement(homeLink)
      fireEvent.click(homeLink)
    })
  }
})

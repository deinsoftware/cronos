import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { render, fireEvent, act } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import { MENU_OPTIONS } from '../../../data/menu'
import Landing from './Landing'

describe('Landing.js', () => {
  describe('<Landing/> Component', () => {
    it('should render without crashing', async () => {
      await act(async () => {
        const div = document.createElement('div')

        ReactDOM.render(<Landing />, div)
        ReactDOM.unmountComponentAtNode(div)
      })
    })
  })

  describe('Router', () => {
    const renderWithRouter = (component) => {
      const history = createMemoryHistory()

      return {
        ...render(<Router history={history}>{component}</Router>),
      }
    }

    it('should render the <Home/> page', async () => {
      await act(async () => {
        const { container, getByTestId } = renderWithRouter(<Landing />)
        const title = 'What would you like to practice?'

        expect(container.innerHTML).toMatch(title)

        const home = getByTestId('home')

        expect(container).toContainElement(home)
        const menu = getByTestId('menu')

        expect(home).toContainElement(menu)
      })
    })

    for (const menu of MENU_OPTIONS) {
      it(`should navigate to the <${menu.text.replace(
        /\s/g,
        ''
      )}/> page`, async () => {
        const { container, getByTestId } = renderWithRouter(<Landing />)
        const link = getByTestId(`${menu.path}-link`)

        await act(async () => {
          fireEvent.click(link)
        })

        const title = `${menu.text}`

        expect(container.innerHTML).toMatch(title)

        const homeLink = getByTestId('home-link')

        expect(container).toContainElement(homeLink)
        fireEvent.click(homeLink)
      })
    }
  })
})

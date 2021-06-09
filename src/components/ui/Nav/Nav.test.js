import { Router } from 'react-router-dom'
import { render, fireEvent, act } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import Nav from './Nav'

describe('Nav.js', () => {
  const renderWithRouter = (component) => {
    const history = createMemoryHistory()

    return {
      ...render(<Router history={history}>{component}</Router>),
    }
  }
  const title = 'What would you like to practice?'

  describe('<Nav/> Component', () => {
    it('should render the <Nav/> component', async () => {
      await act(async () => {
        const { container } = renderWithRouter(<Nav text={title} />)

        expect(container.innerHTML).toMatch(title)
      })
    })

    it('should render the <Nav/> component without back link', async () => {
      const { container } = renderWithRouter(<Nav back={false} text={title} />)

      const backSymbol = '⮜'

      expect(container.innerHTML).not.toMatch(backSymbol)
    })

    it('should render the <Nav/> component with back link', async () => {
      await act(async () => {
        const { container, getByTestId } = renderWithRouter(
          <Nav back={true} text={title} />
        )

        const homeLink = getByTestId('home-link')

        expect(container).toContainElement(homeLink)
      })
    })

    it('should navigate to <Home/> page', async () => {
      const { container, getByTestId } = renderWithRouter(<Nav text={title} />)

      const homeLink = getByTestId('home-link')

      expect(container).toContainElement(homeLink)
      fireEvent.click(homeLink)
    })
  })
})

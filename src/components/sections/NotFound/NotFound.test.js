import { Router } from 'react-router-dom'
import { render, fireEvent, act } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import NotFound from './NotFound'

describe('NotFound.js', () => {
  const renderWithRouter = (component) => {
    const history = createMemoryHistory()

    return {
      ...render(<Router history={history}>{component}</Router>),
    }
  }

  describe('<NotFound/> component', () => {
    it('should render the <NotFound/> page', async () => {
      await act(async () => {
        const { container, getByTestId } = renderWithRouter(<NotFound />)
        const title = 'OPS! PAGE NOT FOUND'

        expect(container.innerHTML).toMatch(title)

        const notFound = getByTestId('not-found')

        expect(container).toContainElement(notFound)
      })
    })

    it('should navigate to <Home/> page', async () => {
      await act(async () => {
        const { container, getByTestId } = renderWithRouter(<NotFound />)

        const homeLink = getByTestId('home-link')

        expect(container).toContainElement(homeLink)
        fireEvent.click(homeLink)
      })
    })
  })
})

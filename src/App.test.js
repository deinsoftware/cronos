import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'

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

  it('should navigate to the <NumberToWords/> page', () => {
    const { container, getByTestId } = renderWithRouter(<App />)
    const link = getByTestId('n2w-link')
    fireEvent.click(link)

    const title = 'Number to Words'
    expect(container.innerHTML).toMatch(title)

    const homeLink = getByTestId('home-link')
    expect(container).toContainElement(homeLink)
    fireEvent.click(homeLink)
  })

  it('should navigate to the <YearToWords/> page', () => {
    const { container, getByTestId } = renderWithRouter(<App />)
    const link = getByTestId('y2w-link')
    fireEvent.click(link)

    const title = 'Year to Words'
    expect(container.innerHTML).toMatch(title)

    const homeLink = getByTestId('home-link')
    expect(container).toContainElement(homeLink)
    fireEvent.click(homeLink)
  })

  it('should navigate to the <DateToWords/> page', () => {
    const { container, getByTestId } = renderWithRouter(<App />)
    const link = getByTestId('d2w-link')
    fireEvent.click(link)

    const title = 'Date to Words'
    expect(container.innerHTML).toMatch(title)

    const homeLink = getByTestId('home-link')
    expect(container).toContainElement(homeLink)
    fireEvent.click(homeLink)
  })
})

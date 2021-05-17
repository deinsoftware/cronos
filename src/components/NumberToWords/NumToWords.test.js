import { render, screen } from '@testing-library/react'
import NumToWords from './NumToWords'

test('render num to words', () => {
  render(<NumToWords />)
  const titleElement = screen.getByText(/Number to Words/i)
  expect(titleElement).toBeInTheDocument()
})

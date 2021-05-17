import { render, screen } from '@testing-library/react'
import NumToWords from './NumberToWords'

test('render num to words', () => {
  render(<NumToWords />)
  const titleElement = screen.getByText(/Number to Words/i)
  expect(titleElement).toBeInTheDocument()
})

import { render, screen } from '@testing-library/react'
import App from './App'

test('renders App title', () => {
  render(<App />)
  const title = screen.getByText(/brownie/i)
  expect(title).toBeInTheDocument()
})

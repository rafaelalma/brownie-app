import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import App from './App'

test('renders App title', () => {
  render(<App />, { wrapper: BrowserRouter })
  const home = screen.getByText(/inicio/i)
  expect(home).toBeInTheDocument()
})

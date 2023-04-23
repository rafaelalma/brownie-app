import { HashRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import App from './App.tsx'
import { AuthenticationProvider } from './context/AuthenticationContext.tsx'

function Wrapper() {
  return (
    <AuthenticationProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AuthenticationProvider>
  )
}

test('renders App title', () => {
  render(<App />, { wrapper: Wrapper })
  const title = screen.getByRole('heading', { name: /módulo cachorros/i })
  expect(title).toBeInTheDocument()
})

import { HashRouter } from 'react-router-dom'

import LoginView from './login/LoginView'
import { useUser } from './context/AuthenticationContext'
import AppRoutes from './AppRoutes'
import AppBottomNavigation from './AppBottomNavigation'

export default function App() {
  const user = useUser()

  return (
    <>
      {user ? (
        <HashRouter>
          <AppRoutes />
          <AppBottomNavigation />
        </HashRouter>
      ) : (
        <LoginView />
      )}
    </>
  )
}

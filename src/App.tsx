import { HashRouter } from 'react-router-dom'

import LoginView from './login/LoginView'
import { useUser } from './context/AuthenticationContext'
import AppRoutes from './AppRoutes'
import AppTopBar from './AppTopBar'
import AppBottomNavigation from './AppBottomNavigation'

export default function App() {
  const user = useUser()

  return (
    <>
      {user ? (
        <HashRouter>
          <AppTopBar />
          <AppRoutes />
          <AppBottomNavigation />
        </HashRouter>
      ) : (
        <LoginView />
      )}
    </>
  )
}

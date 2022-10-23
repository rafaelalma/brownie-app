import { HashRouter } from 'react-router-dom'

import LoginView from './login/LoginView'
import { useUser } from './context/AuthenticationContext'
import AppRoutes from './AppRoutes'
import AppTopBar from './AppTopBar'
import AppBottomNavigation from './AppBottomNavigation'
import userHelper from './helpers/userHelper'

export default function App() {
  const user = useUser()
  const isVolunteer = userHelper.isVolunteer(user)

  return (
    <>
      {isVolunteer ? (
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

import { HashRouter } from 'react-router-dom'

import LoginView from './login/LoginView.tsx'
import { useUser } from './context/AuthenticationContext.tsx'
import AppRoutes from './AppRoutes.tsx'
import AppTopBar from './AppTopBar.tsx'
import AppBottomNavigation from './AppBottomNavigation.tsx'
import userHelper from './helpers/userHelper.ts'

export default function App() {
  const user = useUser()
  const isVolunteer = userHelper.isVolunteer(user)

  return (
    /* eslint-disable react/jsx-no-useless-fragment */
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

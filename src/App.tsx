import LoginView from './login/LoginView'
import AppRoutes from './AppRoutes'
import AppBottomNavigation from './AppBottomNavigation'

export default function App() {
  return (
    <>
      {true ? (
        <LoginView />
      ) : (
        <>
          <AppRoutes />
          <AppBottomNavigation />
        </>
      )}
    </>
  )
}

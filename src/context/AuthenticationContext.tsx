import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { User } from '../types/userType'
import dogService from '../services/dogService'
import treatmentService from '../services/treatmentService'
import { LOCAL_STORAGE_USER_KEY } from '../constants'

const AuthenticationContext = createContext<
  | {
      user: User | null
      setUser: React.Dispatch<React.SetStateAction<User | null>>
    }
  | undefined
>(undefined)

function AuthenticationProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(LOCAL_STORAGE_USER_KEY)
    if (loggedUserJSON) {
      const loggedUser: User = JSON.parse(loggedUserJSON)
      setUser(loggedUser)
      dogService.setToken(loggedUser.token)
      treatmentService.setToken(loggedUser.token)
    }
  }, [])

  const value = { user, setUser }
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  )
}

const useUser = () => {
  const context = useContext(AuthenticationContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a AuthenticationProvider')
  }

  return context.user
}

const useSetUser = () => {
  const context = useContext(AuthenticationContext)
  if (context === undefined) {
    throw new Error('useSetUser must be used within a AuthenticationProvider')
  }

  return context.setUser
}

export { AuthenticationProvider, useUser, useSetUser }

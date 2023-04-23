import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { User } from '../types/userType.ts'
import dogService from '../services/dogService.ts'
import treatmentService from '../services/treatmentService.ts'
import { LOCAL_STORAGE_USER_KEY } from '../constants.ts'

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

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  )
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

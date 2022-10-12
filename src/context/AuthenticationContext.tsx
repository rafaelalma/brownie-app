import { createContext, ReactNode, useContext, useState } from 'react'

import { User } from '../types/userType'

const AuthenticationContext = createContext<
  | {
      user: User | null
      setUser: React.Dispatch<React.SetStateAction<User | null>>
    }
  | undefined
>(undefined)

function AuthenticationProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

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

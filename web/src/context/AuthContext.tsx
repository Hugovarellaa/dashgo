import { createContext, ReactNode, useContext } from 'react'

interface SignInCredential {
  email: string
  password: string
}

interface AuthContextData {
  isAuthenticated: boolean
  signIn: ({ email, password }: SignInCredential) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false
  async function signIn({ email, password }: SignInCredential) {
    console.log({ email, password })
  }
  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

import Router from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/axios'

type User = {
  email: string
  permissions: string[]
  roles: string[]
}

interface SignInCredential {
  email: string
  password: string
}

interface AuthContextData {
  isAuthenticated: boolean
  signIn: ({ email, password }: SignInCredential) => Promise<void>
  user: User
  singOut: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  function singOut() {
    destroyCookie(undefined, 'nextauth.token')
    destroyCookie(undefined, 'nextauth.refreshToken')
    Router.push('/')
  }

  async function signIn({ email, password }: SignInCredential) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      })

      const { permissions, roles, token, refreshToken } = response.data

      setCookie({}, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      })

      setCookie({}, 'nextauth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      })

      setUser({
        email,
        permissions,
        roles,
      })

      api.defaults.headers.Authorization = `Bearer ${token}`

      Router.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()
    if (token) {
      api
        .get('/me')
        .then((response) => {
          const { email, permissions, roles } = response.data
          setUser({ email, permissions, roles })
        })
        .catch(() => {
          singOut()
        })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user, singOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

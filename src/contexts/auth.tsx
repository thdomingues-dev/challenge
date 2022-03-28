// Packages
import { createContext, useState, useEffect, ReactNode } from 'react'

// Api
import { api, signIn as signInService, refreshToken } from '../services'

interface AuthContextProps {
  logged: boolean
  user: object
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

interface UserProps {
  id: string | undefined
  name: string | undefined
  birthdate: string | undefined
  gender: string | undefined
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>({
    id: undefined,
    name: undefined,
    birthdate: undefined,
    gender: undefined,
  })
  const [logged, setLogged] = useState(false)

  const loadStoragedData = async () => {
    const storagedUser = localStorage.getItem('@ioasys:user')
    const storagedToken = localStorage.getItem('@ioasys:token')
    const storagedRefresh = localStorage.getItem('@ioasys:refresh-token')

    if (storagedUser && storagedToken && storagedRefresh) {
      setLogged(true)
      setUser(JSON.parse(storagedUser))

      const tokens: any = await refreshToken(JSON.parse(storagedRefresh))

      api.defaults.headers.common['Authorization'] = 'Bearer '.concat(tokens.authorization)

      localStorage.setItem('@ioasys:token', JSON.stringify(tokens.authorization))
      localStorage.setItem('@ioasys:refresh-token', JSON.stringify(tokens['refresh-token']))
    } else {
      setLogged(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    const { data: user, headers = {} } = await signInService(email, password)

    if (user && headers?.authorization && headers['refresh-token']) {
      localStorage.setItem('@ioasys:user', JSON.stringify(user))
      localStorage.setItem('@ioasys:token', JSON.stringify(headers.authorization))
      localStorage.setItem('@ioasys:refresh-token', JSON.stringify(headers['refresh-token']))

      api.defaults.headers.common['Authorization'] = `Bearer ${headers.authorization}`

      setUser(user)
      setLogged(true)
    }
  }

  const signOut = () => {
    localStorage.clear()
    setLogged(false)
  }

  useEffect(() => {
    loadStoragedData()
  }, [])

  return <AuthContext.Provider value={{ user, logged, signIn, signOut }}>{children}</AuthContext.Provider>
}

export default AuthContext

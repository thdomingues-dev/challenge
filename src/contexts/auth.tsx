// Packages
import { AxiosResponseHeaders } from 'axios'
import { createContext, useState, useEffect, ReactNode } from 'react'

// Api
import { api, signIn as signInService, refreshToken } from '../services'

interface UserProps {
  id: string | undefined
  name: string | undefined
  birthdate: string | undefined
  gender: string | undefined
  email: string | undefined
}
interface AuthContextProps {
  logged: boolean
  user: UserProps
  signIn: (email: string, password: string) => Promise<AxiosResponseHeaders>
  signOut: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>({
    id: undefined,
    name: undefined,
    birthdate: undefined,
    gender: undefined,
    email: undefined,
  })
  const [logged, setLogged] = useState(false)

  const loadStoragedData = async () => {
    const storagedUser = localStorage.getItem('@ioasys:user')
    const storagedToken = localStorage.getItem('@ioasys:token')
    const storagedRefresh = localStorage.getItem('@ioasys:refresh-token')

    if (
      storagedUser &&
      storagedToken &&
      storagedRefresh &&
      storagedToken !== 'null' &&
      storagedToken !== 'undefined' &&
      storagedRefresh !== 'null' &&
      storagedRefresh !== 'undefined'
    ) {
      setLogged(true)
      setUser(JSON.parse(storagedUser))

      const tokens: any = await refreshToken(storagedRefresh || '')

      api.defaults.headers.common['Authorization'] = 'Bearer '.concat(tokens.authorization)

      localStorage.setItem('@ioasys:token', tokens.authorization)
      localStorage.setItem('@ioasys:refresh-token', tokens['refresh-token'])
    } else {
      localStorage.clear()
      setLogged(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    const response: any = await signInService(email, password)

    if (response?.data && response?.headers?.authorization && response?.headers['refresh-token']) {
      localStorage.setItem('@ioasys:user', JSON.stringify(response?.data))
      localStorage.setItem('@ioasys:token', response?.headers.authorization)
      localStorage.setItem('@ioasys:refresh-token', response?.headers['refresh-token'])

      api.defaults.headers.common['Authorization'] = `Bearer ${response?.headers.authorization}`

      setUser(response?.data)
      setLogged(true)
    }

    return response
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

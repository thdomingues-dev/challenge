// Services
import { api } from '../services'

export const signIn = async (email: string, password: string) => {
  try {
    const { data, headers } = await api.post('/auth/sign-in', { email, password })

    return { data, headers }
  } catch (error: any) {
    console.error(error)
    return { status: 'error', description: error }
  }
}

export const refreshToken = async (refreshToken: string) => {
  try {
    const { headers } = await api.post('auth/refresh-token', { refreshToken })

    return headers
  } catch (error: any) {
    console.error(error)
    return { status: 'error', description: error }
  }
}

export default signIn

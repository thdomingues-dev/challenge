// Services
import { api } from '../services'

const signIn = async (email: string, password: string) => {
  try {
    const { data, headers } = await api.post('/auth/sign-in', { email, password })

    return { data, headers }
  } catch (error: any) {
    console.error(error)
    return { status: 'error', description: error }
  }
}

export default signIn

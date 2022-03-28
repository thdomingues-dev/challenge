// Services
import { api } from '../services'

export const signIn = async (email: string, password: string) =>
  api
    .post('/auth/sign-in', { email, password })
    .then(response => ({
      data: response.data,
      headers: response.headers,
    }))
    .catch(error => ({ status: error.response.status, message: error.response.data.errors.message }))

export const refreshToken = async (refreshToken: string) => {
  try {
    const { headers } = await api.post('auth/refresh-token', { refreshToken })

    return headers
  } catch (error) {
    console.error(error)
    return { status: 'error', description: error }
  }
}

export default signIn

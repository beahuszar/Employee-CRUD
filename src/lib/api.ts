import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (!window.location.pathname.startsWith('/login')) {
        window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`
      }
    }

    return Promise.reject(error)
  }
)

// TODO: check if there is a better pattern for auth management (hook?)
export async function checkAuth(): Promise<boolean> {
  try {
    await api.get('/auth/me')
    return true
  } catch {
    return false
  }
}

export async function logout(): Promise<void> {
  try {
    await api.post('/auth/logout')
    window.location.href = '/login'
  } catch (error) {
    console.error('Logout error:', error)
    window.location.href = '/login'
  }
}

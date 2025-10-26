import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { api } from '../lib/api'

interface LoginCredentials {
  username: string
  password: string
}

interface LoginResponse {
  message?: string
}

interface ApiErrorResponse {
  error?: string
  message?: string
}

export function useLogin() {
  // TODO: password hashing?
  return useMutation<LoginResponse, Error, LoginCredentials>({
    mutationKey: ['login'],
    mutationFn: async (credentials: LoginCredentials) => {
      try {
        const response = await api.post<LoginResponse>('/auth/login', credentials)
        return response.data
      } catch (error) {
        if (error instanceof AxiosError && error.response?.data) {
          const apiError = error.response.data as ApiErrorResponse
          // todo: how to trigger 400 errors from backend?
          throw new Error(apiError.error || apiError.message || error.message)
        }
        throw error
      }
    }
  })
}

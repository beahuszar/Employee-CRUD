import type { EmployeeListParams, EmployeeListResponse } from '../types/employee'
import { api } from './api'

async function getAll(params?: EmployeeListParams): Promise<EmployeeListResponse> {
  const response = await api.get<EmployeeListResponse>('/employees', {
    params: {
      search: params?.search,
      orderBy: params?.orderBy,
      limit: params?.limit ?? 50,
      offset: params?.offset ?? 0
    }
  })

  return response.data
}

export const employeeApi = {
  getAll
}

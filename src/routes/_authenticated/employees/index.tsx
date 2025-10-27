import { createFileRoute } from '@tanstack/react-router'
import { EmployeeTable } from '../../../components/EmployeeTable'
import { employeeApi } from '../../../lib/employeeApi'

export const Route = createFileRoute('/_authenticated/employees/')({
  loader: async () => {
    const result = await employeeApi.getAll()
    return { employees: result.data, total: result.total }
  },
  component: EmployeeList
})

function EmployeeList() {
  const { employees, total } = Route.useLoaderData()

  return (
    <div>
      <div className='mb-6'>
        <h1 className='text-2xl font-bold'>Employees</h1>
        <p className='text-gray-600'>Total: {total}</p>
      </div>
      <EmployeeTable employees={employees} />
    </div>
  )
}

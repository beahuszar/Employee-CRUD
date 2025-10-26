import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/employees/')({
  // TODO: use loader to fetch before rendering
  //   loader: async () => {
  //     const employees = await employeeApi.getAll()
  //     return { employees }
  //   },
  component: EmployeeList
})

function EmployeeList() {
  return <div>Employee List</div>
}

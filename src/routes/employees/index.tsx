import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/employees/')({
  component: EmployeeList
})

function EmployeeList() {
  return <div>Employee List</div>
}

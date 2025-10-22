import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/employees/new')({
  component: CreateEmployee
})

function CreateEmployee() {
  return <div>Create New Employee</div>
}

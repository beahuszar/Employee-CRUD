// edit employee details
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/employees/$id/edit')({
  component: EditEmployee
})

function EditEmployee() {
  const { id } = Route.useParams()
  return <div>Edit Employee {id}</div>
}

//  View single employee
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/employees/$id/')({
  component: ViewEmployee
})

function ViewEmployee() {
  const { id } = Route.useParams()
  return <div>View Employee {id}</div>
}

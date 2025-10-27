import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import type { Employee } from '../types/employee'
import { Education, PaymentMethod, Sex } from '../types/employee'

const columnHelper = createColumnHelper<Employee>()

// todo: shouldn't this be the default value for enums?
const sexLabels: Record<Sex, string> = {
  [Sex.FEMALE]: 'Female',
  [Sex.MALE]: 'Male',
  [Sex.UNKNOWN]: 'Unknown'
}

const educationLabels: Record<Education, string> = {
  [Education.ELEMENTARY]: 'Elementary',
  [Education.VOCATIONAL_SCHOOL]: 'Vocational School',
  [Education.APPRENTICESHIP_SCHOOL]: 'Apprenticeship School',
  [Education.VOCATIONAL_SECONDARY_SCHOOL]: 'Vocational Secondary School',
  [Education.HIGH_SCHOOL]: 'High School',
  [Education.COLLEGE]: 'College',
  [Education.UNIVERSITY]: 'University',
  [Education.OTHER]: 'Other'
}

const paymentMethodLabels: Record<PaymentMethod, string> = {
  [PaymentMethod.TRANSFER]: 'Transfer',
  [PaymentMethod.CASH]: 'Cash',
  [PaymentMethod.DISPATCH]: 'Dispatch'
}

const columns = [
  columnHelper.accessor((row) => `${row.firstName ?? ''} ${row.lastName ?? ''}`.trim(), {
    id: 'name',
    header: 'Name',
    cell: (info) => info.getValue() || '-'
  }),
  columnHelper.accessor('email', {
    header: 'Email',
    cell: (info) => info.getValue() ?? '-'
  }),
  columnHelper.accessor('dateOfBirth', {
    header: 'Date of Birth',
    cell: (info) => {
      const date = info.getValue()
      // todo: date-fns for date management
      return date ? new Date(date).toLocaleDateString() : '-'
    }
  }),
  columnHelper.accessor('phone', {
    header: 'Phone',
    cell: (info) => info.getValue() ?? '-'
  }),
  columnHelper.accessor('sex', {
    header: 'Sex',
    cell: (info) => sexLabels[info.getValue()]
  }),
  columnHelper.accessor('education', {
    header: 'Education',
    cell: (info) => educationLabels[info.getValue()]
  }),
  columnHelper.accessor('paymentMethod', {
    header: 'Payment Method',
    cell: (info) => paymentMethodLabels[info.getValue()]
  }),
  columnHelper.accessor('salary', {
    header: 'Salary',
    cell: (info) => {
      const salary = info.getValue()
      return salary ? `${salary.toLocaleString()} HUF` : '-'
    }
  })
]

interface EmployeeTableProps {
  employees: Employee[]
}

// todo: make general table component?
export function EmployeeTable(props: EmployeeTableProps) {
  const table = useReactTable({
    data: props.employees,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full divide-y divide-gray-200 border border-gray-200'>
        <thead className='bg-gray-50'>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className='hover:bg-gray-50'>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

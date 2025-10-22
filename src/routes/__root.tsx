import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className='min-h-screen bg-gray-50'>
      <nav className='bg-white shadow-sm border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-8'>
              <Link
                to='/'
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 [&.active]:text-blue-600 [&.active]:border-b-2 [&.active]:border-blue-600'
              >
                Home
              </Link>
              <Link
                to='/employees'
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 [&.active]:text-blue-600 [&.active]:border-b-2 [&.active]:border-blue-600'
              >
                Employees
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </div>
  )
})

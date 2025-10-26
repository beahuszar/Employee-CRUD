import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { checkAuth } from '../lib/api'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ location }) => {
    const isAuthenticated = await checkAuth()

    if (!isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href
        }
      })
    }
  },
  component: () => <Outlet />
})

import { Dashboard } from '@/pages/Dashboard'
import { About } from '@/pages/About'
import { FAQ } from '@/pages/FAQ'
import { Profile} from '@/pages/Profile'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import Layout from '@/pages/Layout'
import { Review } from '@/pages/Review'
import { Feed } from '@/pages/Feed'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '/profile/:id',
        element: <Profile/>
      },
      {
        path: '/review',
        element: <Review />
      },
      {
        path: '/feed',
        element: <Feed />
      },
      {
        path: '/*',
        element: <Navigate replace to="/" />,
      },
    ],
  },
])

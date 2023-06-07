import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <div>404</div>,
        children: [],
    },
])

export default router

import Home from '../pages/Home'
import PageTwo from '../pages/PageTwo'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        name: Home,
    },
    {
        path: '/PageTwo',
        exact: true,
        component: PageTwo,
        name: PageTwo,
    },
]

export default routes

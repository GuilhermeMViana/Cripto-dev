import { createBrowserRouter } from "react-router-dom";

import { Home } from './pages/home'
import { Details } from './pages/details'
import { NotFound } from './pages/notfound'
import { Layout } from "./layout";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/> 
            },
            {
                path: '/details',
                element: <Details/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])

export { router };
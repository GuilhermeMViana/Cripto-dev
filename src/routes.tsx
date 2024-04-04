import { createBrowserRouter } from "react-router-dom";

import { Home } from './pages/home'
import { NotFound } from './pages/notfound'
import { Layout } from "./layout";
import { Details } from "./pages/details";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/> 
            },
            {
                path: '/details/:id',
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
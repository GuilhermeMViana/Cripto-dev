import GlobalStyle from "./styles/global-styles"

import { RouterProvider } from "react-router"

import { router } from "./routes"


function App() {
  return (
    <>
      <RouterProvider router={router}/>
      <GlobalStyle/>
    </>
  )
}

export default App

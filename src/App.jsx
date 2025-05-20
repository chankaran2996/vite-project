// import { useState } from 'react'

import { BrowserRouter , Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
// import Login from "./pages/Login"
// import Register from "./pages/register"
// import PageNotFound from "./pages/PageNotFound"




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Dashboard />
    <Login />
    <Register /> */}
       {/* <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1> */}
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard />} />

  </Routes>
  </BrowserRouter>

    </>
  )
}

export default App

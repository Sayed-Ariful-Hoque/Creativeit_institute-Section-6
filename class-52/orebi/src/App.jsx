
import React from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Components/RootLayout';
import Product from './Pages/Product';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
      >
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/product' element={<Product/>} />
         
      </Route>
    )
  );


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

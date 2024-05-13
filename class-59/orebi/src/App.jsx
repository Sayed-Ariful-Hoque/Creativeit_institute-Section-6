
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
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Contacts from './Pages/Contacts';

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
          <Route path='/sign/up' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/contacts' element={<Contacts/>} />
         
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

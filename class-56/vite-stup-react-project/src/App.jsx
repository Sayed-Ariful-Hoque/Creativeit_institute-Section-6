import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Component/RootLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
    >
      <Route index element={<Home/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />

  )
}

export default App
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'

import AuthProvider from './Provider/AuthProvider/AuthProvider'
import routes from './Routes/routes'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <AuthProvider>
    <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
   
  </React.StrictMode>,
)

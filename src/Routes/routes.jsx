import { createBrowserRouter } from "react-router-dom";
import Home from './../Pages/Home/Home';
import Room from './../Pages/Room/Room';
import MyBooking from './../Pages/MyBooking/MyBooking';
import MainLayout from "../Layout/MainLayout/MainLayout";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routes =createBrowserRouter([
    {
      path: "/",
     element:<MainLayout></MainLayout>,
     children: [
            {
              index:true ,
              element: <Home></Home>
            },
            {
              path:'room',
              element:<Room></Room>
            },
            {
              path: 'myBooking',
              element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
            },
           
           
     ]
    },
    {
      path:'/signUp',
      element:<SignUp></SignUp>
    },
    {
      path:'/login',
      element: <Login></Login>
    }
   
  ]);

export default routes;
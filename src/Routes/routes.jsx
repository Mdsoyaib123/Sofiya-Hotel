import { createBrowserRouter } from "react-router-dom";
import Home from './../Pages/Home/Home';
import Room from './../Pages/Room/Room';
import MyBooking from './../Pages/MyBooking/MyBooking';
import MainLayout from "../Layout/MainLayout/MainLayout";

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
              element: <MyBooking></MyBooking>
            }
     ]
    },
  ]);

export default routes;
import { createBrowserRouter } from "react-router-dom";
import Home from './../Pages/Home/Home';
import Room from './../Pages/Room/Room';
import MyBooking from './../Pages/MyBooking/MyBooking';
import MainLayout from "../Layout/MainLayout/MainLayout";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RoomDetelis from "../Pages/RoomDetelis/RoomDetelis";
import MyBookingUpdate from "../conponents/MyBookingUpdate/MyBookingUpdate";
import UpdateReview from "../conponents/UpdateReview/UpdateReview";

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
              element:<Room></Room>,
              loader: ()=>fetch('http://localhost:5000/api/v1/rooms')
            },
            {
              path:'roomDetelis/:id',
              element:<RoomDetelis></RoomDetelis>,
              loader: ({params})=> fetch(`http://localhost:5000/api/v1/rooms/${params.id}`)
            },
            {
              path: 'myBooking',
              element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>,
             
            },
            {
              path:'myBooking/:id',
              element:<MyBookingUpdate></MyBookingUpdate>,
             loader:({params})=>fetch(`http://localhost:5000/api/v1/update/${params.id}`)
            },
            {
              path: 'updateReview/:id',
              element:<UpdateReview></UpdateReview>,
              loader: ({params})=>fetch(`http://localhost:5000/api/v1/update/${params.id}`)
            }
           
           
     ]
    },
    {
      path:'/signUp',
      element:<SignUp></SignUp>
    },
    {
      path:'/login',
      element: <Login></Login>
    },
    
   
  ]);

export default routes;
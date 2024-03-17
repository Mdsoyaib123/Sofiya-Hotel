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
import Contact from "../conponents/Contact/Contact";
import Gallery from "../Pages/Gallery/Gallery";
import ErrorPage from "../conponents/ErrorPage/ErrorPage";

const routes =createBrowserRouter([
    {
      path: "/",
     element:<MainLayout></MainLayout>,
     errorElement:<ErrorPage></ErrorPage>,
     children: [
            {
              index:true ,
              element: <Home></Home>,
              loader: ()=>fetch('https://assainment-11-server.vercel.app/api/v1/rooms') 
            },
            {
              path:'room',
              element:<Room></Room>,
              loader: ()=>fetch('https://assainment-11-server.vercel.app/api/v1/rooms')
            },
            {
              path:'roomDetelis/:id',
              element:<RoomDetelis></RoomDetelis>,
              loader: ({params})=> fetch(`https://assainment-11-server.vercel.app/api/v1/rooms/${params.id}`)
            },
            {
              path: 'myBooking',
              element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>,
             
            },
            {
              path:'myBooking/:id',
              element:<MyBookingUpdate></MyBookingUpdate>,
             loader:({params})=>fetch(`https://assainment-11-server.vercel.app/api/v1/update/${params.id}`)
            },
            {
              path: 'updateReview/:id',
              element:<UpdateReview></UpdateReview>,
              loader: ({params})=>fetch(`https://assainment-11-server.vercel.app/api/v1/update/${params.id}`)
            },
            {
              path: 'contact',
              element: <Contact></Contact>
            },
            {
              path:'gallery',
              element:<Gallery></Gallery>,
              loader: ()=>fetch('https://assainment-11-server.vercel.app/api/v1/rooms')
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
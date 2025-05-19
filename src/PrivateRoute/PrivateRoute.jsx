/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({children}) => {
    const user= useSelector((state)=>state.auth.user)
   
     if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
     }
     return children ;

};

export default PrivateRoute;
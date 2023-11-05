/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <p className="text-center text-xl font-bold mt-10">loading....</p>
    }
     if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
     }
     return children ;

};

export default PrivateRoute;
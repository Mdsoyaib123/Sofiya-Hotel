import { useLoaderData } from "react-router-dom";
import MyBookingCard from "../../conponents/MyBookingCard/MyBookingCard";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import axios from "axios";


const MyBooking = () => {
  const {user} =useContext(AuthContext)

  const [myBooking,setMyBooking] = useState([])
  // console.log(myBooking);

  useEffect(()=>{
    // fetch(`http://localhost:5000/api/v1/myBooking?email=${user.email}`,{credentials:"include"})
  
    // .then(res=>res.json())
    // .then(data=>{
    //   setMyBooking(data)
    // })
    axios.get(`http://localhost:5000/api/v1/myBooking?email=${user.email}`,{withCredentials:true})
    .then(res=>{
      setMyBooking(res.data)
    })
  },[user?.email])
  

  const handleCancel=(_id)=>{
    const now = moment();
    var formattedNow = now.format("YYYY-MM-DD HH:mm:ss");
    const validDate = {formattedNow}
    fetch(`http://localhost:5000/api/v1/bookingData/${_id}`,{
        method: 'DELETE',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(validDate)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        const remaning = myBooking.filter(remaningData=> remaningData._id !== _id)
        setMyBooking(remaning)
    })
}
    return (
      <div className="mt-10 space-y-4 mb-10 w-[1200px] mx-auto  ">
          {
            myBooking.map(singleData =><MyBookingCard key={singleData._id} handleCancel={handleCancel} singleData={singleData}></MyBookingCard>)
            
          }
        
      </div>
    );
};

export default MyBooking;
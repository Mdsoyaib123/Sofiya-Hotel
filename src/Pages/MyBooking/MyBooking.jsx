
import MyBookingCard from "../../conponents/MyBookingCard/MyBookingCard";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";


const MyBooking = () => {
  const {user} =useContext(AuthContext)

  const [myBooking,setMyBooking] = useState([])
  // console.log(myBooking);

  useEffect(()=>{
    // fetch(`https://assainment-11-server.vercel.app/api/v1/myBooking?email=${user.email}`,{credentials:"include"})
  
    // .then(res=>res.json())
    // .then(data=>{
    //   setMyBooking(data)
    // })
    axios.get(`https://assainment-11-server.vercel.app/api/v1/myBooking?email=${user.email}`,{withCredentials:true})
    .then(res=>{
      setMyBooking(res.data)
    })
  },[user?.email])
  

  const handleCancel=(_id)=>{
    const now = moment();
    var formattedNow = now.format("YYYY-MM-DD HH:mm:ss");
    const validDate = {formattedNow}
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://assainment-11-server.vercel.app/api/v1/bookingData/${_id}`,{
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
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
      })


      
      }
    });





    // fetch(`https://assainment-11-server.vercel.app/api/v1/bookingData/${_id}`,{
    //     method: 'DELETE',
    //     headers:{
    //       'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(validDate)
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //     console.log(data);
    //     const remaning = myBooking.filter(remaningData=> remaningData._id !== _id)
    //     setMyBooking(remaning)
    // })
}
    return (
      <div className="pt-24 lg:pt-32 space-y-4 mb-10 lg:max-w-[1200px]  mx-auto  ">
        <Helmet>
          <title>MyBooking Page</title>
        </Helmet>
          
          {
            myBooking.map(singleData =><MyBookingCard key={singleData._id} handleCancel={handleCancel} singleData={singleData}></MyBookingCard>)
            
          }
          
        
      </div>
    );
};

export default MyBooking;
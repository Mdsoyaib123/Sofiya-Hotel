import MyBookingCard from "../../conponents/MyBookingCard/MyBookingCard";
import { useEffect, useState } from "react";
import moment from "moment";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const MyBooking = () => {
  const user = useSelector((state) => state.auth.user);
  const [myBooking, setMyBooking] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/v1/bookingData/my/${user?.email}`,
          {
            withCredentials: true,
          }
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setMyBooking(data?.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [user?.email]);

  const handleCancel = (_id) => {
    const now = moment();
    var formattedNow = now.format("YYYY-MM-DD HH:mm:ss");
    const validDate = { formattedNow };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/api/v1/bookingData/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(validDate),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaning = myBooking.filter(
              (remaningData) => remaningData._id !== _id
            );
            setMyBooking(remaning);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
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
  };
  return (
    <div className="pt-24 lg:pt-32 space-y-4 mb-10 lg:max-w-[1200px]  mx-auto  ">
      <Helmet>
        <title>MyBooking Page</title>
      </Helmet>

      {myBooking.map((singleData) => (
        <MyBookingCard
          key={singleData._id}
          handleCancel={handleCancel}
          singleData={singleData}
        ></MyBookingCard>
      ))}
    </div>
  );
};

export default MyBooking;

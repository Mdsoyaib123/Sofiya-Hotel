import { useLoaderData } from "react-router-dom";
import MyBookingCard from "../../conponents/MyBookingCard/MyBookingCard";


const MyBooking = () => {
  const data = useLoaderData()
  // console.log(data);
    return (
      <div className="mt-10 space-y-4 mb-10 w-[1200px] mx-auto  ">
          {
            data.map(singleData =><MyBookingCard key={singleData._id} singleData={singleData}></MyBookingCard>)
          }
      </div>
    );
};

export default MyBooking;
import { useLoaderData } from "react-router-dom";
import MyBookingCard from "../../conponents/MyBookingCard/MyBookingCard";


const MyBooking = () => {
  const data = useLoaderData()

    return (
      <div>
          {
            data.map(singleData =><MyBookingCard key={singleData._id} singleData={singleData}></MyBookingCard>)
          }
      </div>
    );
};

export default MyBooking;
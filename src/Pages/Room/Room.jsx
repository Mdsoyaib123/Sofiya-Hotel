import { useLoaderData } from "react-router-dom";
import FilterByPrice from "../../conponents/FilterByPrice/FilterByPrice";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useSelector } from "react-redux";

const Room = () => {
  const roomsData = useLoaderData();
  // const user = useSelector((state)=>state.user)

  const [data,setData] =useState(roomsData?.data)
    const [search , setSearch] = useState('')
  return (
    <div>
      <Helmet>
        <title> Rooms </title>
      </Helmet>
      <div className="text-center lg:max-w-[1200px] mx-auto pt-20 lg:pt-32">
        <h1 className="text-center text-black text-xl md:text-2xl lg:text-4xl  font-bold py-4 ">
          “Our Luxury Rooms & Suits”
        </h1>
        <p>
          Dedicated To Providing Our Guests With The Exceptional Services. Our
          Timeless Hotel Evokes A <br></br>Unique Sense Of Understand Elegence Of Modern
          Glamour That Can Only Be Found In Our <br></br> Guest Rooms. Our Roomes Offer
          All The Luxury And Comforts You would Expect -And You <br></br>would Only Dream
          Of
        </p>
      </div>
      <div className="pt-16">
        <FilterByPrice rooms={data} setData={setData} setSearch={setSearch} search={search}></FilterByPrice>
      </div>
    </div>
  );
};

export default Room;

/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import RoomCard from "../../conponents/RoomCard/RoomCard";

const Rooms = ({ RoomData }) => {
  return (
    <div className="pt-24 pb-5">
      <h1 className="text-center text-4xl font-bold">Our Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
        {RoomData.map((room, index) => (
          <div key={index} className="hover:scale-110 duration-300">
            <div className=" rounded-xl border ">
              <Link to={`/roomDetelis/${room._id}`}>
                <img
                  className="w-[400px] h-[250px] rounded-t-xl "
                  src={room.img}
                  alt=""
                />
                <div className="pl-4 text-xl text-black font-bold py-2">
                  <h2>{room.room_name}</h2>
                  <p>
                    {" "}
                    Price : <span className="text-blue-600">${room.price}</span>
                  </p>
                  {room.review.userName ? <p>Review : 1</p> : ""}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center  ">
        <Link to={"/room"}>
          <button className="btn my-4 btn-outline border-0  bg-blue-600 text-white ">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default Rooms;

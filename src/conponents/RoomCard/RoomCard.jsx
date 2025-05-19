/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const RoomCard = ({ roomData }) => {
  const { images, room_name, _id, price, review } = roomData;
  const img = images[0]

  return (
    <div className="hover:scale-90 duration-300">
      <div
        className="  rounded-xl border w-[390px] mx-auto"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
      >
        <Link to={`/roomDetelis/${_id}`}>
          <img className="w-[390px] h-[250px] mx-auto rounded-t-xl " src={img} alt="" />
          <div className="pl-4 text-xl  text-black font-bold py-2 ">
            <h2>{room_name}</h2>
            <p>
              {" "}
              Price : <span className="text-blue-600">${price}</span>
            </p>
            {/* {review.userName ? <p>Review : 1</p> : ""} */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;

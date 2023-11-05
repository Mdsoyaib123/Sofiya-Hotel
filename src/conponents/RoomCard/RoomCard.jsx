/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const RoomCard = ({roomData}) => {
    // console.log(roomData);
    const {img,room_name,_id} = roomData 
    // console.log(img,room_name);
    return (
        <div>
            <Link to={`/roomDetelis/${_id}`}>
            <img className="w-[400px] h-[250px] rounded-xl" src={img} alt="" />
            </Link>
        </div>
    );
};

export default RoomCard;

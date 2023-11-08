/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const RoomCard = ({roomData}) => {
    // console.log(roomData);
    const {img,room_name,_id,price,review} = roomData 
    // console.log(review);
    // console.log(img,room_name);
    return (
        <div className=" rounded-xl border ">
            <Link to={`/roomDetelis/${_id}`}>
            <img className="w-[400px] h-[250px] rounded-t-xl	" src={img} alt="" />
           <div className="pl-4 text-xl text-black font-bold py-2">
           <h2>{room_name}</h2>
            <p> Price : <span className="text-blue-600">${price}</span></p>
            {
                review ? <p>Review :{review.length}</p> :''
            }
           </div>
            </Link>
        </div>
    );
};

export default RoomCard;

/* eslint-disable react/prop-types */

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const MyBookingCard = ({singleData,handleCancel}) => {
    const {_id,date,userId,roomId} = singleData ;

    return (
        <div className="md:flex  gap-10 px-4 text-slate-800 items-center mb-10 lg:mb-0"  data-aos="fade-right">
         
            <div className="md:w-1/2 lg:w-1/3 mb-10 md:mb-0">
                <img className=" mx-auto rounded-xl h-[250px] w-full lg:w-[400px]" src={roomId?.images[0]}alt="" />
            </div>
            <div className="md:w-1/2 lg:w-1/2 ">
                <h2 className="pb-4 text-3xl font-bold ">{roomId?.room_name}</h2>
                <p> <span className="text-xl font-bold "> Booked Date</span>: {`${date?.startDate} to ${date?.endDate}`}</p>
                <p className="pb-4 mt-2">{roomId?.description}</p>
               
                <div className="flex flex-wrap gap-5">
                <button onClick={()=>handleCancel(_id)} className="btn px-6 btn-outline btn-accent" data-aos="zoom-in"data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">Cancel Booking</button>
               <Link to={`/myBooking/${_id}`}>
               <button  className="btn px-6 bg-blue-600 text-white " data-aos="zoom-in"data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">Update Date</button>
               </Link>
               <Link to={`/updateReview/${_id}`}>
               <button className="btn btn-accent " data-aos="zoom-in"data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">Add Review</button>
               </Link>
                </div>
            </div>
            
           
        </div>
    );
};

export default MyBookingCard;
/* eslint-disable react/prop-types */


// import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const MyBookingCard = ({singleData,handleCancel}) => {
    const {_id,date,img,room_name,description} = singleData ;
    // const handleReview=(name)=>{
    //     console.log(name);
    //     axios.post(`https://assainment-11-server.vercel.app/api/v1/rooms?name=${name}`,)
    // }

    return (
        <div className="flex gap-10 text-slate-800 items-center "  data-aos="fade-right">
         
            <div className="w-1/3 mb-10">
                <img className=" mx-auto rounded-xl h-[250px] w-[400px]" src={img}alt="" />
            </div>
            <div className="w-1/2 ">
                <h2 className="pb-4 text-3xl font-bold ">{room_name}</h2>
                <p> <span className="text-xl font-bold ">Room Booked Date</span>: {date}</p>
                <p className="pb-4 mt-2">{description}</p>
               
                <div className="flex gap-5">
                <button onClick={()=>handleCancel(_id)} className="btn px-10 btn-outline btn-accent" data-aos="zoom-in"data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">Cancel Booking</button>
               <Link to={`/myBooking/${_id}`}>
               <button  className="btn px-10 bg-blue-600 text-white " data-aos="zoom-in"data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">Update Date</button>
               </Link>
               <Link to={`/updateReview/${_id}`}>
               <button className="btn btn-accent " data-aos="zoom-in"data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">Add Review</button>
               </Link>
                </div>
            </div>
            
            <div>

            <dialog id="my_modal_1" className="modal">
              
            </dialog>
            </div>
           
        </div>
    );
};

export default MyBookingCard;
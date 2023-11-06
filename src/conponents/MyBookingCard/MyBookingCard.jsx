/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const MyBookingCard = ({singleData}) => {
    const {_id,date,img,room_name,description} = singleData ;
    
    

    // const handleUpdateDate =(_id)=>{
       
    // }

    return (
        <div className="flex gap-10 text-slate-800 items-center ">
         
            <div className="w-1/3 mb-10">
                <img className=" mx-auto rounded-xl h-[250px] w-[400px]" src={img}alt="" />
            </div>
            <div className="w-1/2 ">
                <h2 className="pb-4 text-3xl font-bold ">{room_name}</h2>
                <p> <span className="text-xl font-bold ">Room Booked Date</span>: {date}</p>
                <p className="pb-4 mt-2">{description}</p>
               
                <div className="flex gap-5">
                <button className="btn px-10 btn-outline btn-accent">Cancel</button>
               <Link to={`/myBooking/${_id}`}>
               <button  className="btn px-10 bg-blue-600 text-white ">Update Date</button>
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
/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import {  useState } from "react";
import { parseISO, format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';

import axios from "axios";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const RoomDetelis = () => {
  const rooms = useLoaderData();
  const data = rooms?.data;
  const { review } = data;
  const user = useSelector((state) => state.auth.user);
   const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleRangeChange = (item) => {
    let { startDate, endDate } = item.selection;
    if (startDate < today) startDate = today;
    if (endDate < startDate) endDate = startDate;
    setRange([
      {
        startDate,
        endDate,
        key: 'selection',
      },
    ]);
  };

function formatDateDMY(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
 const formattedStart = formatDateDMY(range[0].startDate);
  const formattedEnd = formatDateDMY(range[0].endDate);


  const {
    _id,
    room_name,
    price,
    images,
    description,
    special_offer,
    room_size,
    availability,
    available_seat,
  } = data;

  const SeatData = available_seat - 1;
  const Seat = { SeatData };

  const myBookingData = {
    userId: user.id,
    roomId: _id,
    price:price,
    date: {
      startDate:formattedStart,
      endDate:formattedEnd
    },
  };

  const img1 = images[0];
  const img2 = images[1];
  const img3 = images[2];

  const handleBooking = () => {
    document.getElementById("my_modal_1").showModal();
  };
  const handleConfirm = async () => {
    const result1 = await axios
      .post("http://localhost:5000/api/v1/bookingData/create-booking", myBookingData)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Your room booking successful!",
          icon: "success",
        });
      });

    const result2 = await axios
      .patch(`http://localhost:5000/api/v1/rooms/update-seats/${_id}`, Seat)
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
  };
  return (
    <div className="pt-20 md:pt-32 lg:max-w-[1200px] mx-auto">
      <Helmet>
        <title>Rooms-RoomDetails Page</title>
      </Helmet>
      <div className="w-full  flex gap-5  h-[80vh]">
        <div id="imgs" className=" w-full">
          <img className="w-full h-[83vh] rounded-lg" src={img1} alt="" />
        </div>
        <div className=" w-1/3 hidden lg:flex flex-col">
          <img className="w-full h-1/2 mb-4 rounded-lg" src={img2} alt="" />
          <img className="w-full h-1/2 rounded-lg" src={img3} alt="" />
        </div>
      </div>

      <div className="text-black font-semibold w-full  lg:flex gap-10 my-16">
        <div className="lg:w-1/2 pb-5 lg:pb-0 md:border-l-2 border-blue-600 pl-4">
          <h1 id="room_name" className="text-2xl font-bold">
            {room_name}
          </h1>
          <p>
            {" "}
            <span className="text-2xl font-bold"></span> {description}
          </p>
        </div>
        <div className="lg:w-1/2 pt-5 lg:pt-0 border-t-2 lg:border-t-0 md:border-l-2 pl-4 space-y-4 border-blue-600">
          <p>
            <span className="text-2xl font-bold">Room Size</span> : {room_size}
          </p>

          <p>
            {" "}
            <span className="text-2xl font-bold">Special Offer</span> :{" "}
            {special_offer}
          </p>
          {availability ? (
            <p>
              {" "}
              <span className="text-2xl font-bold">Availability</span> :
              Available{" "}
            </p>
          ) : (
            ""
          )}
          <p>
            {" "}
            <span className="text-2xl font-bold">Price per night</span> :{" "}
            <span className="text-blue-700 text-xl font-bold">
              {" "}
              ${price}
            </span>
          </p>

          <p>
            {" "}
            <span className="text-2xl font-bold">Available Seat</span> :{" "}
            <span className="text-blue-700 text-3xl font-bold">
              {" "}
              {available_seat}
            </span>
          </p>

          <div className="flex justify-end ">
            {available_seat > 0 && user?.email ? (
              <button
                onClick={handleBooking}
                className="btn bg-blue-600 text-white w-full"
              >
                Book Now{" "}
              </button>
            ) : (
              <button className="btn bg-red-500 text-white w-full">
                Unavailable{" "}
              </button>
            )}
          </div>
        </div>
      </div>

      {review.userName ? (
        <div>
          <h1 className="text-3xl font-bold text-black pl-6 lg:pl-0 py-5 mb-10 underline ">
            User Reviews
          </h1>
          <div className="flex flex-col justify-center shadow-lg py-5 px-4 ">
            <div className="flex gap-5 ">
              <div className="avatar">
                <div className="w-12">
                  <img
                    className="rounded-full"
                    src="https://i.ibb.co/JpRZF56/businessman-character-avatar-isolated-24877-60111.jpg"
                  />
                </div>
              </div>
              <div>
                <div className="flex gap-5">
                  <p className="text-xl font-bold">{review.userName}</p>
                  <div className="rating rating-md flex items-center gap-1">
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 text-sm bg-orange-400"
                    />
                    <p className="text-lg font-bold">{review.rating}/5</p>
                  </div>
                </div>
                <p>{review.date}</p>
              </div>
            </div>
            <div className="py-4">
              <p>{review.comment}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box  ">
          <div className="px-10 space-y-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Select Date :</h3>

                   <DateRange
        editableDateInputs={true}
        onChange={handleRangeChange}
        moveRangeOnFirstSelection={false}
        ranges={range}
        minDate={today} // disable past dates in calendar UI
      />

            </div>

            <p>
              <span className="text-xl font-bold">Price </span>:
              <span className="font-bold text-blue-700" id="price">
                ${price}
              </span>
            </p>

            <p id="offer">
              <span className="text-xl font-bold">Special offer</span> :{" "}
              {special_offer}
            </p>

            <p id="des">
              <span className="text-xl font-bold">Room Description</span> :{" "}
              {description}
            </p>

            <form method="dialog" className="flex justify-end">
              <div className="flex gap-3">
                <input
                  onClick={handleConfirm}
                  className="btn bg-blue-600  text-white "
                  type="submit"
                  value="Confirm Booking"
                />

                <button className="btn  btn-outline btn-accent">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default RoomDetelis;

import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const RoomDetelis = () => {
  const data = useLoaderData();
  const { review } = data;

  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (e) => {
    setSelectedDate(e);
  };

  // const [date, setDate] = useState();
  // console.log(date);

  const {
    _id,
    room_name,
    price_per_night,
    images,
    description,
    special_offer,
    room_size,
    availability,
    available_seat,
  } = data;

  const SeatData = available_seat - 1;
  const Seat = { SeatData };
  console.log(Seat);

  const myBooking = {
    room_name: room_name,
    description: description,
    img: images[0],
    email: user?.email,
    date: selectedDate,
  };
  // console.log(myBooking);

  const img1 = images[0];

  const img2 = images[1];
  const img3 = images[2];

  const handleBooking = () => {
    document.getElementById("my_modal_1").showModal();
  };
  const handleConfirm = () => {
    axios
      .patch(
        `https://assainment-11-server.vercel.app/api/v1/bookingData/update?id=${_id}`,
        Seat
      )
      .then((res) => {
        console.log(res.data);
      });

    axios
      .post(
        "https://assainment-11-server.vercel.app/api/v1/bookingData",
        myBooking
      )
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Your room booking successful!",
          icon: "success",
        });
      });
  };
  return (
    <div className="mt-10 mb-10 lg:max-w-[1200px] mx-auto">
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
              ${price_per_night}
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
            <div className="flex gap-2">
              <h3 className="text-xl font-bold">Select Date :</h3>

              <DatePicker
                className="border "
                onChange={handleDateChange}
                // value ={selectedDate}
                selected={selectedDate}
                dateFormat="yyyy-MM-dd  HH:mm:ss"
                dateFormatCalendar="MMMM yyyy"
              />
            </div>

            <p>
              <span className="text-xl font-bold">Price </span>:
              <span className="font-bold text-blue-700" id="price">
                ${price_per_night}
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

/* eslint-disable no-unused-vars */
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyBookingUpdate = () => {
  const loader = useLoaderData();
  const _id = loader?.data?._id;
  const navigate = useNavigate();
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
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
        key: "selection",
      },
    ]);
  };
  function formatDateDMY(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  const formattedStart = formatDateDMY(range[0].startDate);
  const formattedEnd = formatDateDMY(range[0].endDate);
  const updatedDate = {
    startDate: formattedStart,
    endDate: formattedEnd,
  };

  const handleUpdate = (_id) => {
    fetch(`http://localhost:5000/api/v1/bookingData/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedDate),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/myBooking");
        Swal.fire({
          title: "Your room booking date updated successfully",
          icon: "success",
        });
      });
  };

  return (
    <div className="py-10">
      <Helmet>
        <title>MyBooking-updateDate</title>
      </Helmet>
      <div className="modal-box mx-auto mt-10">
        <h2 className="text-center text-3xl font-bold">Update date </h2>
        <form method="dialog">
          <div className="text-center">
            <div className="">
              <DateRange
                editableDateInputs={true}
                onChange={handleRangeChange}
                moveRangeOnFirstSelection={false}
                ranges={range}
                minDate={today} // disable past dates in calendar UI
              />
            </div>

            <div className="flex gap-5 justify-center">
              <Link to={"/myBooking"}>
                {" "}
                <button className="btn mt-10 px-10 btn-outline btn-accent text-white">
                  Back
                </button>{" "}
              </Link>
              <button
                onClick={() => handleUpdate(_id)}
                className="btn mt-10 px-10 bg-blue-600 text-white"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyBookingUpdate;

/* eslint-disable react/prop-types */

import { useState } from "react";
import RoomCard from "../RoomCard/RoomCard";

const FilterByPrice = ({ rooms, setData, setSearch, search }) => {
  const [sortBy, setSortBy] = useState("low-to-high");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  const sortedRooms = [...rooms];
  //   console.log(sortedRooms);
  if (sortBy === "low-to-high") {
    sortedRooms.sort((a, b) => a.price - b.price);
  } else if (sortBy === "high-to-low") {
    sortedRooms.sort((a, b) => b.price - a.price);
  }

  //Search Functional
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Filter data based on the search term
    const filteredData = rooms.filter((item) =>
      search.toLowerCase === ""
        ? item
        : item.room_name.toLowerCase().includes(value)
    );

    // Update the component state with the filtered data
    setData(filteredData);
  };

  return (
    <div className="">
      <div className="flex justify-between pb-6 w-[1200px] mx-auto">
        <div
          className=" flex items-center gap-2 mb-6"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <label className="text-black text-2xl  font-bold">Sort By:</label>
          <select
            className="border border-black  rounded-lg px-8 py-2"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="All" className=" text-black font-bold">
              All
            </option>
            <option className=" text-black font-bold" value="low-to-high">
              {" "}
              Price Low to High
            </option>

            <option className="font-bold text-black " value="high-to-low">
              Price High to Low
            </option>
          </select>
        </div>
        <div className="">
          <label className="text-black text-2xl  font-bold">
            Search by name :
          </label>
          <input
            onChange={handleSearch}
            className="border-2 border-black px-3 py-2 rounded-lg"
            type="text"
            placeholder="type here"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 w-[1200px] mx-auto ">
        {sortedRooms.map((roomData, index) => (
          <RoomCard key={index} roomData={roomData}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default FilterByPrice;

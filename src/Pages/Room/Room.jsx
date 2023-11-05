import { useLoaderData } from "react-router-dom";
import RoomCard from "../../conponents/RoomCard/RoomCard";
import FilterByPrice from "../../conponents/FilterByPrice/FilterByPrice";

const Room = () => {
    const roomsData = useLoaderData()
    // console.log(roomsData);
  
    return (
        <div>
             <h1 className="text-center text-black text-5xl font-bold py-4">Explore Our Rooms</h1>
             <div>
                <FilterByPrice rooms={roomsData}></FilterByPrice>
             </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 w-[1200px] mx-auto">
                {
                    roomsData.map((roomData,index)=><RoomCard key={index} roomData={roomData} ></RoomCard>)
                }
            </div>
            
        </div>
    );
};

export default Room;
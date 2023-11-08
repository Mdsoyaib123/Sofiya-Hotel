import { useLoaderData } from "react-router-dom";
import FilterByPrice from "../../conponents/FilterByPrice/FilterByPrice";
import { Helmet } from "react-helmet";

const Room = () => {
    const roomsData = useLoaderData()
    // console.log(roomsData);
  
    return (
        <div>
            <Helmet>
          <title>Rooms </title>
        </Helmet>
             <h1 className="text-center text-black text-5xl font-bold py-10 ">Explore Our Rooms</h1>
             <div>
                <FilterByPrice rooms={roomsData}></FilterByPrice>
             </div>
            
            
        </div>
    );
};

export default Room;
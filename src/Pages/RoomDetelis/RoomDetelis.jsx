import { useLoaderData } from "react-router-dom";

const RoomDetelis = () => {
    const data = useLoaderData();
   
    const {_id,img,room_name,price_per_night,images,description,special_offer,room_size,room_count,reviews} = data;
    const img1= images[0]
    const img2= images[1]
    const img3= images[2]
     return (
        <div className=" flex gap-10 h-screen mt-10 w-[1200px] mx-auto">
            <div className="w-full ">
                <img className="w-full  rounded-lg" src={img1} alt="" />
                <div className="flex  gap-4 mt-4 pb-10">
                    <img  className="rounded-lg w-1/2" src={img2} alt="" />
                    <img className="rounded-lg w-1/2" src={img3} alt="" />
                </div>
            </div>
            <div className="w-2/3 space-y-5 text-xl text-black mt-20">
                 
                 <p><span className="text-2xl font-bold">Room Size</span> :  {room_size}</p>
                 <p> <span className="text-2xl font-bold">Special Offer</span> :  {special_offer}</p>
                 <p> <span className="text-2xl font-bold">Description</span> :  {description}</p>
                 <p> <span className="text-2xl font-bold">Price per night</span> :  ${price_per_night}</p>
                 <div className="flex justify-end ">
                    <button className="btn btn-secondary">Book Now </button>
                 </div>

                 { reviews  ? 
                     <div className="">
                        
                        <h3 className="">User Name: </h3>
                        <p>Rating:</p>
                        <p>Comment:</p>
                     </div>
                      :
                      ''
                 }
            </div>
        </div>
    );
};

export default RoomDetelis;
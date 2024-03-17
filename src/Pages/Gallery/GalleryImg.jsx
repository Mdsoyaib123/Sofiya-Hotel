/* eslint-disable react/prop-types */



const GalleryImg = ({ roomData }) => {
  console.log(roomData);
  return (
    <>
      <div className="w-[700px] h-[500px] border-8 relative">
        <img className="w-full object-cover h-full relative bottom-0 " src={roomData.img} alt="" />
       
        <h1  className="absolute bottom-0 left-[40%] text-center text-black font-bold text-xl py-3 ShowTitle">{roomData.room_name} </h1>
       
      </div>
     
    </>
  );
};

export default GalleryImg;

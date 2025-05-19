/* eslint-disable react/prop-types */



const GalleryImg = ({ roomData }) => {
  // console.log('single room ',roomData);
  return (
    <>
      <div className="w-[100%] h-[100%]  mx-auto border-8 relative">
        <img className="w-full object-cover h-full relative bottom-0 " src={roomData.images[0]} alt="" />
       
        <h1  className="absolute bottom-0  text-center  font-bold text-xl py-3 bg-black text-white   w-full ShowTitle">{roomData.room_name} </h1>
       
      </div>
     
    </>
  );
};

export default GalleryImg;

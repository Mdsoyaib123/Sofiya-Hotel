/* eslint-disable react/prop-types */

const GalleryImg = ({ roomData }) => {
  console.log(roomData);
  return (
    <>
      <div className="w-[700px] h-[500px] border-8">
        <img className="w-full object-cover h-full relative bottom-0 " src={roomData.img} alt="" />
      </div>
      <div className=" w-full  bg-black absolute ">
        <h1 className="py-4">hello</h1>
      </div>
    </>
  );
};

export default GalleryImg;


import { useLoaderData } from "react-router-dom";
import GalleryImg from "./GalleryImg";

const Gallery = () => {
  const loaderData = useLoaderData();

  return (
    <div className="pt-16 lg:pt-24">
    <div>
      <h1 className="text-3xl font-bold py-10 text-center text-black">Gallery Of <span className="text-blue-700 ">Sofiya</span></h1>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 pb-5">
        {loaderData.map((roomData, index) => (
          <GalleryImg key={index} roomData={roomData}></GalleryImg>
        ))}
        
      </div>
      
    </div>
  );
};

export default Gallery;

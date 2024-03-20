
import { useLoaderData } from "react-router-dom";
import GalleryImg from "./GalleryImg";

const Gallery = () => {
  const loaderData = useLoaderData();

  return (
    // <div className="py-5 lg:w-[1200px]  mx-auto">
    //     <Helmet>
    //         <title>Gallery</title>
    //     </Helmet>
    //     <div className="flex gap-5 mb-5">
    //         <div className="w-1/2">
    //         <img className="rounded-lg h-[400px]" src="https://i.ibb.co/2gW8h80/point3d-commercial-imaging-ltd-5-BV56-Sdv-Lmo-unsplash.jpg" alt="" data-aos="flip-left"data-aos-easing="ease-out-cubic"
    // data-aos-duration="1500"/>
    //         </div>
    //         <div className="w-1/2">
    //         <img className=" rounded-lg h-[400px]" src="https://i.ibb.co/x8xtjxJ/visualsofdana-T5p-L6ci-En-I-unsplash.jpg" alt="" data-aos="flip-left"data-aos-easing="ease-out-cubic"
    // data-aos-duration="1500"/>
    //         </div>
    //     </div>
    //     <div className="w-full gap-5 flex">
    //     <div className="w-1/2">
    //         <img className="rounded-lg h-[400px]" src="https://i.ibb.co/QQLkpJk/toa-heftiba-FV3-GCon-VSss-unsplash.jpg" alt="" data-aos="flip-left"data-aos-easing="ease-out-cubic"
    // data-aos-duration="1500"/>
    //     </div>
    //     <div className="w-1/2">
    //         <img className="h-[400px] rounded-lg" src="https://i.ibb.co/PrwVKJB/dada-design-q0-Fi-Vvo8jww-unsplash.jpg" alt="" data-aos="flip-left"data-aos-easing="ease-out-cubic"
    // data-aos-duration="1500"/>
    //     </div>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
    //         <div className="">
    //             <img className="rounded-lg h-[350px]" src="https://i.ibb.co/SdBN6YK/dada-design-mp-P3o5q0-Opg-unsplash.jpg" alt="" data-aos="flip-left"data-aos-easing="ease-out-cubic"
    // data-aos-duration="1500"/>
    //         </div>
    //         <div className="">
    //             <img className="h-[350px] rounded-lg" src="https://i.ibb.co/cFYPQyr/dada-design-8a-Qn-BInxp1s-unsplash.jpg" alt="" data-aos="flip-left"data-aos-easing="ease-out-cubic"
    // data-aos-duration="1500"/>
    //         </div>
    //         <div className="">
    //             <img className="h-[350px] rounded-lg" src="https://i.ibb.co/sFTMXLB/andres-q-pws-HYiy6-OPI-unsplash.jpg" alt="" data-aos="flip-left"data-aos-easing="ease-out-cubic"
    // data-aos-duration="1500"/>
    //         </div>
    //     </div>

    // </div>
    <>
    <div>
      <h1 className="text-3xl font-bold py-10 text-center text-black">Gallery Of <span className="text-blue-700 ">Sofiya</span></h1>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 pb-5">
        {loaderData.map((roomData, index) => (
          <GalleryImg key={index} roomData={roomData}></GalleryImg>
        ))}
        
      </div>
      
    </>
  );
};

export default Gallery;

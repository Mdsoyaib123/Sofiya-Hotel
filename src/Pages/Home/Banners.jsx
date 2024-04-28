import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Banners.css";
import { Pagination, Navigation } from "swiper/modules";

const Banners = () => {
  return (
    <div className="h-screen">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src="https://i.postimg.cc/4NX7x78D/slider-1.jpg" alt="" />
          <div className="absolute text-white">
            <p className=" text-[20px] md:text-2xl lg:text-4xl  font-sans">Welcome to </p>
            <h1 className="text-7xl mt-12 font-bold ">Hotel Sofiya </h1>
            <p className="mt-6 text-xl ">Find the Perfect Accommodation</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src="https://i.postimg.cc/y8bFDxNm/slider-3.jpg" alt="" />
          <div className="absolute left-8 bottom-20  bg-opacity-10 text-gray-300  w-1/2 pr-32  text-right">
            <p className="  text-4xl font-sans">Welcome to </p>
            <h1 className="text-7xl font-bold ">Hotel Sofiya </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="object-cover" src="https://i.postimg.cc/zv2fxL6p/slider-2.jpg" alt="" />
          <div className="absolute left-8 bottom-20 bg-gray-900 bg-opacity-10 text-gray-300  w-1/2 text-left">
            <p className=" text-[20px] md:text-2xl lg:text-4xl font-sans">Perfect place for Dining </p>
            <h1 className="text-[12px] md:text-lg lg:text-xl mt-4 lg:mt-6  ">Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes. </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banners;

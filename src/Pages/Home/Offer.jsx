import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div
      className="my-16 relative "
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <img
        className="h-[400px] w-full rounded-xl"
        src="https://i.ibb.co/rfWKxzv/pexels-ahmed-abdelaziz-453201.jpg"
        alt=""
      />
      <div className="text-center  text-white space-y-2 absolute bottom-0 pt-28 lg:pl-96  bg-gradient-to-r from-[#151515] to-rgba[21,21,21,0] px-20 py-5 h-full">
        <h2 className="text-4xl uppercase">Stay 2 Nights</h2>
        <h1 className="text-5xl font-semibold ">
          <i>30% OFF</i>
        </h1>
        <div className="pt-16 ">
          <Link to={"/room"}>
            {" "}
            <button
              className="btn  bg-blue-600 text-white"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              Book Now{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;

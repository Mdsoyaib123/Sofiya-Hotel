import Swal from "sweetalert2";

const Banner = () => {
  const handelCheckOut = () => {
    Swal.fire({
      title: "Check Out Successful",
      showClass: {
        popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
      },
      hideClass: {
        popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
      },
    });
  };
  return (
    <div className="relative ">
      <div className=" lg:flex w-full sm:mt-5 mb-10">
        <div
          className="lg:w-1/2 space-y-8 mt-10"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h1 className="text-5xl lg:text-7xl font-bold ">
            Book Your <br></br> Desired Room{" "}
          </h1>
          <p className="text-xl">
            Immerse yourself in a world of possibilities as you book <br></br>{" "}
            the room that fulfills your imagination
          </p>
          <button
            className="btn rounded-3xl px-5  bg-blue-600 text-white"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            Start Your Search
          </button>
          <ol className="text-center lg:flex lg:justify-start lg:pt-16 text-xl underline ">
            <li className="mr-20">
              <a href="#">Stays</a>
            </li>
            <li className="mr-20">
              <a href="#">Experience</a>
            </li>
            <li className="mr-20">
              <a href="#">Cars</a>
            </li>
            <li className="mr-20">
              <a href="#">Fights</a>
            </li>
          </ol>
        </div>
        <div
          className="lg:w-1/2  flex gap-5"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="w-1/2 space-y-5">
            <img
              src="https://i.ibb.co/N7mWMbB/edvin-johansson-rlw-E8f8an-Oc-unsplash.jpg"
              alt=""
            />
            <img
              className=""
              src="https://i.ibb.co/tDv1kZK/tholaal-mohamed-8s-KTHe-Ggr-UM-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="w-1/2 mt-28">
            <img
              className=""
              src="https://i.ibb.co/Tq6Qyz6/pexels-palu-malerba-2607113-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="hidden lg:flex shadow-lg bg-gray-100 py-4 rounded-full overflow-auto absolute -bottom-12"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className=" flex gap-3 items-center px-10">
          <div>
            <img
              className="w-[40px] "
              src="https://i.ibb.co/cNLs9k7/check-in-2.png"
              alt=""
            />
          </div>
          <div>
            <h2>CHECK IN</h2>
            <input
              className="border px-5 py-2 rounded-md"
              type="date"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex gap-3 items-center px-10">
          <div>
            <img
              className="w-[40px] "
              src="https://i.ibb.co/wQ6rPDp/check-out.png"
              alt=""
            />
          </div>
          <div>
            <h2>CHECK OUT</h2>
            <input
              className="border px-5 py-2 rounded-md"
              type="date"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex gap-3 items-center px-10">
          <div>
            <img
              className="w-[40px] "
              src="https://i.ibb.co/WG31zVz/man.png"
              alt=""
            />
          </div>
          <div>
            <h2>PERSON</h2>
            <input
              className="border px-5 py-2 rounded-md"
              type="date"
              name=""
              id=""
            />
          </div>
          <div className="px-10">
            <button
              onClick={handelCheckOut}
              className="btn btn-outline bg-blue-600 text-white"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              CHECK OUT
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Banner;

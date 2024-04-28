import { Helmet } from "react-helmet";
import { AiTwotoneMail, AiFillPhone } from "react-icons/ai";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = () => {
    Swal.fire({
      title: "You submit successfully",
      icon: "success",
    });
  };
  return (
    <div className="mb-6 pt-16 lg:pt-24">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold py-6 pb-10  underline font-serif">
        Contact Us
      </h1>
      <div className=" lg:flex  items-center  gap-8 py-5 lg:max-w-[1200px]  mx-auto px-8 lg:px-24 ">
        <div className="lg:w-1/2 flex flex-col gap-3 text-black mb-10 lg:mb-0">
          <div>
            <h3 className=" text-lg md:text-xl lg:text-2xl  font-bold ">+44 20 3519 2700</h3>
            <p>Book online or call</p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold ">contact@lartisien.com</h3>
            <p>Send us an email or use contact form</p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold ">Our address</h3>
            <p className="">Grand Luxury. 228 Rue de Rivoli. Paris, 75002, FR · G.L.H <br /> Services ltd</p>
          </div>
        </div>
        <div className="lg:w-1/2 text-black  ">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center  ">SEND US A MESSAGE</h3>
          <div className="divider "></div>
          <form onSubmit={handleSubmit} className="space-y-4"> 
            <div>
            <label className="">Name</label><br></br>
            <input className="w-full border border-black px-2 py-2" type="text" name="" placeholder="First and Last Name" id="" />
            </div>
            <div>
            <label className="">Email</label><br></br>
            <input className="w-full border border-black px-2 py-2" type="text" name="" placeholder="email" id="" />
            </div>
            <div>
            <label className="">Message </label><br></br>
            <textarea className="border border-black w-full" name="" id="" cols="30" rows="4" ></textarea>
            </div> 
            <input className="w-full bg-black text-white py-2 rounded" type="button" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

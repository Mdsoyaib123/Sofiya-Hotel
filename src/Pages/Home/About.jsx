
const About = () => {
    return (
        <div className="hero mt-40">
  <div className="hero-content gap-32 relative flex-col lg:flex-row">
   
        <img src="https://i.ibb.co/HrdjHk6/Getty-Images-1369095741-55-660x440.jpg" className="lg:w-1/2 rounded-lg shadow-2xl" data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"/>
        <div className=" lg:absolute shadow-xl bg-white px-5 pr-20  py-2 rounded-xl -left-14 bottom-20" data-aos="zoom-in"data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <h2 className="text-xl font-bold pb-3">Sofiya Hotel</h2>
            <p className="text-lg">40 EMPLOYESS</p>
            <p className="text-lg">24 HOURS SERVICE</p>
           <div className="flex gap-10 pt-4">
                <p className="text-lg">Status</p>
                <div className="rating  flex gap-1 items-center">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 text-sm" />
                <p className="text-lg">4.9</p>
                </div>
           </div>
        </div>
   
    <div data-aos="fade-up"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="1000">
       <div className="lg:flex items-end gap-1 mb-5">
       <h2 className="pl-2 pb-2 font-semibold  text-2xl">ABOUT US</h2>
        <p className="text-blue-600 font-extrabold">__________</p>
       </div>
      <h1 className="text-5xl font-bold">The Best Holiday Start Here</h1>
      <p className="py-6">At Sofiya Hotel, we're passionate about creating unforgettable travel experiences. Whether you're planning a relaxing weekend escape, a business trip, or an adventure-packed vacation, we're here to make your hotel booking process seamless and enjoyable.</p>
      <button className="btn bg-blue-600 px-5 text-white" data-aos="zoom-in"data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">Read More </button>
    </div>
  </div>
</div>
    );
};

export default About;

const Banner = () => {
    return (
       <div className="relative">
         <div className="flex w-full  mb-10">
            <div className="w-1/2 space-y-8 mt-10">
                <h1 className="text-7xl font-bold ">Book Your <br></br> Desired Room </h1>
                <p className="text-xl">Immerse yourself in a world of possibilities as you book <br></br> the room that fulfills your imagination</p>
                <button className="btn rounded-3xl px-5  bg-blue-600 text-white">Start Your Search</button>
                <ol className="flex pt-16 text-xl underline justify-start">
                    <li className="mr-20"><a href="#">Stays</a></li>
                    <li className="mr-20"><a href="#">Experience</a></li>
                    <li className="mr-20"><a href="#">Cars</a></li>
                    <li className="mr-20"><a href="#">Fights</a></li>
                </ol>
            </div>
            <div className="w-1/2 flex gap-5">
               <div className="w-1/2 space-y-5">
                
                <img src="https://i.ibb.co/N7mWMbB/edvin-johansson-rlw-E8f8an-Oc-unsplash.jpg" alt="" />    
                <img className="" src="https://i.ibb.co/tDv1kZK/tholaal-mohamed-8s-KTHe-Ggr-UM-unsplash.jpg" alt="" />
               </div>
               <div className="w-1/2 mt-28">
               <img className="" src="https://i.ibb.co/Tq6Qyz6/pexels-palu-malerba-2607113-1.jpg" alt="" />
               </div>
            </div>
            
        </div>
        <div className="flex shadow-lg bg-base-200 py-4 rounded-full overflow-auto absolute -bottom-12">
            <div className="flex gap-3 items-center px-10">
                <div>
                    <img className="w-[40px] " src="https://i.ibb.co/cNLs9k7/check-in-2.png" alt="" />
                </div>
                <div>
                    <h2>CHECK IN</h2>
                    <input className="border" type="date" name="" id="" />
                </div>
            </div>
            <div className="flex gap-3 items-center px-10">
                <div>
                    <img className="w-[40px] " src="https://i.ibb.co/wQ6rPDp/check-out.png" alt="" />
                </div>
                <div>
                    <h2>CHECK OUT</h2>
                    <input className="border" type="date" name="" id="" />
                </div>
            </div>
            <div className="flex gap-3 items-center px-10">
                <div>
                    <img className="w-[40px] " src="https://i.ibb.co/WG31zVz/man.png" alt="" />
                </div>
                <div>
                    <h2>PERSON</h2>
                    <input className="border" type="date" name="" id="" />
                </div>
                <div className="px-10">
                    <button className="btn btn-outline bg-blue-600 text-white">CHECK OUT</button>
                </div>
            </div>
            
            <div></div>
        </div>
       
       </div>
        
    );
};

export default Banner;
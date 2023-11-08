
const NewsLetter = () => {
    return (
        <div className="w-full flex gap-10 mt-20">
            <div className="w-1/2 space-y-5 pt-10 pl-20">
                <h1 className="text-5xl font-bold ">Join our NewsLetter</h1>
                <p className="text-xl ">Read and share new perspective on just about any tofic.EveryOne's welcome</p>
                <div>
                 
                   <div className="flex items-center mb-4 gap-2">
                   <p className="bg-blue-300 text-white px-2 py-1 rounded-xl">01</p>
                    <li className="text-lg font-bold">Get More Discount</li>
                   </div>
                   <div className="flex items-center gap-2">
                   <p className="bg-red-300 text-white px-2 py-1 rounded-xl">02</p>
                    <li className="text-lg font-bold">Get Premiun magazines</li>
                   </div>
                  
                </div>
                <div>
                <div className="form-control mt-16">
                    <div className="input-group">
                        <input  type="text" placeholder="Search…" className="input input-bordered px-10" />
                        <button className="btn bg-blue-600 text-white px-14">
                        Subscribe
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <img src="https://i.ibb.co/wp9cPY1/undraw-subscribe-vspl.png" alt="" />
            </div>
        </div>
    );
};

export default NewsLetter;
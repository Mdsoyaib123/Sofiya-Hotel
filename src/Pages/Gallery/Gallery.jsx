import { Helmet } from "react-helmet";

const Gallery = () => {
    return (
        <div className="py-5 lg:w-[1200px]  mx-auto">
            <Helmet>
                <title>Gallery</title>
            </Helmet>
            <div className="w-full gap-5 flex">
            <div className="w-1/2">
                <img className="rounded-lg h-[400px]" src="https://i.ibb.co/QQLkpJk/toa-heftiba-FV3-GCon-VSss-unsplash.jpg" alt="" />
            </div>
            <div className="w-1/2">
                <img className="h-[400px] rounded-lg" src="https://i.ibb.co/PrwVKJB/dada-design-q0-Fi-Vvo8jww-unsplash.jpg" alt="" />
            </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                <div className="">
                    <img className="rounded-lg h-[350px]" src="https://i.ibb.co/SdBN6YK/dada-design-mp-P3o5q0-Opg-unsplash.jpg" alt="" />
                </div>
                <div className="">
                    <img className="h-[350px] rounded-lg" src="https://i.ibb.co/cFYPQyr/dada-design-8a-Qn-BInxp1s-unsplash.jpg" alt="" />
                </div> 
                <div className="">
                    <img className="h-[350px] rounded-lg" src="https://i.ibb.co/sFTMXLB/andres-q-pws-HYiy6-OPI-unsplash.jpg" alt="" />
                </div> 
            </div>
           
        </div>
    );
};

export default Gallery;
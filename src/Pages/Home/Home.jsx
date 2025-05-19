
import { Helmet } from "react-helmet";
import About from "./About";
import Facility from "./Facility";
import Offer from "./Offer";
import QusAns from "./QusAns";
import { useLoaderData } from "react-router-dom";
import Rooms from "./Rooms";
import Banners from './Banners';


const Home = () => {
    const loader = useLoaderData()
    const RoomData = loader?.data?.slice(0,3)
    // console.log(RoomData)

    return (
       <div>
        <Helmet>
          <title>Home </title>
        </Helmet>
         <div className=" pb-20   lg:w-[1200px] mx-auto text-zinc-900">
           {/* <Banner></Banner> */}
           <Banners></Banners>
           <About></About>
           <Rooms RoomData={RoomData}></Rooms>
           <Facility></Facility>
           <Offer></Offer>
         <QusAns></QusAns>
         {/* <NewsLetter></NewsLetter> */}
         
           
        </div>
       </div>
    );
};

export default Home;

import { Helmet } from "react-helmet";
import About from "./About";
import Banner from "./Banner";
import Facility from "./Facility";
import NewsLetter from "./NewsLetter";
import Offer from "./Offer";
import QusAns from "./QusAns";


const Home = () => {
    
    return (
       <div className="">
        <Helmet>
          <title>Home </title>
        </Helmet>
         <div className=" pb-20 pt-10  lg:w-[1200px] mx-auto text-zinc-900">
           <Banner></Banner>
           <About></About>
           <Facility></Facility>
           <Offer></Offer>
         <QusAns></QusAns>
         <NewsLetter></NewsLetter>
         
           
        </div>
       </div>
    );
};

export default Home;
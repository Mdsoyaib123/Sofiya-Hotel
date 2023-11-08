import { Outlet } from "react-router-dom";
import Navbar from "../../conponents/Navbar/Navbar";
import Footer from "../../conponents/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
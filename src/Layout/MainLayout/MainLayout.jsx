import { Outlet } from "react-router-dom";
import Navbar from "../../conponents/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="w-full max-w-[1200px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../Redux/Features/Auth/authSlice";
import { persistor } from "../../Redux/store";


const Navbar = () => {
  const dispatch = useDispatch()
   const user =useSelector((state)=>state.auth.user)
    const links = <div className=" flex flex-wrap gap-5 font-bold text-lg items-center ">
        <NavLink to={'/'} className={({isActive})=>isActive ? 'bg-blue-600   py-2 px-4 text-white rounded': ''}><button>Home</button></NavLink>
        <NavLink to={'/room'} className={({isActive})=>isActive ? 'bg-blue-600   py-2 px-4 text-white rounded': ''}><button>Rooms</button></NavLink>
        <NavLink to={'/myBooking'} className={({isActive})=>isActive ? 'bg-blue-600   py-2 px-4 text-white rounded': ''}><button>My Booking</button></NavLink>
        <NavLink to={'/gallery'} className={({isActive})=>isActive ? 'bg-blue-600   py-2 px-4 text-white rounded': ''}><button> Gallery</button></NavLink>
        <NavLink to={'/contact'} className={({isActive})=>isActive ? 'bg-blue-600   py-2 px-4 text-white rounded': ''}><button> Contact</button></NavLink>
        {/* {
         user ? <NavLink to={'/dashboard'} className={({isActive})=>isActive ? 'bg-blue-600   py-2 px-4 text-white rounded': ''}><button> Dashboard</button></NavLink> : ''
        } */}
    </div>
    const handleLogout = ()=>{
      dispatch(logout())
      persistor.purge();
    }
    return (
        <div className="w-full shadow-md bg-white fixed z-10">
           <div className="navbar  flex  lg:max-w-[1200px] py-2 mx-auto">
            <div className="navbar-start ">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4  z-[1] py-7 px-4    shadow bg-base-100 rounded-box w-96 " >
                  {links}
                </ul>
              </div>
              <Link to={'/'} className="hidden lg:flex flex-col">
              <h1 className="text-4xl font-bold text-blue-600 "><i>Sofiya</i></h1>
              <p className="text-center text-lg pt-1">--Hotel--</p>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
              {links}
              </ul>
            </div>
            <div className="navbar-end">
              {
                user ? <button
                 onClick={handleLogout}
                  className="btn  btn-outline btn-secondary"  data-aos="zoom-in"data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">logOut</button>
                : 
                <Link to={'/login'} className="btn  btn-outline btn-secondary"  data-aos="zoom-in"data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">Login</Link>
              }
            
            </div>
          </div>
      </div>
    );
};

export default Navbar;
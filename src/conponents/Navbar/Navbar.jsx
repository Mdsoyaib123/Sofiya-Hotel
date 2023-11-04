import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <div className="flex gap-5 items-center">
        <NavLink to={'/'} className={({isActive})=>isActive ? 'bg-blue-600   py-2 px-4 text-white rounded': ''}><button>Home</button></NavLink>
        <NavLink to={'/room'} className={({isActive})=>isActive ? 'bg-blue-600   py-2 px-4 text-white rounded': ''}><button>Rooms</button></NavLink>
        <NavLink to={'/myBooking'} className={({isActive})=>isActive ? 'bg-blue-600   py-2 px-4 text-white rounded': ''}><button>My Booking</button></NavLink>
    </div>
    return (
        <div className="navbar bg-base-100 flex w-full py-3 px-16 shadow-md">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <Link to={'/'} className="">
    <h1 className="text-4xl font-bold text-blue-600"><i>Sofiya</i></h1>
    <p className="text-center text-lg pt-1">--Hotel--</p>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
   <Link className="btn btn-outline btn-secondary">Sign up</Link>
  </div>
</div>
    );
};

export default Navbar;
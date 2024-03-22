import React from "react";
import { FaUser } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Pfphoto from '../Assets/pf.jpeg'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex items-center px-2 py-2 text-white bg-[#1876F3] select-none">
      <Link to={'/'} className="mr-[12vw] font-semibold text-[1.3rem]">SocialWeb</Link>
      <div className="flex gap-10 items-center">
        <div className="w-[40vw] px-2  rounded-full bg-white flex items-center gap-2 py-1">
        <FaSearch className="text-black" />
          <input className="w-full focus:outline-none text-sm text-black" type="text" placeholder="Search for friend, post or video" />
        </div>
        <div className="flex gap-5 text-sm">
          <Link to={'/'}>Homepage</Link>
          <Link to={'/Profile'}>Profile</Link>
          <Link to={'/Login'}>Login</Link>
        </div>
        <div className="flex re gap-3 h-5 relative items-center">
        <FaUser className="size-4 " />
        <div className="bg-red-500 text-[8px] absolute left-2 -top-1 rounded-full px-[5px]">2</div>
        <MdMessage className="size-6" />
        <div className="bg-red-500 text-[8px] absolute left-10 -top-1 rounded-full px-[5px]">8</div>
        <IoIosNotifications className="size-6" />
        <div className="bg-red-500 text-[8px] absolute left-16 -top-1 rounded-full px-[5px]">7</div>
        </div>
        <div>            
        </div>
        <img className="h-10 w-[45px] object-cover rounded-full mr-4" src={Pfphoto} alt="profile" />
      </div>
    </div>
  );
};

export default Navbar;

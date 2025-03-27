import React, { useState } from "react";
import logo_black from "../assets/logo-black.png";
import logo_white from "../assets/logo-white.png";
import search_black from "../assets/search-b.png";
import search_white from "../assets/search-w.png";
import darkIcon from "../assets/night.png";
import lightIcon from "../assets/day.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Dark, setDark] = useState(false);

  const changeTheme = () => {
    document.getElementById("root").classList.toggle("dark");
    setDark((prev) => !prev);
  };

  return (
    <nav className="w-full h-29 flex items-center justify-between bg-amber-50 dark:bg-black p-[15px]">
      {/* Change logo based on theme */}
      <img src={Dark ? logo_white : logo_black} alt="Logo" className="w-[150px] cursor-pointer" />

      <ul className="flex list-none text-center">
        <div className="flex place-content-center gap-6 m-[10px_20px] text-lg  dark:text-white">
          <li><Link to="/">Home </Link></li>
          <li>Counter</li>
          <li><Link to="/task">Task </Link></li>
          <li>About</li>
        </div>
      </ul>

      <div className="flex items-center bg-black dark:bg-amber-50 p-[10px_20px] rounded-[50px]">
        <input type="text" placeholder="Search"
        className="flex-1 placeholder:pl-2 px-4 border-0 outline-0 bg-transparent text-white dark:text-black text-[18px] max-w-[200px]"
        />
        <img src={Dark ? search_black : search_white } alt="Search" className="w-[20px] h-[20px]" />
      </div>

      {/* Theme Toggle Icon */}
      <img
        src={Dark ? lightIcon : darkIcon}
        onClick={changeTheme} className="w-[50px] cursor-pointer mr-[40px]"
      />
    </nav>
  );
};

export default Navbar;

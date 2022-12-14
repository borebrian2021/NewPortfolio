import React,{memo} from "react";


const NavBar = () => {
  return (
    <>
      <div className="navbar  shadow-md bg-[#31313a] ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-white rounded-box w-52"
            >
              <li className="hover:bg-slate-300 active:bg-slate-200 focus:bg-slate-200 text-white">
                <a>About</a>
              </li>
            
              <li>
                <a>Skills</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670939243/Portfolio/DSC_7989_xdncll.jpg" />
        </div>
      </label>
          <p className="text-white text-[13px]"> Brian Koskei | Frontend Developer</p> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
                <a>About</a>
              </li>
            
              <li>
                <a>Skills</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Get started</a>
        </div> */}
      </div>
    </>
  );
};

export default memo(NavBar);

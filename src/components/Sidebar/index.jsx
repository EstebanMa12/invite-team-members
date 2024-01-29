import { HiOutlineHome } from "react-icons/hi2";
import { AiOutlineMessage } from "react-icons/ai";
import { TfiStatsUp } from "react-icons/tfi";
import { CiCalendar, CiSettings } from "react-icons/ci";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import Profile from "../Profile";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const {user} = useSelector(store=> store.user)
    


  
  return (
    <>
      
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
        // onClick={handleToggle}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className="relative z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r flex-grow"
        aria-label="Sidebar"
      >
        <Profile photoURL={user.photoURL} email={user.email} name={user.name}/>
        <div className="h-full px-3 py-4 overflow-y-auto bg-white-50">
          <span className="text-gray-500 text-sm font-medium">GENERAL</span>
          <ul className="space-y-2 font-medium text-gray-500">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 hover:bg-pink-100  group"
              >
                <HiOutlineHome />
                <span className="ms-3 text-gray-500  hover:text-pink-800">
                  Home
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 hover:bg-pink-100  group"
              >
                <AiOutlineMessage />
                <span className=" ms-3 text-gray-500 hover:text-pink-800">
                  Messages
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 hover:bg-pink-100  group"
              >
                <TfiStatsUp />
                <span className=" ms-3 text-gray-500 hover:text-pink-800">
                  Reports
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900  hover:bg-pink-100  group"
              >
                <CiCalendar />
                <span className=" ms-3 text-gray-500 hover:text-pink-800">
                  Calendar
                </span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 ">
            <span className="text-gray-500 text-sm">WORKSPACE</span>
            <li>
              <Link
                to="/projects"
                className="flex items-center p-2 text-gray-900 hover:bg-pink-100  group"
              >
                <VscFileSubmodule />
                <span className="ms-3 text-gray-500 hover:text-pink-800">
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link
                to='/home'
                className="flex items-center p-2 text-gray-900 hover:bg-pink-100  group"
              >
                <IoIosPeople />
                <span className="ms-3 text-gray-500 hover:text-pink-800">
                  Manage Members
                </span>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col absolute bottom-5 ">
            <div className="hidden md:flex flex-col bg-gray-200 rounded-sm w-52 h-24 mb-4 justify-between p-3">
              <h3 className="flex items-center text-sm ">
                <MdOutlineRocketLaunch className="mr-2"/> Upgrade to Pro
              </h3>
              <p className="text-gray-400 text-xs">Unlock all pro features</p>
              <button className="rounded-lg bg-sky-500 text-sky-800 text-xs h-7
               hover:bg-sky-600 hover:text-sky-900
              ">Upgrade</button>
            </div>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 hover:bg-pink-100  group"
            >
              <FiPhone />
              <span className="ms-3 text-gray-500 hover:text-pink-800">
                Help center
              </span>
            </a>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 hover:bg-pink-100  group"
            >
              <CiSettings />
              <span className="ms-3 text-gray-500 hover:text-pink-800">
                Settings
              </span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

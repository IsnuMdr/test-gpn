import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ showSidebarMobile }) => {
  return (
    <aside
      className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 transition-all ease-in-out duration-300"
      style={{ display: showSidebarMobile && "block" }}
    >
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <a
          className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
          href="#"
        >
          Admin
        </a>
        <ul className="mt-6">
          <li className="relative px-6 py-3">
            <span className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"></span>
            <Link
              to="/"
              className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
            >
              <FaHome className="text-xl" />
              <span className="ml-4">Dashboard</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

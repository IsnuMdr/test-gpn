import React, { useState } from "react";
import { ThemeConsumer } from "../contexts/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";
import { FiLogOut, FiUser } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = ({ dataUser, setShowSidebarMobile }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* Mobile hamburger */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
          aria-label="Menu"
          onClick={() => setShowSidebarMobile((prev) => !prev)}
        >
          <GiHamburgerMenu className="text-2xl" />
        </button>
        <div className="flex justify-center flex-1 lg:mr-32"></div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          <li className="flex">
            <ThemeConsumer>
              {({ theme, toggleTheme }) => {
                return (
                  <button
                    className="rounded-md focus:outline-none focus:shadow-outline-purple"
                    aria-label="Toggle color mode"
                    onClick={toggleTheme}
                  >
                    {theme === "light" ? (
                      <BsSun className="text-xl" />
                    ) : (
                      <BsMoon className="text-xl" />
                    )}
                  </button>
                );
              }}
            </ThemeConsumer>
          </li>
          <li className="relative">
            <button
              className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <img
                className="object-cover w-8 h-8 rounded-full"
                src={`https://dev-be.trijagabaya.co.id/assets/upload/data-admin/${dataUser.user.adminpetugasfoto}`}
                alt=""
                aria-hidden="true"
              />
            </button>
            <div
              className={`${
                showDropdown ? "block" : "hidden"
              } transition-all duration-300`}
            >
              <ul
                className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                aria-label="submenu"
              >
                <li className="flex">
                  <Link
                    to="/profile"
                    className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  >
                    <FiUser className="text-xl mr-2" />
                    <span>Profile</span>
                  </Link>
                </li>
                <li className="flex">
                  <button
                    className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                    href="#"
                  >
                    <FiLogOut className="text-xl mr-2" />
                    <span>Log out</span>
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

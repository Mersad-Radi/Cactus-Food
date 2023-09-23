import React from "react";
import { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import navlogo from "../utils/img/navlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Searchpopup } from "../component";

const Navbar = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const openSearchPopup = () => {
    setSearchOpen(true);
  };

  const closeSearchPopup = () => {
    setSearchOpen(false);
  };

  return (
    <>
      <nav className=" shadow-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img src={navlogo} className="h-12 mr-3" alt="Logo" />
          </Link>
          <div
            className="items-center justify-between flex w-auto md:order-1"
            id=""
          >
            <ul className="flex  font-medium md:p-0  md:flex-row md:space-x-8">
              <li className="">
                <Link to="/" className="nav-button block py-2">
                  <span className="actual-text">&nbsp;HOME&nbsp;</span>
                  <span className="hover-text" aria-hidden="true">
                    &nbsp;HOME&nbsp;
                  </span>
                </Link>
              </li>
              <li className="">
                <Link to="/menu" className="nav-button block py-2 ml-3">
                  <span className="actual-text">&nbsp;MENU&nbsp;</span>
                  <span className="hover-text" aria-hidden="true">
                    &nbsp;MENU&nbsp;
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex md:order-2">
            <button
              type="button"
              className="searchbtn p-button text-black font-medium rounded-lg text-sm px-2 py-2 text-center  md:mr-0"
              onClick={openSearchPopup}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <Link to="/profile">
              <button
                type="button"
                className="p-button ml-1 text-black  font-medium rounded-lg text-sm px-2 py-2 text-center  md:mr-0"
              >
                <FontAwesomeIcon icon={faUser} />
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {isSearchOpen && <Searchpopup onClose={closeSearchPopup} />}
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa6";
import { setDark, setLight } from "../redux/ThemeSlice";
import { ImMenu } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import photo from "../assets/my_pic2.jpg";




const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themes.theme);
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const onClickHandler = () => {
    if (theme === "light") {
      dispatch(setDark());
    } else {
      dispatch(setLight());
    }
  };

  return (
    <>
      <div
        className={
          theme === "light"
            ? "w-[100%] h-[5rem] bg-white text-black flex justify-between px-12 py-2 items-center shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] "
            : "w-[100%] h-[5rem] bg-gray-900 text-white flex justify-between px-12 py-2 items-center shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
        }
      >
        <div className="flex items-center">
          <img src={photo} alt="" className="profile" />
        </div>
        <ul className="flex items-center space-x-4">
          <button
            type="button"
            className="outline-none focus:outline-none"
            onClick={onClickHandler}
          >
            {theme !== "light" ? (
              <FaRegLightbulb
                className="text-yellow-400 mr-4 "
                style={{ height: "18px", width: "18px" }}
              />
            ) : (
              <BsLightbulbFill
                style={{ height: "18px", width: "18px" }}
                className="mr-4"
              />
            )}
          </button>
          <li className="hidden md:block">
            <NavLink
              to="/"
              className={(nav) =>
                nav.isActive
                  ? "border-b-yellow-400 border-b-4 px-3 py-2 text-gray-700 rounded-md "
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hidden md:block">
            <NavLink
              to="/about"
              className={(nav) =>
                nav.isActive
                  ? "border-b-yellow-400 border-b-4 px-3 py-2 text-gray-700 rounded-md "
                  : ""
              }
            >
              About
            </NavLink>
          </li>
          <li className="hidden md:block">
            <NavLink
              to="/projects"
              className={(nav) =>
                nav.isActive
                  ? "border-b-yellow-400 border-b-4 px-3 py-2 text-gray-700 rounded-md "
                  : ""
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="hidden md:block">
            <NavLink
              to="/contact"
              className={(nav) =>
                nav.isActive
                  ? "border-b-yellow-400 border-b-4 px-3 py-2 text-gray-700 rounded-md "
                  : ""
              }
            >
              Contact
            </NavLink>
          </li>
          <button
            className="md:hidden outline-none focus:outline-none"
            onClick={() => setToggleNavbar(!toggleNavbar)}
          >
            {!toggleNavbar ? (
              <ImMenu
                style={{ height: "24px", width: "24px" }}
                className="text-yellow-400  "
              />
            ) : (
              <AiFillCloseCircle
                style={{ height: "24px", width: "24px" }}
                className="text-yellow-400 "
              />
            )}
          </button>
        </ul>
      </div>
      {toggleNavbar && (
        <div className="md:hidden">
          <ul
            className={
              theme === "dark"
                ? "bg-slate-800 text-gray-100 space-y-4 "
                : "bg-yellow-400 text-gray-700 space-y-4  "
            }
          >
            <li
              className={
                theme === "light"
                  ? " hover:text-white px-8 py-2 hover:bg-yellow-500"
                  : "hover:bg-white hover:text-black px-8 py-2"
              }
            >
              {" "}
              <NavLink to="/" onClick={() => setToggleNavbar(!toggleNavbar)}>
                Home
              </NavLink>
            </li>

            <li
              className={
                theme === "light"
                  ? " hover:text-white px-8 py-2 hover:bg-yellow-500"
                  : "hover:bg-white px-8 py-2 hover:text-black"
              }
            >
              {" "}
              <NavLink
                to="/about"
                onClick={() => setToggleNavbar(!toggleNavbar)}
              >
                About
              </NavLink>
            </li>
            <li
              className={
                theme === "light"
                  ? " hover:text-white px-8 py-2 hover:bg-yellow-500"
                  : "hover:bg-white hover:text-black px-8 py-2"
              }
            >
              {" "}
              <NavLink
                to="/projects"
                onClick={() => setToggleNavbar(!toggleNavbar)}
              >
                Projects
              </NavLink>
            </li>
            <li
              className={
                theme === "light"
                  ? " hover:text-white px-8 py-2 hover:bg-yellow-500"
                  : "hover:bg-white hover:text-black px-8 py-2"
              }
            >
              {" "}
              <NavLink
                to="/contact"
                onClick={() => setToggleNavbar(!toggleNavbar)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

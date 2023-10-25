import React from "react";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import resume from "../assets/ashwini-kumar-resume.pdf";

import { BiDownload } from "react-icons/bi";

const Home = () => {
  const theme = useSelector((state) => state.themes.theme);

  return (
    <div
      className={
        theme === "light"
          ? "w-[100%] min-h-screen bg-gray-100 flex flex-col justify-center abc"
          : "w-[100%] min-h-screen bg-gray-700 text-gray-600 flex flex-col justify-center abcd"
      }
    >
      <div className="w-[80%] md:w-[55%] h-[90vh] mx-auto mt-4   px-8 py-4  space-y-6 text-left ">
        <h1
          className={
            theme === "light"
              ? " text-3xl font-bold mt-5 text-center text-gray-900"
              : "text-3xl font-bold mt-5 text-yellow-400 text-center"
          }
        >
          HEY , I AM ASHWINI KUMAR
        </h1>

        <p>
          A motivated and fast-learning MERN stack developer with a strong
          foundation in web development technologies. Adept at problem-solving
          and committed to producing clean, efficient code.
        </p>
        <p className="">
          {" "}
          Eager to contribute to innovative projects, collaborate with a team,
          and further develop skills in web development.
        </p>
        <br />
        <div className="w-[100%] flex justify-between">
          <NavLink
            to="/projects"
            className={
              theme !== "light"
                ? "bg-yellow-400 text-gray-700 font-bold px-4 py-2 rounded-lg w-[45%] text-center hover:bg-white border-2 hover:text-yellow-600"
                : "bg-blue-500 text-white px-4 py-2 text-center rounded-lg  hover:bg-blue-700 hover:text-white w-[45%]"
            }
          >
            Projects
          </NavLink>
          <a
            href={resume}
            download="ashwini-kumar-resume.pdf"
            className="w-[45%]"
          >
            <button
              type="button"
              className={
                theme !== "light"
                  ? "bg-yellow-400 text-gray-700 font-bold px-4 py-2 w-[100%] rounded-lg  hover:bg-white border-2 hover:text-yellow-600"
                  : "bg-blue-500 text-white px-4 py-2 rounded-lg  hover:bg-blue-700 hover:text-white w-[100%]"
              }
            >
              <span className="flex justify-center items-center space-x-2">
                <p>Resume</p>
                <BiDownload style={{ height: "24px", width: "24px" }} />
              </span>{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const theme = useSelector((state) => state.themes.theme);
  const openNewTab = (link) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <div className="w-[100vw] min-h-[100vh] flex flex-col relative">
        <Navbar />
        <div
          className={
            theme === "light"
              ? "hidden fixed top-[40%]  bg-gray-100 px-3 py-3 md:block"
              : " fixed top-[40%]  bg-gray-900 px-3 py-3 hidden md:block"
          }
        >
          <ul className="flex flex-col space-y-3">
            <li
              onClick={() =>
                openNewTab("https://www.linkedin.com/in/ashwini787/")
              }
              className="hover:rotate-6"
            >
              <BsLinkedin
                style={{ height: "24px", width: "24px" }}
                className={theme === "light" ? "text-black" : "text-white"}
              />
            </li>
            <li
              onClick={() => openNewTab("https://twitter.com/Ashwini39085807")}
              className="hover:rotate-6"
            >
              <FaSquareXTwitter
                style={{ height: "24px", width: "24px" }}
                className={theme === "light" ? "text-black" : "text-white"}
              />
            </li>
            <li
              onClick={() => openNewTab("https://github.com/Ashwinii-kumar")}
              className="hover:rotate-6"
            >
              <BsGithub
                style={{ height: "24px", width: "24px" }}
                className={theme === "light" ? "text-black" : "text-white"}
              />
            </li>
            <li
              onClick={() =>
                openNewTab("https://www.instagram.com/ashwinii_kumar/")
              }
              className="hover:rotate-6"
            >
              <BsInstagram
                style={{ height: "24px", width: "24px" }}
                className={theme === "light" ? "text-black" : "text-white"}
              />
            </li>
            <li
              onClick={() =>
                openNewTab("https://leetcode.com/ashwinikumar787/")
              }
              className="hover:rotate-6"
            >
              <SiLeetcode
                style={{ height: "24px", width: "24px" }}
                className={theme === "light" ? "text-black" : "text-yellow-600"}
              />
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;

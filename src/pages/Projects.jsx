import React from "react";
import { useSelector } from "react-redux";
import { imageUrls } from "../imageUrls";
import Carousel from "../components/Carousel";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  const theme = useSelector((state) => state.themes.theme);
  const openNewTab = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div
      className={
        theme === "light"
          ? "w-[100%] min-h-screen bg-gray-100 flex flex-col justify-start abc mx-auto   md:p-8"
          : "w-[100%] mx-auto min-h-screen bg-gray-700 text-gray-800 flex flex-col justify-start abcd md:p-8"
      }
    >
      <div
        className={
          theme === "light"
            ? "text-2xl text-center font-semibold mb-4 text-gray-900"
            : "text-2xl font-semibold mb-4 text-yellow-400 text-center"
        }
      >
        <h1>Projects</h1>
      </div>
      <div className=" boxx  w-[100%]  p-10">
        <div
          className={
            theme === "light"
              ? "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-sm min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-2 py-4 pb-8"
              : "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-sm min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-x-8 border-y-2 py-4 pb-8  border-yellow-400"
          }
        >
          <p className="font-bolder text-lg text-center">Classic Snake Game</p>

          <div className="flex justify-between w-[100%]  ">
            <button
              type="button"
              onClick={() =>
                openNewTab("https://github.com/Ashwinii-kumar/Snake-game")
              }
              className="bg-gray-900 rounded-full border-sky-200 p-1 hover:bg-white"
            >
              <BsGithub
                style={{ height: "20px", width: "20px" }}
                className="text-white hover:text-black"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                openNewTab("https://ashwinii-kumar.github.io/Snake-game/")
              }
              className="bg-lime-500  px-3 rounded-xl text-[10px] text-bold text-red-500"
            >
              Visit Live Site
            </button>
          </div>
          <Carousel images={imageUrls.snake_game} />
        </div>
        <div
          className={
            theme === "light"
              ? "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-sm min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-2 py-4 pb-8"
              : "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-sm min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-x-8 border-y-2 py-4 pb-8 border-yellow-400"
          }
        >
          <p className="font-bolder text-lg text-center">Breakout Game</p>

          <div className="flex justify-between w-[100%] ">
            <button
              type="button"
              onClick={() =>
                openNewTab("https://github.com/Ashwinii-kumar/breakout-game")
              }
              className="bg-gray-900 rounded-full border-sky-200 p-1 hover:bg-white"
            >
              <BsGithub
                style={{ height: "20px", width: "20px" }}
                className="text-white hover:text-black"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                openNewTab("https://ashwinii-kumar.github.io/breakout-game/")
              }
              className="bg-lime-500  px-3 rounded-xl text-[10px] text-bold text-red-500"
            >
              Visit Live Site
            </button>
          </div>
          <Carousel images={imageUrls.breakout_game} />
        </div>
        <div
          className={
            theme === "light"
              ? "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-sm min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-2 py-4 pb-8"
              : "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-sm min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-x-8 border-y-2 py-4 pb-8 border-yellow-400"
          }
        >
          <p className="font-bolder text-lg text-center">Sorting Visualizer</p>
          <div className="flex justify-between w-[100%] ">
            <button
              type="button"
              onClick={() =>
                openNewTab(
                  "https://github.com/Ashwinii-kumar/sorting-visualizer-"
                )
              }
              className="bg-gray-900 rounded-full border-sky-200 p-1 hover:bg-white"
            >
              <BsGithub
                style={{ height: "20px", width: "20px" }}
                className="text-white hover:text-black"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                openNewTab(
                  "https://ashwinii-kumar.github.io/sorting-visualizer-/"
                )
              }
              className="bg-lime-500  px-3 rounded-xl text-[10px] text-bold text-red-500"
            >
              Visit Live Site
            </button>
          </div>
          <Carousel images={imageUrls.sorting_visualizer} />
        </div>
        <div
          className={
            theme === "light"
              ? "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-sm min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-2 py-4 pb-8"
              : "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-sm min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-x-8 border-y-2 py-4 pb-8 border-yellow-400"
          }
        >
          <p className="font-bolder text-lg text-center">Quiz App</p>
          <div className="flex justify-between w-[100%] ">
            <button
              type="button"
              onClick={() =>
                openNewTab("https://github.com/Ashwinii-kumar/Quiz-App")
              }
              className="bg-gray-900 rounded-full border-sky-200 p-1 hover:bg-white"
            >
              <BsGithub
                style={{ height: "20px", width: "20px" }}
                className="text-white hover:text-black"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                openNewTab("https://quiz-app-by-ashwini-kumar.netlify.app/")
              }
              className="bg-lime-500  px-3 rounded-xl text-[10px] text-bold text-red-500"
            >
              Visit Live Site
            </button>
          </div>
          <Carousel images={imageUrls.quiz} />
        </div>
        <div
          className={
            theme === "light"
              ? "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-sm min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-2 py-4 pb-8"
              : "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-sm min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-x-8 border-y-2 py-4 pb-8 border-yellow-400"
          }
        >
          <p className="font-bolder text-lg text-center">Github User Finder</p>
          <div className="flex justify-between w-[100%] ">
            <button
              type="button"
              onClick={() =>
                openNewTab(
                  "https://github.com/Ashwinii-kumar/github-user-finder"
                )
              }
              className="bg-gray-900 rounded-full border-sky-200 p-1 hover:bg-white"
            >
              <BsGithub
                style={{ height: "20px", width: "20px" }}
                className="text-white hover:text-black"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                openNewTab(
                  "https://ashwinii-kumar.github.io/github-user-finder/"
                )
              }
              className="bg-lime-500  px-3 rounded-xl text-[10px] text-bold text-red-500"
            >
              Visit Live Site
            </button>
          </div>
          <Carousel images={imageUrls.github} />
        </div>
        <div
          className={
            theme === "light"
              ? "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-sm min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-2 py-4 pb-8"
              : "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-sm min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-x-8 border-y-2 py-4 pb-8 border-yellow-400"
          }
        >
          <p className="font-bolder text-lg text-center">Shopping Cart</p>
          <div className="flex justify-between w-[100%] ">
            <button
              type="button"
              onClick={() =>
                openNewTab(
                  "https://github.com/Ashwinii-kumar/Shopping_Cart_assignment_Frontend"
                )
              }
              className="bg-gray-900 rounded-full border-sky-200 p-1 hover:bg-white"
            >
              <BsGithub
                style={{ height: "20px", width: "20px" }}
                className="text-white hover:text-black"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                openNewTab("https://shopping-cart-assignment-drab.vercel.app/")
              }
              className="bg-lime-500  px-3 rounded-xl text-[10px] text-bold text-red-500"
            >
              Visit Live Site
            </button>
          </div>
          <Carousel images={imageUrls.cart} />
        </div>
        <div
          className={
            theme === "light"
              ? "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-sm min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-2 py-4 pb-8"
              : "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-sm min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-x-8 border-y-2 py-4 pb-8 border-yellow-400"
          }
        >
          <p className="font-bolder text-lg text-center">
            Crytocurrency Tracker{" "}
          </p>
          <div className="flex justify-between w-[100%] ">
            <button
              type="button"
              onClick={() =>
                openNewTab(
                  "https://github.com/Ashwinii-kumar/CryptoExplorerX-frontend"
                )
              }
              className="bg-gray-900 rounded-full border-sky-200 p-1 hover:bg-white"
            >
              <BsGithub
                style={{ height: "20px", width: "20px" }}
                className="text-white hover:text-black"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                openNewTab(
                  "https://crypto-explorer-x-frontend-git-main-ashwini-kumars-projects.vercel.app/"
                )
              }
              className="bg-lime-500  px-3 rounded-xl text-[10px] text-bold text-red-500"
            >
              Visit Live Site
            </button>
          </div>

          <Carousel images={imageUrls.crypto} />
        </div>
        <div
          className={
            theme === "light"
              ? "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-sm min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-2 py-4 pb-8"
              : "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-6  rounded-lg min-h-[250px] md:min-h-[250px]  flex flex-col justify-center space-y-4 border-x-8 border-y-2 py-4 pb-8 border-yellow-400"
          }
        >
          <p className="font-bolder text-lg text-center">Tic Tac Toe</p>
          <div className="flex justify-between w-[100%] ">
            <button
              type="button"
              onClick={() =>
                openNewTab("https://github.com/Ashwinii-kumar/tic-tac-toe-game")
              }
              className="bg-gray-900 rounded-full border-sky-200 p-1 hover:bg-white"
            >
              <BsGithub
                style={{ height: "20px", width: "20px" }}
                className="text-white hover:text-black"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                openNewTab("https://ashwinii-kumar.github.io/tic-tac-toe-game/")
              }
              className="bg-lime-500  px-3 rounded-xl text-[10px] text-bold text-red-500"
            >
              Visit Live Site
            </button>
          </div>
          <Carousel images={imageUrls.tic_tac_toe} />
        </div>
      </div>
    </div>
  );
};

export default Projects;

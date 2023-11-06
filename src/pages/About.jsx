import React, { useState } from "react";
import { ImHtmlFive } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiCplusplus, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Education from "../components/Education";

const About = () => {
  const [flag, setFlag] = useState(true);
  const theme = useSelector((state) => state.themes.theme);

  return (
    <>
      <div
        className={
          theme === "light"
            ? "w-[100%] min-h-screen bg-gray-100 flex flex-col justify-center abc mx-auto p-8"
            : "w-[100%] mx-auto min-h-screen bg-gray-700 text-gray-600 flex flex-col justify-center abcd p-8"
        }
      >
        <div className="flex mb-16 space-x-24 w-[75%] mx-auto justify-center">
          <button
            type="button"
            className={
              theme === "light"
                ? "bg-blue-500 border-2  text-white px-6 py-2 rounded-md mr-6 w-[25%]"
                : "bg-yellow-400 text-gray-700 font-bold px-6 py-2 rounded-md mr-6 w-[25%] border-2"
            }
            onClick={() => setFlag(false)}
          >
            Education
          </button>
          <button
            type="button"
            className={
              theme === "light"
                ? "bg-blue-500 border-2 text-white px-6 py-2 rounded-md mr-6 w-[25%]"
                : "bg-yellow-400 text-gray-700 font-bold px-6 py-2 rounded-md mr-6 w-[25%] border-2"
            }
            onClick={() => setFlag(true)}
          >
            Skills
          </button>
        </div>

        {flag && (
          <>
            <div className="grid  grid-cols-4 md:grid-cols-5  box w-[75%] mx-auto p-4">
              <div className="flex flex-col items-center justify-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[120px] rounded-full w-[120px] space-y-2 bg-slate-950 text-white effect">
                <SiCplusplus
                  style={{ height: "44px", width: "44px" }}
                  className="text-blue-500 bg-white mt-3 "
                />
                <h3 className="font-bold text-teal-400">C++</h3>
              </div>
              <div className="flex flex-col items-center justify-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[120px] rounded-full w-[120px] space-y-2 bg-slate-950 text-white effect">
                <ImHtmlFive
                  style={{ height: "44px", width: "44px" }}
                  className="text-red-500  bg-white"
                />
                <h3 className="font-bold text-teal-400">Html</h3>
              </div>
              <div className="flex flex-col items-center justify-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[120px] rounded-full w-[120px] space-y-2 bg-slate-950 text-white effect">
                <DiCss3
                  style={{ height: "44px", width: "44px" }}
                  className="text-blue-700 bg-white"
                />
                <h3 className="font-bold text-teal-400">Css</h3>
              </div>
              <div className="flex flex-col items-center justify-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[120px] rounded-full w-[120px] space-y-2 bg-slate-950 text-white effect">
                <IoLogoJavascript
                  style={{ height: "44px", width: "44px" }}
                  className="text-yellow-500"
                />
                <h3 className="font-bold text-teal-400">Javascript</h3>
              </div>
              <div className="flex flex-col items-center justify-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[120px] rounded-full w-[120px] space-y-2 bg-slate-950 text-white effect">
                <FaReact
                  style={{ height: "44px", width: "44px" }}
                  className="text-sky-400 font-bold  bg-black  "
                />
                <h3 className="font-bold text-teal-400">React</h3>
              </div>
              <div className="flex flex-col items-center justify-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[120px] rounded-full w-[120px] space-y-2 bg-slate-950 text-white effect">
                <TbBrandRedux
                  style={{ height: "44px", width: "44px" }}
                  className="text-purple-500"
                />
                <h3 className="font-bold text-teal-400">Redux</h3>
              </div>
              <div className="flex flex-col items-center justify-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[120px] rounded-full w-[120px] space-y-2 bg-slate-950 text-white effect">
                <FaNodeJs
                  style={{ height: "44px", width: "44px" }}
                  className="text-green-700"
                />
                <h3 className="font-bold text-teal-400">Node.js</h3>
              </div>
              <div className="flex flex-col items-center justify-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[120px] rounded-full w-[120px] space-y-1 bg-slate-950 text-white effect ">
                <SiExpress
                  style={{ height: "44px", width: "44px", fontWeight: "bold" }}
                />
                <h3 className="font-bold text-teal-400">Express.js</h3>
              </div>
              <div className="flex flex-col items-center justify-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[120px] rounded-full w-[120px] space-y-2 bg-slate-950 text-white effect">
                <SiMongodb
                  style={{ height: "44px", width: "44px" }}
                  className="text-green-700"
                />
                <h3 className="font-bold text-teal-400">MongoDb</h3>
              </div>
              <div className="flex flex-col items-center justify-center  shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[120px] rounded-full w-[120px] space-y-2 bg-slate-950 text-white effect">
                <SiTailwindcss
                  style={{ height: "44px", width: "44px" }}
                  className="text-sky-500"
                />
                <h3 className="font-bold text-teal-400">Tailwind Css</h3>
              </div>
            </div>
          </>
        )}
        {!flag && <Education />}
      </div>
    </>
  );
};

export default About;

import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
    <div className="w-[100vw] h-[100vh] flex flex-col justify-start p-10">
    <h1 className="text-3xl mb-2 text-center">Some error occurred.</h1>
      <NavLink
        to="/"
        className="bg-red-500 text-white text-md font-bold px-4 py-2 rounded-2xl w-[25%] text-center mx-auto mt-4"
      >
        Go To Home
      </NavLink>
    </div>
    
    </>
  );
};

export default Error;

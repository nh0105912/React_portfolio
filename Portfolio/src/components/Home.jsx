import React from "react";
// from data.
import { userInfo, socials, buttons } from "../data";

import { FaArrowDown } from "react-icons/fa6";

const Home = () => {
  return (
    <div className=" relative flex flex-col justify-center items-center w-full h-screen ">
      <div
        className="bg-gray-950 w-full md:w-[90%] pt-40 md:pt-0 py-4 h-[170vh] md:h-[70vh] lg:h-[80vh] rounded-lg
          flex flex-col-reverse md:flex-row justify-center md:justify-between md:items-center md:gap-x-4 gap-y-8 md:px-10 lg:px-16"
      >
        <div className="px-4 w-full md:w-1/2">
          <h2 className="text-1xl font-semibold capitalize text-cyan-400">
            {userInfo.greeting}
          </h2>
          <h1 className="capitalize  pb-4  text-3xl lg:text-6xl font-bold bg-gradient-to-r from-red-500 to-blue-300 bg-clip-text text-transparent">
            {userInfo.name}
          </h1>
          <h3 className="text-gray-300 text-2xl lg:text-3xl pb-3 ">
            {userInfo.role}
          </h3>
          <p className="text-gray-400 pb-3 text-[16px]">
            {userInfo.description}
          </p>
          <div className="flex  gap-x-4 py-2">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.id}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 border-[2px] border-solid border-gray-300 rounded-full
                  shadow-[0_4px_6px_0_rgba(255,255,255,0.2)] hover:shadow-none "
                >
                  <Icon className="  text-white " />
                </a>
              );
            })}
          </div>
          <div className="flex flex-col lg:flex-row  gap-x-4">
            {buttons.map((id) => (
              <button key={id} href={id.link} className="capitalize bg-gradient-to-r from-red-400 to-blue-400 text-white hover:text-white font-semibold px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-2 rounded-lg hover:from-red-700 hover:to-cyan-500 transition duration-300 ms-0 mt-6 shadow-[0_4px_6px_0_rgba(255,255,255,0.2)] hover:shadow-none " >
                {id.text}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-end ">
          <div
            className=""
            style={{
              clipPath: "circle(50% at 50% 50%)",
            }}
          >
            <img
              src={userInfo.image}
              alt=""
              className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center border-[1px] border-gray-300 border-dashed rounded-full px-1 py-4 ">
        <FaArrowDown className="animate-bounce w-4 h-4 text-gray-400 " />
      </div>
    </div>
  );
};

export default Home;

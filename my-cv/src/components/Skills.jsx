import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactJS from "../assets/react.png";
import Python from "../assets/Python.png";
import AWS from "../assets/aws.png";
import TailwindCSS from "../assets/tailwind.png";
import GitHub from "../assets/github.png";
import Navbar from "./Navbar";

const Skills = () => {
  return (
    <div className="">
      <Navbar />
      <div className="bg-[#0a192f] text-gray-300 pt-14">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-red-300">
              Experience
            </p>
            <p className="py-4">
              Миний хичээл дээр болон өөрөө үзэж судласан программын хэлүүд
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-118 duration-500">
              <img className="w-20 mx-auto " src={HTML} alt="HTML Icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-118 duration-500">
              <img className="w-20 mx-auto " src={CSS} alt="HTML Icon" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-118 duration-500">
              <img className="w-20 mx-auto " src={JavaScript} alt="HTML Icon" />
              <p className="my-4">JavaScripts</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-118 duration-500">
              <img className="w-20 mx-auto " src={Python} alt="HTML Icon" />
              <p className="my-4">Python</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-118 duration-500">
              <img
                className="w-20 mx-auto "
                src={TailwindCSS}
                alt="HTML Icon"
              />
              <p className="my-4">TailwindCSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-118 duration-500">
              <img className="w-20 mx-auto " src={ReactJS} alt="HTML Icon" />
              <p className="my-4">ReactJS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-118 duration-500">
              <img className="w-20 mx-auto " src={AWS} alt="HTML Icon" />
              <p className="my-4">AWS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-118 duration-500">
              <img className="w-20 mx-auto " src={GitHub} alt="HTML Icon" />
              <p className="my-4">GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;

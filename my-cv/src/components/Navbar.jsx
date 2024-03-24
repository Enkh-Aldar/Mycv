import React, { useState } from "react";
import cover from "../assets/cover.png";
import { FaGithub, FaFacebook } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={cover} className="w-[60px]" alt="" />
      </div>

      <ul className="flex">
        <li className="px-4"><Link to="/">Home</Link></li>
        <li className="px-4"><Link to="/about/">About</Link></li>
        <li className="px-4"><Link to="/skills/">Skills</Link></li>
        <li className="px-4"><Link to="/contact/">Contact</Link></li>
      </ul>
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul className="">
          <li className="px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a href="https://www.facebook.com/aldratbb/" target="_blank" className="flex justify-between items-center w-full text-gray-300"> 
              Facebook
              <FaFacebook size={30}/>
            </a>
          </li>
          <li className="px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a href="https://github.com/Enkh-Aldar" target="_blank" className="flex justify-between items-center w-full text-gray-300"> 
              GitHub
              <FaGithub size={30}/>
            </a>
          </li>
          <li className="px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#902d4b]">
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" className="flex justify-between items-center w-full text-gray-300"> 
              Email
              <HiOutlineMail size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

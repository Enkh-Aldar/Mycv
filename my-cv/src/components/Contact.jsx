import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form action="" className="flex flex-col max-w-[600px] w-full">
          <div className="pb-8 text-gray-300">
            <p className="text-4xl font-bold inline border-b-4 border-red-300">
              Холбоо барих
            </p>
            <p className="py-4">Та надтай холбоо барихыг хүсвэл:</p>
            <p>Утас: 88388301</p>
            <p>
              Email: <a href="https://gmail.com">aldaraa1245@gmail.com</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;

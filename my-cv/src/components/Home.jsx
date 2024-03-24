import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
        <Navbar />
    <div className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300   ">
        <p className="text-red-300 text-lg">Сайн байна уу? Миний нэрийг</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Э.Энх-Алдар{" "}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] max-w-[700px]">
          Full Stack Developer
        </h2>
        <p className="text-[#8892b0 py-4 max-w-[700px] ">
          Би 22 настай ажлын туршлагагүй,{" "}
          <a href="https://icode.mn" className="text-red-300" target="_blank">ICode Academy</a>-д 2023 оны 9 сараас 2024
          оны 3 сарыг дуустал Full Stack Developer-ийн ангид амжилттай суралцаж
          төгссөн. Цаашдаа{" "}
          <strong>
            Python, ReactJS, TailwindCSS, HTML, PostgreSQL, JavaScript
          </strong>
          -ийг илүү гүн гүнзгий судлаж мэдлэг олж авах зорилго тавьсан.
        </p>
      </div>
    </div>
    </div>
  );
};
export default Home;

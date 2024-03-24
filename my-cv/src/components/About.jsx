import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-red-300">
                Миний тухай
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Намайг Э.Энх-Алдар гэдэг би 22 настай.</p>
            </div>
            <div>
              <p>
                2020-2021 онд хугацаат цэргийн алба өөрийн биеээр хаасан. Баг
                хамт олонтой ажиллах чадвартай, хйисэн ажлаа тууштай хийдэг, цаг
                баримталдаг. Би 2021-2023 онд ШУТИС-ийн Мэдээлэл Холбооны
                Технологийн сургуульд Мэдээллийн технологийн инженерийн
                мэргэжлээр суралцаж байгаад чөлөө авж{" "}
                <a href="https://icode.mn" className="text-red-300" target="_blank">
                  {" "}
                  ICode Academy
                </a>
                -д сурсан. Чөлөөт цагаараа аялаж зугаалах дуртай.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

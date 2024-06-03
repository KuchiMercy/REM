import React, { useEffect } from "react";
import { MdAccessTime } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import cover from "../../../assets/images/cover1.png";
import cover2 from "../../../assets/images/cover3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const JoinUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="mt-5" data-aos="fade-up">
      <h2 className="text-center font-bold text-2xl pt-10 pb-5 md:text-3xl" data-aos="fade-up">
        JOIN US AND BECOME PART <br /> OF SOMETHING GREAT
      </h2>

      <main className=" flex flex-col justify-center mx-auto w-[100%] md:w-[80%] md:flex-row mb-10 ">
        {/* 1 */}
        <section data-aos="fade-up" className=" md:w-[27%] md:max-w-[30%] max-w-[90%] mx-auto md:mx-0 bg-[#fff5eb] p-5">
          <p data-aos="fade-up" className="text-xs font-bold text-[#e1a466]">WEEKLY ACTIVITIES</p>
          <h3 data-aos="fade-up" className="font-bold text-xl py-2">
            JOIN US FOR OUR WEEKLY SERVICES
          </h3>
          <p data-aos="fade-up" className="text-sm max-w-[90%]">
            Deepen your faith! Join our weekly fellowship for growth and
            connection.
          </p>
          <div className="flex py-3 gap-1">
            <div data-aos="fade-up" className="text-xl">
              <MdAccessTime />
            </div>
            <div  className="text-sm">
              <p data-aos="fade-up">Sunday 8:00am WAT</p>
              <p data-aos="fade-up">Wednesday 5:30pm WAT</p>
            </div>
          </div>
          <div className="flex">
            <div data-aos="fade-up" className="text-xl">
              <FaLocationDot />
            </div>
            <div  className="text-sm">
              <p data-aos="fade-up"> Arowolo Ball Room, Fajuyi</p>
              <p data-aos="fade-up">Ado-Ekiti, Ekiti</p>
              <p data-aos="fade-up">Nigeria</p>
            </div>
          </div>
        </section>
        {/* 2 */}
        <section data-aos="fade-up" className="max-w-[90%] md:w-[73%]  mx-auto">
          <img src={cover} alt="" className="w-[100%]" />
        </section>
      </main>
    </div>
  );
};

export default JoinUs;

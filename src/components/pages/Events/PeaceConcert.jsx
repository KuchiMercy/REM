import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import peace from "../../../assets/Peace2.png";

const PeaceConcert = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up">
      <section className="bg-[#fff5eb] w-[70%] gap-4 mx-auto my-4 flex flex-col md:flex-row  justify-between items-center rounded-lg shadow-lg p-4 -translate-y-20 md:-translate-y-30 lg:-translate-y-30">
        {/* Image */}
        <div data-aos="fade-up" className="w-[65%]">
          <img src={peace} alt="" />
        </div>

        {/* Text */}
        <div data-aos="fade-up">
          <div data-aos="fade-up" className="my-3">
            <NavLink to="https://www.instagram.com/thegratitudetribes/" target="_blank" className="hidden md:inline bg-transparent border-2 border-[#ffd2a4] text-sm p-2 rounded-lg" >
              View
            </NavLink>
          </div>
          <h2 data-aos="fade-up" className="font-bold text-xl md:text-2xl">Peace Concert</h2>
          <p data-aos="fade-up">
            Ekiti Peace Concert is a vision to create an atmosphere of worship
            and praise in the state. To bring down the presence and peace of God
            even in the midst of terrible news.
          </p>
          <div data-aos="fade-up" className="my-3">
          <NavLink to="https://www.instagram.com/thegratitudetribes/" target="_blank" className="md:hidden bg-transparent border-2 border-[#ffd2a4] text-sm p-2 rounded-lg">
              View
            </NavLink>
            </div>
        </div>
      </section>
    </div>
  );
};

export default PeaceConcert;

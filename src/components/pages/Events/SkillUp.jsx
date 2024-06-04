import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import rem from "../../../assets/REM-logo1.png";

const SkillUp = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up">
      <section className="bg-[#fff5eb] w-[70%] gap-4 mx-auto my-4 flex flex-col justify-between items-center md:flex-row rounded-lg shadow-lg p-4 -translate-y-20 md:-translate-y-30 lg:-translate-y-30">
        {/* Image */}
        <div data-aos="fade-up" className="w-[65%]">
          <img src={rem} alt="" />
        </div>

        {/* Text */}
        <div data-aos="fade-up">
          <div data-aos="fade-up" className="my-3">
            <NavLink
              to="https://www.instagram.com/rccgrem/"
              target="_blank"
              aria-disabled="true"
              className="hidden md:inline bg-transparent border-2 border-[#ffd2a4] text-sm p-2 rounded-lg"
            >
              View
            </NavLink>
          </div>

          <h2 data-aos="fade-up" className="font-bold text-xl md:text-2xl">
            Skill Up Training
          </h2>
          <p data-aos="fade-up">
            Join our SkillUp Training program to enhance your digital and
            non-digital skills. Learn new technologies, improve existing
            abilities, and empower yourself for personal and professional
            growth.
          </p>
          <div data-aos="fade-up" className="my-3">
            <NavLink
              to="https://www.instagram.com/rccgrem/"
              target="_blank"
              aria-disabled="true"
              className="md:hidden bg-transparent border-2 border-[#ffd2a4] text-sm p-2 rounded-lg"
            >
              View
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillUp;

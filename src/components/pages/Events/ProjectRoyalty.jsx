import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import pRoyalty from "../../../assets/p-royalty.jpeg";

const ProjectRoyalty = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up">
      <section  className="bg-[#fff5eb] w-[70%] gap-4 mx-auto my-4 flex flex-col justify-between items-center md:flex-row  rounded-lg shadow-lg p-4 -translate-y-20 md:-translate-y-30 lg:-translate-y-30">
        {/* Image */}
        <div data-aos="fade-up" className="w-[65%]">
          <img src={pRoyalty} alt="" />
        </div>

        {/* Text */}
        <div >
          <div  className="my-3">
            <NavLink data-aos="fade-up"
              className="hidden md:inline bg-transparent border-2 border-[#ffd2a4] text-sm p-2 rounded-lg"
              to="https://www.instagram.com/reel/C6VutCGMeT_/?igsh=MXJubjQyZ2ZnMjUxaQ=="
              target="_blank"
            >
              View
            </NavLink>
          </div>
          <h2 data-aos="fade-up" className="font-bold text-xl md:text-2xl">Project Royalty</h2>
          <p data-aos="fade-up" >
            Empowering NYSC Corp members to contribute meaningfully to society
            in alignment with Sustainable Development Goals. Through Health,
            Education, Environmental sustainability.
          </p>
          <div   className="my-3">
            <NavLink data-aos="fade-up"
              className="md:hidden bg-transparent border-2 border-[#ffd2a4] text-sm p-2 rounded-lg"
              to="https://www.instagram.com/reel/C6VutCGMeT_/?igsh=MXJubjQyZ2ZnMjUxaQ=="
              target="_blank"
            >
              View
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectRoyalty;

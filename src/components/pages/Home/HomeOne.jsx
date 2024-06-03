import React, { useEffect } from "react";
import HomeOneData from "../../Data/HomeOneData";
// import { FaChurch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeOne = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="mt-10" data-aos="fade-up">
      <h2
        className="text-center font-bold text-2xl md:text-3xl"
        data-aos="fade-up"
      >
        A CHURCH THAT'S DIFFERENT
      </h2>

      {/* Card */}
      <main className="flex item-center justify-center  flex-col mx-auto my-6 gap-6 w-[80%] md:flex-row md:my-10">
        {HomeOneData.map((item) => (
          <section
            data-aos="fade-up"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col items-start justify-center w-[70%] px-6 md:px-8 m-auto md:w-[30%] h-[200px] md:h-[300px] max-h-[300px] lg:h-[250px] bg-[#fff5eb] border-b-8 border-[#ffd2a4] rounded-lg shadow-xl "
            key={item.id}
          >
            <div
              data-aos="fade-up"
              className="text-white text-xl bg-black p-3 rounded-full "
            >
              {item.icon && (<span><item.icon/></span>)}
            </div>
            <h4 data-aos="fade-up" className="font-bold text-lg py-1">
              {item.title}
            </h4>
            <p data-aos="fa de-up" className="text-sm">
              {item.text}
            </p>
            
            <NavLink to={item.link} target="_blank"
              data-aos="fade-up"
              className=" text-black my-4 px-4 py-2 text-xs bg-[#ffd2a4] rounded-lg "
            >
              {item.button}
            </NavLink>
          </section>
        ))}
      </main>
    </div>
  );
};

export default HomeOne;

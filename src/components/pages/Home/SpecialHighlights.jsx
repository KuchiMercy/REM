import React, { useEffect } from "react";
import oldSchool from "../../../assets/images/old-school.png";
import swallowship from "../../../assets/images/swallowship.png";
import jersey from "../../../assets/images/jersey.png";
import thanksgiving from "../../../assets/images/praise-sunday1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const SpecialHighlights = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="mt-5" data-aos="fade-up">
      <h2
        className="text-center font-bold text-2xl pt-10 pb-5 md:text-3xl"
        data-aos="fade-up"
      >
        SPECIAL HIGHLIGHTS
      </h2>

      <main className="max-w-[65%] mx-auto ">
        {/* 1 */}
        <section
          data-aos="fade-up"
          className="flex flex-col justify-between items-center my-5 gap-4 md:gap-1  md:flex-row"
        >
          <div data-aos="fade-up" className="md:w-[50%] ">
            <img
              src={oldSchool}
              alt=""
              className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              width={350}
            />
          </div>
          <div className="md:w-[50%] w-[75%]">
            <h4 data-aos="fade-up" className="font-bold text-xl py-3">
              Old-School Sunday
            </h4>
            <p data-aos="fade-up" className="text-sm">
              Join RCCG Royal Embassy for Old-School Sunday! Experience timeless
              hymns, classic sermons, and nostalgic fellowship.
            </p>
          </div>
        </section>
        {/* 2 */}
        <section
          data-aos="fade-up"
          className="flex flex-col-reverse justify-between items-center my-5 gap-4 md:gap-1  md:flex-row"
        >
          <div className="md:w-[50%] w-[75%]">
            <h4 data-aos="fade-up" className="font-bold text-xl py-3">
              Swallowship Sunday
            </h4>
            <p data-aos="fade-up" className="text-sm">
              Join us for Swallowship Sunday! Enjoy a day of shared meals,
              fellowship, and community at our church.
            </p>
          </div>
          <div data-aos="fade-up" className="md:w-[50%]">
            <img
              src={swallowship}
              alt=""
              className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              width={350}
            />
          </div>
        </section>
        {/* 3 */}
        <section
          data-aos="fade-up"
          className="flex flex-col justify-between items-center my-5 gap-4 md:gap-1 md:flex-row"
        >
          <div data-aos="fade-up" className="md:w-[50%]">
            <img
              src={jersey}
              alt=""
              className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              width={350}
            />
          </div>
          <div className="md:w-[50%] w-[75%]">
            <h4 data-aos="fade-up" className="font-bold text-xl py-3">
              Jersey Sunday
            </h4>
            <p data-aos="fade-up" className="text-sm">
              Celebrate Jersey Sunday with us! Wear your favorite jersey to
              church for a fun-filled day of fellowship and sports spirit.
            </p>
          </div>
        </section>
        {/* 4 */}
        <section
          data-aos="fade-up"
          className="flex flex-col-reverse justify-between items-center my-5 gap-4 md:gap-1 md:flex-row"
        >
          <div className="md:w-[50%] w-[75%]">
            <h4 data-aos="fade-up" className="font-bold text-xl py-3">
              Thanksgiving Sunday
            </h4>
            <p data-aos="fade-up" className="text-sm">
              Join us on Thanksgiving Sunday, the first Sunday of every month,
              for a special service of gratitude and celebration.
            </p>
          </div>
          <div data-aos="fade-up" className="md:w-[50%]">
            <img
              src={thanksgiving}
              alt=""
              className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              width={350}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default SpecialHighlights;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="mt-10">
      <h2 data-aos="fade-up" className="text-center font-bold text-2xl md:text-3xl">
        MEET OUR PASTORS
      </h2>
      {/* Pastors Card */}
      <main data-aos="fade-up" className="grid  grid-cols-1 md:grid-cols-2  md:flex-row w-[80%] mx-auto gap-8 my-10">
        {/* 1 */}
        <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <section data-aos="fade-up" className="transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[100%] md:w-[97%] shadow-xl">
          <div data-aos="fade-up" className="bg-tunji bg-cover  h-[350px] md:h-[300px] md:relative rounded-lg  ">
            <div data-aos="fade-up" className=" text-white p-2 md:absolute md:px-4 md:bottom-0">
              <h4 data-aos="fade-up" className="font-bold">Pastor Adetunji Aribasoye</h4>
              <p data-aos="fade-up" className="text-sm">Presiding Pastor</p>
            </div>
          </div>
          </section>
          </span>

          {/* 2 */}
          <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">

          <section data-aos="fade-up" className="w-[100%] md:w-[97%] shadow-xl">
            <div className="">
              <div data-aos="fade-up" className="bg-adekeye bg-cover h-[350px] md:h-[300px] md:relative rounded-lg ">
                <div className="p-2 md:absolute md:px-4 md:bottom-0">
                  <h4 data-aos="fade-up" className="font-bold">Pastor Abolaji Adekeye</h4>
                  <p data-aos="fade-up" className="text-sm">Asst. Presiding Pastor</p>
                </div>
              </div>
            </div>
            <div>{/* Social Media */}</div>
          </section>
          </span>

          {/* 3 */}
          <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">

        <section data-aos="fade-up" className=" w-[100%] md:w-[97%] shadow-xl">
          <div className="">
            <div data-aos="fade-up" className="bg-dayo bg-cover h-[350px] md:h-[300px] md:relative rounded-lg ">
              <div className="p-2 md:absolute md:px-4 md:bottom-0">
                <h4 data-aos="fade-up" className="font-bold">Pastor Dayo Olumodeji </h4>
                <p data-aos="fade-up" className="text-sm">Associate Pastor</p>
              </div>
            </div>
          </div>
        </section>
        </span>

        {/* 4 */}
        <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">

        <section data-aos="fade-up" className="shadow-xl w-[100%] md:w-[97%]">
          <div className="">
            <div data-aos="fade-up" className=" bg-balogun bg-cover  h-[350px] md:h-[300px] md:relative rounded-lg ">
              <div className=" p-2 md:absolute md:px-4 md:bottom-0">
                <h4 data-aos="fade-up" className="font-bold">Pastor Toyin Balogun</h4>
                <p data-aos="fade-up" className="text-sm">Associate Pastor</p>
              </div>
            </div>
          </div>
        </section>
        </span>
      </main>
    </div>
  );
};

export default AboutHeader;

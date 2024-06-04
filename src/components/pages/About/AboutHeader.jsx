import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import tunji from "../../../assets/images/tunji.png";
import adekeye from "../../../assets/images/pst-adekeye.png";
import dayo from "../../../assets/images/pst_dayo.png";
import balogun from "../../../assets/images/balogun.png";

const AboutHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="mt-10">
      <h2
        data-aos="fade-up"
        className="text-center font-bold text-2xl md:text-3xl"
      >
        MEET OUR PASTORS
      </h2>
      {/* Pastors Card */}
      <main
        data-aos="fade-up"
        className="grid  grid-cols-1 md:grid-cols-2  md:flex-row w-[80%] mx-auto gap-8 my-10"
      >
        {/* 1 */}
        <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <section
            data-aos="fade-up"
            className=" relative transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[100%] md:w-[97%] shadow-xl"
          >
            <div
              data-aos="fade-up"
              className=" text-white p-2 absolute bottom-0 left-0 z-[100000] md:px-4 md:bottom-0"
            >
              <h4 data-aos="fade-up" className="font-bold">
                Pastor Adetunji Aribasoye
              </h4>
              <p data-aos="fade-up" className="text-sm">
                Presiding Pastor
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="absolute top-0 left-0 bg-black w-full h-full z-[1000] opacity-50 rounded-lg"
            ></div>

            <div
              data-aos="fade-up"
              style={{ backgroundImage: `url(${tunji})` }}
              className=" bg-cover  h-[350px] md:h-[300px] md:relative rounded-lg  "
            ></div>
          </section>
        </span>

        {/* 2 */}
        <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <section
            data-aos="fade-up"
            className="relative w-[100%] md:w-[97%] shadow-xl"
          >
            <div className="p-2 text-white absolute bottom-0 left-0 z-[100000] md:absolute md:px-4 md:bottom-0">
              <h4 data-aos="fade-up" className="font-bold">
                Pastor Abolaji Adekeye
              </h4>
              <p data-aos="fade-up" className="text-sm">
                Asst. Presiding Pastor
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="absolute top-0 left-0 bg-black w-full h-full z-[1000] opacity-50 rounded-lg"
            ></div>

            <div>
              <div
                data-aos="fade-up"
                style={{ backgroundImage: `url(${adekeye})` }}
                className=" bg-cover h-[350px] md:h-[300px] md:relative rounded-lg "
              ></div>
            </div>
            <div>{/* Social Media */}</div>
          </section>
        </span>

        {/* 3 */}
        <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <section
            data-aos="fade-up"
            className=" w-[100%] md:w-[97%] shadow-xl"
          >
            <div className="p-2 text-white absolute left-0 bottom-0 z-[1000000] md:absolute md:px-4 md:bottom-0">
              <h4 data-aos="fade-up" className="font-bold">
                Pastor Dayo Olumodeji{" "}
              </h4>
              <p data-aos="fade-up" className="text-sm">
                Associate Pastor
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="absolute top-0 left-0 bg-black w-full h-full z-[1000] opacity-50 rounded-lg"
            ></div>

            <div className="">
              <div
                data-aos="fade-up"
                style={{ backgroundImage: `url(${dayo})` }}
                className=" bg-cover h-[350px] md:h-[300px] md:relative rounded-lg "
              ></div>
            </div>
          </section>
        </span>

        {/* 4 */}
        <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <section data-aos="fade-up" className="shadow-xl w-[100%] md:w-[97%]">
            <div className=" p-2 absolute bottom-0 left-0 z-[100000] text-white  md:px-4 md:bottom-0">
              <h4 data-aos="fade-up" className="font-bold">
                Pastor Toyin Balogun
              </h4>
              <p data-aos="fade-up" className="text-sm">
                Associate Pastor
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="absolute top-0 left-0 bg-black w-full h-full z-[1000] opacity-50 rounded-lg"
            ></div>

            <div>
              <div
                data-aos="fade-up"
                style={{ backgroundImage: `url(${balogun})` }}
                className=" bg-cover  h-[350px] md:h-[300px] md:relative rounded-lg "
              ></div>
            </div>
          </section>
        </span>
      </main>
    </div>
  );
};

export default AboutHeader;

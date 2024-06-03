import React, { useEffect } from "react";
import { MdOutlineCreditCard } from "react-icons/md";
import { BsCreditCardFill } from "react-icons/bs";
import offering from "../../../assets/images/offering.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Giving = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="mt-5" data-aos="fade-up">
      <h2
        data-aos="fade-up"
        className="text-center font-bold text-2xl pt-10 pb-5 md:text-3xl"
      >
        WANT TO GIVE TO THE <br /> LORD'S WORK?
      </h2>

      <main
        data-aos="fade-up"
        className=" bg-[#fff5eb] w-[80%] mx-auto py-10 mb-5 "
      >
        <div className="flex flex-col md:flex-row justify-evenly mx-auto w-[80%] gap-4">
          <section data-aos="fade-up">
            <img src={offering} alt="" className="h-[250px]" width={400} />
          </section>
          <section className="  p-4 ">
            {" "}
            <h3 data-aos="fade-up" className="font-bold uppercase text-center">
              "God loves a cheerful giver." 2 Corinthians 9:7
            </h3>
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              {" "}
              <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <div
                  data-aos="fade-up"
                  className="  flex flex-col item-center justify-center bg-white shadow-xl my-2 col-span-1 p-2 rounded-lg"
                >
                  <div data-aos="fade-up">
                    <BsCreditCardFill className="text-xl" />
                  </div>
                  <h3 data-aos="fade-up" className="font-bold text-sm">
                    Offering and Tithe
                  </h3>
                  <p data-aos="fade-up" className="text-sm">
                    1024589948 - UBA
                  </p>
                </div>
              </span>
              <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <div
                  data-aos="fade-up"
                  className=" flex flex-col item-center justify-center bg-white shadow-xl my-2 col-span-1 p-2 rounded-lg"
                >
                  <div data-aos="fade-up">
                    <MdOutlineCreditCard className="text-xl" />
                  </div>

                  <h3 data-aos="fade-up" className="font-bold text-sm">
                    Project
                  </h3>
                  <p data-aos="fade-up" className="text-sm">
                    ********** - UBA
                  </p>
                </div>
              </span>
              <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <div
                  data-aos="fade-up"
                  className=" flex flex-col item-center justify-center py-2 bg-white shadow-xl my-2 col-span-1 p-2 rounded-lg"
                >
                  <div data-aos="fade-up">
                    <MdOutlineCreditCard className="text-xl" />
                  </div>

                  <h3 data-aos="fade-up" className="font-bold text-sm">
                    Welfare
                  </h3>
                  <p data-aos="fade-up" className="text-sm">
                    0040115593 - Premium Trust Bank
                  </p>
                </div>
              </span>
              {/* <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <div
                  data-aos="fade-up"
                  className="flex flex-col item-center justify-center py-2 bg-white shadow-xl my-2 col-span-1 p-2 rounded-lg"
                >
                  <div data-aos="fade-up">
                    <BsCreditCardFill className="text-xl" />
                  </div>

                  <div>
                    <h3 data-aos="fade-up" className="font-bold text-sm">
                      Tithe
                    </h3>
                    <p data-aos="fade-up" className="text-sm">
                    1024589948 - UBA
                    </p>
                  </div>
                </div>
              </span> */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Giving;

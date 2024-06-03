import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import book1 from "../../../assets/images/finding-purpose.jpeg";
import book2 from "../../../assets/images/self-discipline.jpeg";
import book3 from "../../../assets/images/yes-you-can.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutBooks = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="mt-[100px]" data-aos="fade-up">
      <h2
        data-aos="fade-up"
        className="text-center font-bold text-2xl md:text-3xl"
      >
        DIVE INTO OUR WEALTH <br /> OF RESOURCES
      </h2>
      {/* <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"> */}

      <main data-aos="fade-up" className="max-w-[80%] mx-auto ">
        {/* 1 */}
        <section
          data-aos="fade-up"
          className="flex flex-col justify-between items-center my-10 gap-4 md:gap-1  md:flex-row"
        >
          <div data-aos="fade-up" className="md:w-[50%]">
            <img
              src={book2}
              alt=""
              className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
              width={350}
            />
          </div>
          <div data-aos="fade-up" className="md:w-[50%] w-[75%]">
            <h4
              data-aos="fade-up"
              className="uppercase font-bold text-xl py-3 pl-2 border-l-[6px] border-[#ffd2a4] rounded"
            >
              Self Discipline for Personal Effectiveness and Success.
            </h4>
            <p data-aos="fade-up" className="text-md text-justify ">
              Extra ordinary success in life is dependent on self-discipline,
              which are long-lasting in nature. We create the biggest obstacles
              to our own success by procrastination, regretting about the past,
              worrying over the future, fearing unknown, working half-heatedly,
              and lack of focus. With self-discipline, we train ourselves to
              give undivided attention to the fixed task at hand rather than
              shifting our focus from one tasks to another so that we can
              achieve any realistic goal of our life. Discipline is the bridge
              between goals and accomplishments.
            </p>
            <div className="my-4 t">
              <NavLink
                data-aos="fade-up"
                className=" text-[#230f0a] bg-[#ffd2a4] border-2 border-[#ffd2a4]  px-6 py-2 text-[16px] rounded-lg hover:bg-transparent hover:border-2 hover:border-[#ffd2a4]"
                to="https://selar.co/4jaz"
                target="_blank"
              >
                Buy Now!
              </NavLink>
            </div>
          </div>
        </section>

        {/* 2 */}

        <section
          data-aos="fade-up"
          className="flex flex-col justify-between items-center my-10 gap-4 md:flex-row"
        >
          <div className="md:w-[50%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img
              data-aos="fade-up"
              src={book3}
              alt=""
              className="rounded-3xl "
              width={350}
            />
          </div>
          <div data-aos="fade-up" className="md:w-[50%] w-[75%]">
            <h4
              data-aos="fade-up"
              className="uppercase font-bold text-xl pl-2 py-3 border-l-[6px] border-[#ffd2a4] rounded"
            >
              Yes You Can!
            </h4>
            <p data-aos="fade-up" className="text-md text-justify">
              This book will help you discover your true self, overcome life’s
              challenges, and get you motivated to creatively deploy your God-
              given talent to fulfill your goals and make a long-lasting impact
              in your sphere of influence. As we journey together in this short
              but inspiring adventure, we would examine certain lives whose
              stories have positively impacted my life, and how they overcame
              their limitations and turned out successful. In this book, you
              will discover that you have no excuse to fail, no excuse to
              complain, no excuse to stay down and quit, even amid challenges.
              The world does not have two of your kind; you are unique and
              important to your generation.
            </p>
            <div className="my-4 ">
              <NavLink
                data-aos="fade-up"
                className="text-[#230f0a] bg-[#ffd2a4] border-2 border-[#ffd2a4] px-6 py-2 text-[16px] rounded-lg hover:bg-transparent hover:border-2 hover:border-[#ffd2a4]"
                to="https://selar.co/pwtl"
                target="_blank"
              >
                Buy Now!
              </NavLink>
            </div>
          </div>
        </section>
        {/* 3 */}
        <section
          data-aos="fade-up"
          className="flex flex-col justify-between items-center my-5 gap-4 md:gap-1  md:flex-row"
        >
          <div className="md:w-[50%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img
              data-aos="fade-up"
              src={book1}
              alt=""
              className="rounded-3xl  "
              width={350}
            />
          </div>
          <div className="md:w-[50%] w-[75%]">
            <h4
              data-aos="fade-up"
              className="uppercase font-bold text-xl py-3 pl-2 border-l-[6px] border-[#ffd2a4] rounded"
            >
              Finding Purpose and Fulfilment
            </h4>
            <p data-aos="fade-up" className="text-md text-justify">
              Living without a purpose is prodigal living; a life that is not
              committed to fulfilling God’s purpose is a wasted life and a great
              loss to God and humanity. Without God, life has no purpose and
              without purpose life has no meaning. Without meaning life has no
              significance or hope. Understanding God’s purpose for your life
              strengthens and empowers you to face, handle or withstand the
              pressures and challenges of life. Purpose gives direction; it
              energizes, and empowers. This book will help and guard you to find
              and fulfill God’s purpose for your life.
            </p>
            <div className="my-4">
              <NavLink
                data-aos="fade-up"
                className="text-[#230f0a] bg-[#ffd2a4] border-2 border-[#ffd2a4]  px-6 py-2 text-[16px] rounded-lg hover:bg-transparent hover:border-2 hover:border-[#ffd2a4]"
                to="https://selar.co/ybvp"
                target="_blank"
              >
                Buy Now!
              </NavLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutBooks;

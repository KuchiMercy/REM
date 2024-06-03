import React from "react";
import AboutHeader from "./AboutHeader";
import AboutBooks from "./AboutBooks";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const About = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Worship",
      "Prayers",
      "The Undiluted Word of God",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div>
      <header className=" bg-prayer bg-cover bg-center w-full h-[500px] md:h-[85vh] relative">
        <div className="bg-gradient-to-r from-black to-transparent  h-[500px] md:h-[85vh]">

        <div className="absolute flex flex-col justify-center mx-7 md:mx-10 items-start  h-[500px] max-w-[75%] md:max-w-[50%] text-white">
          <h5 className="text-md md:text-lg pb-4 font-bold text-[#ffd2a4]">ABOUT US </h5>
          <p className=" font-bold leading-8 md:leading-10  text-4xl md:text-5xl">
            A Place of <span>{typeEffect}</span>
            <br /> 
          </p>
          <p className="pt-4 font-bold">Youthfully, we do our things. <br /> We are loving people. <br /> We are
            possiblitarians!</p>
        </div>
        </div>
       
      </header>
      <AboutHeader/>
      <AboutBooks/>

    
    </div>
  );
};

export default About;

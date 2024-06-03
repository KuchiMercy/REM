import React from 'react'
import PeaceConcert from './PeaceConcert'
import ProjectRoyalty from './ProjectRoyalty'
import SkillUp from './SkillUp'
import { useTypewriter, Cursor } from "react-simple-typewriter";


const Events = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "TURN UP FOR OUR EVENTS",
      "DONATE TO OUR COMMUNITY SERVICE",
      "ENROL FOR OUR TRAINING SESSIONS",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div>
       <header className=" bg-event bg-cover bg-bottom w-full h-[500px] md:h-[85vh] relative">
       <div className="bg-gradient-to-r from-black to-transparent h-[500px] md:h-[85vh]">

        <div className="absolute flex flex-col justify-center mx-7 md:mx-10 items-start  h-[500px] max-w-[70%] md:max-w-[50%] text-white">
          <h5 className="text-4xl md:text-5xl pb-4 font-bold"><span>{typeEffect}</span></h5>
         
        </div>
        </div>
       
      </header>
    
      <PeaceConcert/>
      <ProjectRoyalty/>
      <SkillUp/>
   
    </div>
  )
}

export default Events
import { NavLink } from "react-router-dom";
import HomeOne from "./HomeOne";
import HomeOneData from "../../Data/HomeOneData";
import SpecialHighlights from "./SpecialHighlights";
import JoinUs from "./JoinUs";
import Giving from "./Giving";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import home from "../../../assets/images/coverF.jpg"

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "BECOME A PART OF OUR COMMUNITY",
      "WE'VE BEEN WAITING FOR YOU",
      "YOU ARE ROYALTY",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div>
      {/* Header */}
      <header style={{backgroundImage: `url(${home})`}} className=" bg-cover bg-center w-full h-[500px] md:h-screen relative">
        <div className="bg-gradient-to-r from-black  to-transparent  h-[500px] md:h-screen">
          <div className="absolute flex flex-col justify-center mx-7 md:mx-10 items-start  h-[400px] md:h-[500px] max-w-[70%] md:max-w-[50%] text-white leading-10">
            <h5 className="text-sm md:text-md">
              WELCOME TO{" "}
              <span className="text-[#ffd2a4] font-bold">
                RCCG ROYAL EMBASSY
              </span>{" "}
            </h5>
            <h2 className="font-bold text-4xl md:text-6xl">{typeEffect}</h2>
            <NavLink
              to="/about"
              className=" text-black my-3 px-4 py-3 text-xs bg-[#ffd2a4] rounded-lg"
            >
              LEARN MORE
            </NavLink>
            <p className="text-md tracking-widest">- We are Possible!</p>
          </div>
        </div>
      </header>
      {/* Header ends */}
      <HomeOne HomeOneData={HomeOneData} />
      <SpecialHighlights />
      <JoinUs />
      <Giving />
    </div>
  );
};

export default Home;

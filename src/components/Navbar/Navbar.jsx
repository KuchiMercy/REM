import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/REM-logo1.png";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/", id: 1 },
    { name: "About", link: "/about", id: 2 },
    { name: "Events", link: "/events", id: 3 },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <section className="flex justify-between items-center py-1 px-4 xl:px-10  w-full z-10 bg-[#161722]">
        {/* Logo */}
        <div className="w-28 h-30">
          <img src={logo} className="w-full h-full"  alt="rem-logo" />
        </div>
        {/* Navlinks */}
        <div
          className={`md:flex md:items-center md:pb-0 pb-12 pl-9 md:pl-0 absolute md:static md:z-auto z-[1] left-0 w-full h-screen md:h-fit md:w-auto transition-all bg-[#161722]  duration-700 ease-in ${
            isOpen ? "top-[70px]" : "top-[-1000px]"
          }`}
        >
          <ul>
            {Links.map((link) => (
              <li
                key={link.id}
                className=" md:inline my-2 px-5 py-2 text-right text-sm font-bold text-white hover:text-[#ffd2a4] border-[#ffd2a4] md:focus:border-b-2 "
              >
                <NavLink to={link.link} onClick={() => setIsOpen(!isOpen)}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* ContactUs */}
          <div className="flex justify-center ">
            <NavLink
              to="/contact-us"
              onClick={() => setIsOpen(!isOpen)}
              className="my-2 px-5 py-2 text-sm bg-[#ffd2a4] hover:bg-[#d68b3f] hover:text-white rounded-lg transition-all font-bold ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" cursor-pointer text-2xl md:hidden"
        >
          {isOpen ? (
            <IoClose className="text-[#ffd2a4]" />
          ) : (
            <RiMenu3Fill className="text-[#ffd2a4]" />
          )}
        </div>
      </section>
    </div>
  );
};

export default Navbar;

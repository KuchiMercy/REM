import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import logo from "../../assets/REM-logo.png";
import Newsletter from "../Newsletter/Newsletter";

const Footer = () => {
  const links = [
    { name: "ABOUT US", link: "/about", id: 1 },
    { name: "EVENTS", link: "/events", id: 2 },
    { name: "CONTACT US", link: "/contact-us", id: 3 },
  ];
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setEmail("");
  };
  return (
    <div className="bg-[#161722] px-4">
      <div className="grid mx-10 my-auto py-5 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* 1 */}
        <div>
          <img src={logo} width={150} alt="rem-logo" />
          <p className="text-white text-sm">COPYRIGHT RCCGREM 2024</p>
        </div>
        {/* 2 */}
        <div className="text-white text-sm">
          <p className="font-bold">Quicklinks</p>
          <ul>
            {links.map((link) => (
              <li key={link.id} className="leading-10">
                <NavLink to={link.link}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* 3 */}

        <section className="text-white text-sm">
          <p className="pb-4 font-bold">Connect</p>
          <main className="leading-10">
            <section className="flex items-center gap-2 text-[#ffd2a4] text-xl ">
              <NavLink to="https://web.facebook.com/rccgrem" target="_blank">
                <FaFacebook />
              </NavLink>
              <NavLink to="https://www.instagram.com/rccgrem/" target="_blank">
                <FaInstagramSquare />
              </NavLink>
            </section>
            <p>+234 805 627 9692 | +234 806 782 5713</p>
          </main>
        </section>

        {/* 4 */}
        {/* <Newsletter/> */}
        <section className="text-white text-sm leading-10">
          <p>
            Arowolo Garden(Ayoba FM) <br />
            Fajuyi Ado Ekiti
          </p>
          <p>royalembasyrccgyp9@gmail.com</p>
        </section>
      </div>
    </div>
  );
};

export default Footer;

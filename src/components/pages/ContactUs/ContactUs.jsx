import React from "react";
import ContactBody from "./ContactBody";
import contact from "../../../assets/images/contact-cover.png";

const ContactUs = () => {
  return (
    <div>
      <header
        style={{ backgroundImage: `url(${contact})` }}
        className=" bg-cover bg-center w-full h-screen md:h-[85vh] relative"
      >
        <div className="absolute flex flex-col justify-center mx-7 md:mx-10 items-start  h-screen max-w-[70%] md:max-w-[50%] text-white">
          <h5 className="text-4xl md:text-5xl pb-4 font-bold">
            GET IN TOUCH WITH RCCG ROYAL EMBASSY{" "}
          </h5>
        </div>
      </header>

      <ContactBody />
    </div>
  );
};

export default ContactUs;

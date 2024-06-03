import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BounceLoader } from 'react-spinners';

const ContactBody = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      name: name,
      email: email,
      message: message,
    };
    try {
      const response = await fetch("https://formspree.io/f/mbjneebw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message Sent!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(
          "Oops! There was a problem with your submission. Please try again."
        );
      }
    } catch (error) {
      toast.error(
        "Oops! There was a problem with your submission. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <main
        data-aos="fade-up"
        className="bg-[#f5f2f0] flex flex-col justify-evenly items-center md:flex-row py-10 gap-6 md:gap-0"
      >
        {/* 1 */}
        <section data-aos="fade-up">
          <h3 data-aos="fade-up" className="font-bold py-4">
            CONTACT FORM:
          </h3>
          <form onSubmit={handleSubmit} data-aos="fade-up">
            <div>
              <input
                data-aos="fade-up"
                type="text"
                name="Name"
                className="py-3 px-10 mb-2 rounded outline-none"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                data-aos="fade-up"
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                className="py-3 px-10 mb-2 rounded outline-none"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                className="py-3 px-10 mb-2 rounded outline-none"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div
              data-aos="fade-up"
              className="flex justify-center bg-[#ffd2a4] my-2 py-2 text-sm rounded "
            >
              <button data-aos="fade-up" type="submit" disabled={loading}>
                {loading ? <BounceLoader size={20} /> : 'Send Message'}
              </button>
            </div>
          </form>
        </section>
        {/* 2 */}
        <section data-aos="fade-up">
          <div data-aos="fade-up" className="mb-3">
            <p data-aos="fade-up" className="text-[12px]">
              Address
            </p>
            <h3 data-aos="fade-up" className="font-bold">
              AROWOLO GARDEN (AYOBA FM) <br /> FAJUYI ADO-EKITI
            </h3>
          </div>
          <div data-aos="fade-up" className="mb-3">
            <p data-aos="fade-up" className="text-[12px]">
              Contact Details
            </p>
            <h3 data-aos="fade-up" className="font-bold">
              (234) 805 627 9692 <br /> (234) 806 782 5713 <br />{" "}
              royalembasyrccgyp9@gmail.com
            </h3>
          </div>
          <div data-aos="fade-up" className="mb-3">
            <p data-aos="fade-up" className="text-[12px]">
              Find us here
            </p>
            <section
              data-aos="fade-up"
              className="flex items-center gap-2 text-black text-xl "
            >
              <NavLink to="https://web.facebook.com/rccgrem" target="_blank">
                <FaFacebook />
              </NavLink>
              <NavLink to="https://www.instagram.com/rccgrem/" target="_blank">
                <FaInstagramSquare />
              </NavLink>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactBody;

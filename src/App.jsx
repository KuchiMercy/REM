import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Events from "./components/pages/Events/Events";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <ScrollToTopButton/>
      <Footer />
    </>
  );
}

export default App;

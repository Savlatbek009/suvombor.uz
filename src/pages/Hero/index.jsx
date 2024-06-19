import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import "./style.scss";
// import About from "../../components/About";
import Photos from "../../components/Photos";
// import Service from "../../components/Service";
import Contact from "../../components/Contact";
import Call from "../../components/fixeds/call";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="container">
          <h1>Suvombor - Dam olish maskani</h1>
          <br />
          <center>
            <a href="#xizmatlar">Xizmatlar</a>
            <a href="#contact">{`Bog'lanish`}</a>
          </center>
          <center>
            <h1
              onClick={() => {
                window.scrollTo({
                  top: 600,
                  behavior: "smooth",
                });
              }}
            >
              <MdKeyboardDoubleArrowDown />
            </h1>
          </center>
        </div>
      </section>
      {/* <About /> */}
      <Photos />
      <Call />
      {/* <Service /> */}
      <Contact />
    </>
  );
};

export default Hero;

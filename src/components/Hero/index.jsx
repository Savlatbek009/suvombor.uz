import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import "./style.scss";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <h1>Suvombor - Dam olish maskani</h1>
        <center>
          <button>Xizmatlar</button>
          <button>{`Bog'lanish`}</button>
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
  );
};

export default Hero;

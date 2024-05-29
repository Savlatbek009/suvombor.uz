import { FaTelegramPlane } from "react-icons/fa";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import InputMask from "react-input-mask";

import "./style.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__row">
          <div className="contact__row__side contact__row__side--left">
            <form name="register-form">
              <div className="register-input">
                <input name="firstName" type="text" required />
                <label>Ismingiz</label>
              </div>
              <div className="register-input">
                <InputMask
                  className="register-mask-input"
                  name="phoneNumber"
                  mask={`+\\9\\98-99-999-99-99`}
                  placeholder="Telefon raqam"
                  maskChar=""
                  defaultValue="+998-("
                  type="text"
                />
                {/* <label>Your Phone</label> */}
              </div>
              <button className="register-form__button">{`Bog'lanish`}</button>
            </form>
          </div>
          <div className="contact__row__side contact__row__side--right">
            <div className="contact__content">
              <iframe
                src="https://yandex.ru/map-widget/v1/-/CDfmBHPq"
                width="100%"
                height="300px"
              ></iframe>
              <br />
              <div className="contact__details">
                <a href="">
                  <a target="_blank" href="https://t.me/suvomborurgut">
                    <FaTelegramPlane />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/suvomboruz"
                  >
                    <BsInstagram />
                  </a>
                  <a target="_blank" href="tel: +998889175444">
                    <BsFillTelephoneFill />
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

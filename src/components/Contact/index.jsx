import { FaTelegramPlane } from "react-icons/fa";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import InputMask from "react-input-mask";

import "./style.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__row">
          {/* <div className="contact__row__side contact__row__side--left">
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
              </div>
              <button className="register-form__button">{`Bog'lanish`}</button>
            </form>
          </div> */}
          <div className="contact__row__side contact__row__side--right">
            <div className="contact__content">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1015.1596444808622!2d67.02776071462705!3d39.41316167659736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4cc300338b3bb5%3A0xa5104166e4d49900!2sKora%20Tepa%20Suv%20Ombori!5e0!3m2!1sen!2s!4v1717065751374!5m2!1sen!2s"
                width="100%"
                height="300px"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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

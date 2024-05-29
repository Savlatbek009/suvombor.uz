import "./style.scss";

const Contact = () => {
  return (
    <section id="contact">
      <div className="conatiner">
        <h3>Boshlanish</h3>
        <h1>
          Bizning xizmatlarimizdan <br /> foydalaning!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          molestiae.
        </p>
        <div>
          <form
            action="
            ">
            <input placeholder="Familiya*" />
            <input type="text" placeholder="Ism*" />
            <br />
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Telefon raqam*"
            />
            <input type="text" id="fname" name="fname" placeholder="Manzil*" />
          </form>
          <div className="contact__btn">
            <button>Jo`natish</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

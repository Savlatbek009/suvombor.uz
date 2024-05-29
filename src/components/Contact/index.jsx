import "./style.scss";

const Contact = () => {
  return (
    <section id="contact">
      <div className="conatiner">
        <h3>Bog`lanish</h3>
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
            <button
              style={{
                background: "#f18a11",
                border: "none",
                color: "#fff",
                padding: "10px 10px",
                borderRadius: "4px",
                marginBlock: "20px",
                cursor: "pointer",
              }}>
              Jo`natish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

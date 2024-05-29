import "./style.scss";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__total">
          <div className="about__left">
            <img
              src="https://dailywildlifephoto.nathab.com/photography-guide/wp-content/uploads/2016/05/alaska-1-940x627.jpg"
              alt=""
            />
          </div>
          <div className="about__right">
            <div className="head__top">
              <h2>Biz haqimizda</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat, atque.
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              neque nesciunt, tempora cum obcaecati ad impedit laudantium atque
              explicabo, reprehenderit illum eum possimus doloribus dolorem
              laboriosam consectetur sequi illo ipsum. Repellat vitae nisi
              neque, ratione laborum quisquam eius soluta officiis?
            </p>
            <div className="about__button">
              <button>Ko`proq</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

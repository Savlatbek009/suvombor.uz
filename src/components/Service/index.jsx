import "./style.scss";

const Service = () => {
  return (
    <section id="service">
      <div className="container">
        <h1>Bizning xizmatlar</h1>
        <div className="service__total">
          <div className="service__card">
            <div>
              <img
                src="https://media.istockphoto.com/id/467376420/photo/portovenere-harbour-liguria-italy.jpg?s=612x612&w=0&k=20&c=XUf76dcP_t0OezjWdgze3okiolxyc05I-oUj-8V0Op8="
                alt=""
              />
            </div>
            <div>
              <h2>Qayiq xizmatlari</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                deserunt explicabo a, numquam illum eius optio minus quis quos
                quidem incidunt nesciunt nulla iste sapiente ratione harum sit
                obcaecati tempore.
              </p>
              <div>
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
                  Buyurta berish
                </button>
              </div>
            </div>
          </div>

          <div className="service__card">
            <div>
              <h2>Atraksionlar</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                deserunt explicabo a, numquam illum eius optio minus quis quos
                quidem incidunt nesciunt nulla iste sapiente ratione harum sit
                obcaecati tempore.
              </p>
              <div>
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
                  Buyurta berish
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://attraktsiony.uz/wp-content/uploads/2019/11/12.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="service__card">
            <div>
              <img src="https://stat.uz/images/maskan_090622_ici.jpg" alt="" />
            </div>
            <div>
              <h2>Dam olish kamchanlarini</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                deserunt explicabo a, numquam illum eius optio minus quis quos
                quidem incidunt nesciunt nulla iste sapiente ratione harum sit
                obcaecati tempore.
              </p>
              <div>
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
                  Buyurta berish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

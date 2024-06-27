import "./style.scss";
const Photos = () => {
  return (
    <section id="xizmatlar">
      <center>
        <h1>Xizmatlar</h1>
      </center>
      <div className="container">
        <div className="carausel__total">
          <div className="photos__card">
            <img
              src="/qayiqlar.jpg"
              alt=""
            />
            <div>
              <h1>Qayiqlar</h1>
              <p>
                Bizda qayiq xizmatlari mavjud bo`lib, siz u xizmatlardan bemalol foydalanishiz mumkin!
              </p>
            </div>
          </div>
          <div className="photos__card card-reverse">
            <img
              src="/kamchanlar.jpg"
              alt=""
            />
            <div>
              <h1>Dam olish kamchanlari</h1>
              <p>
                Bizda dam olish kamchanlari mavjud va siz u xizmatlardan bemalol foydalanishiz mumkin!
              </p>
            </div>
          </div>
          <div className="photos__card">
            <img
              src="/atrakseonlar.jpg"
              alt=""
            />
            <div>
              <h1>Atraksionlar</h1>
              <p>
                Bizda turli xil atrakseonlar mavjud bo`lib siz istagan turidan foydalanishingiz mumkin
              </p>
            </div>
          </div>
          <div className="photos__card card-reverse">
            <img
              src="/suv.jpg"
              alt=""
            />
            <div>
              <h1>Suzish havzalari</h1>
              <p>
                Bizda suzish havzalari mavjud va siz ulardan istaganingizcha foydalanish huquqiga egasiz!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photos;

// import Carousel from "react-multi-carousel";
// import Carousel from "react-multi-carousel";
import Slider from "react-slick";

import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Photos = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="photos">
      <div className="container">
        <Slider {...settings}>{/* karausel bolishi keredi */}</Slider>
        <div className="carausel__total">
          <div className="photos__card">
            <img
              src="https://media.istockphoto.com/id/467376420/photo/portovenere-harbour-liguria-italy.jpg?s=612x612&w=0&k=20&c=XUf76dcP_t0OezjWdgze3okiolxyc05I-oUj-8V0Op8="
              alt=""
            />
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
                id!
              </p>
            </div>
          </div>
          <div className="photos__card">
            <img
              src="https://media.istockphoto.com/id/467376420/photo/portovenere-harbour-liguria-italy.jpg?s=612x612&w=0&k=20&c=XUf76dcP_t0OezjWdgze3okiolxyc05I-oUj-8V0Op8="
              alt=""
            />
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
                id!
              </p>
            </div>
          </div>
          <div className="photos__card">
            <img
              src="https://media.istockphoto.com/id/467376420/photo/portovenere-harbour-liguria-italy.jpg?s=612x612&w=0&k=20&c=XUf76dcP_t0OezjWdgze3okiolxyc05I-oUj-8V0Op8="
              alt=""
            />
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
                id!
              </p>
            </div>
          </div>
          <div className="photos__card">
            <img
              src="https://media.istockphoto.com/id/467376420/photo/portovenere-harbour-liguria-italy.jpg?s=612x612&w=0&k=20&c=XUf76dcP_t0OezjWdgze3okiolxyc05I-oUj-8V0Op8="
              alt=""
            />
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
                id!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photos;

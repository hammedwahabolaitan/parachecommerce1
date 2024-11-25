import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      title: "Men Fashion",
      subtitle: "Welcome to Fashion",
      href: "/left-sidebar/collection",
      image: "src/assets/img/1 (1).jpg", // image path
    },
    {
      title: "Women Fashion",
      subtitle: "Welcome to Fashion",
      href: "/left-sidebar/collection",
      image: "src/assets/img/2 (1).jpg", // image path
    },
  ];

  return (
    <section className="relative p-0 mb-10 z-50">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div
              className={`home ${
                index % 2 === 0 ? 'home2' : 'home1'
              } text-center bg-gray-200 h-[80vh]`}
            >
              {slide.image && (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover absolute top-0 left-0"
                />
              )}
              <div className="container mx-auto flex justify-start items-center h-full relative z-10">
                <div className="slider-contain bg-opacity-75 bg-white p-6 rounded-lg shadow-lg text-center">
                  <h4 className="text-lg text-gray-600">{slide.subtitle}</h4>
                  <h1 className="text-4xl font-bold text-gray-900 mt-2 uppercase">
                    {slide.title}
                  </h1>
                  <a
                    className="btn btn-solid mt-4 inline-block bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800"
                    href={slide.href}
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

// Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-arrow bg-white text-black p-4 rounded-full absolute right-4 top-1/2 transform -translate-y-1/2 z-20`}
      style={style}
      onClick={onClick}
    >
      Next
    </button>
  );
};

// Previous Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-arrow bg-white text-black p-4 rounded-full absolute left-4 top-1/2 transform -translate-y-1/2 z-20`}
      style={style}
      onClick={onClick}
    >
      Previous
    </button>
  );
};

export default Hero;

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      title: "men fashion",
      subtitle: "welcome to fashion",
      href: "/left-sidebar/collection",
      image: "src/assets/img/14.jpg ", // image path
      
    },
    {
      title: "women fashion",
      subtitle: "welcome to fashion",
      href: "/left-sidebar/collection",
      image: "src/assets/img/15.jpg", //  image path
    },
    {
      title: "women fashion",
      subtitle: "welcome to fashion",
      href: "/left-sidebar/collection",
      image: "src/assets/img/16.jpg", //  image path
    },
  ];


//   const Img ={
// image:'src/assets/img/sub-banner1.5d5f9c6f.jpg'

//   }



  return (
    <section className="p-0 mb-64">
     image.png <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className={`home ${index % 2 === 0 ? 'home2' : 'home1'} text-center bg-gray-200 py-10  h-[80vh]`}>
              {slide.image && (
                <img src={slide.image} alt={slide.title} className="w-full  object-cover absolute"/>
              )}
              <div className="container mx-auto flex justify-start mt-24 ">
                <div className="flex justify-center relative">
                  <div className="slider-contain  bg-opacity-50 p-4 rounded-lg">
                    <h4 className="text-lg text-gray-600">{slide.subtitle}</h4>
                    <h1 className="text-4xl font-bold text-gray-900 mt-2 uppercase">{slide.title}</h1>
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
      className={`${className} slick-arrow bg-blue-900 text-black p-7 rounded-xl absolute right-4 top-1/2 transform -translate-y-1/2 z-1088`}
      style={{ ...style }}
      onClick={onClick}
    >
      Next
    </button>
  );
};

//  Previous Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-arrow bg-black text-white p-7 rounded-full absolute left-4 top-1/2 transform -translate-y-1/2 z-10`}
      style={{ ...style }}
      onClick={onClick}
    >
      Previous
    </button>




  );
  <div key={index} className="relative">
  {Img.map((slide, index) => (
          <div key={index} className="relative">
            <div className={`home ${index % 2 === 0 ? 'home2' : 'home1'} text-center bg-gray-200 py-10  h-[80vh]`}>
              {Img.image && (
                <img src={Img.image} alt={Img.title} className="w-full  object-cover absolute"/>
              )}
              <div className="container mx-auto flex justify-start mt-24 ">
               
              </div>
            </div>
          </div>
        ))}

{/* <img src="src/assets/img/sub-banner1.5d5f9c6f.jpg" alt="" /> */}
{/* <img src="src/assets/img/sub-banner2.3b2448f3.jpg" alt="" /> */}
</div>
};



export default Hero;






<div class="contain-banner"><div><h4>10% off</h4><h2>men</h2></div></div>
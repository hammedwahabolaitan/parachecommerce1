import React from 'react';
import Slider from 'react-slick';
import Footer from '../pages/footer';
import Header from './Header';

const ProductPage = () => {
    return (
       <div>
              <Header/>

         <section className="py-8">
            <div className="container mx-auto">
                <div className="flex">
                    {/* Filter Section */}
                    <div className="w-1/4 p-4">
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="font-bold mb-2">Brand</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-blue-500">Clothing</a></li>
                                <li><a href="#" className="text-blue-500">Bags</a></li>
                                <li><a href="#" className="text-blue-500">Footwear</a></li>
                                <li><a href="#" className="text-blue-500">Watches</a></li>
                                <li><a href="#" className="text-blue-500">Accessories</a></li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-bold">Free Shipping</h4>
                            <p>Free shipping worldwide</p>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-bold">24 X 7 Service</h4>
                            <p>Online service for 24 x 7</p>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-bold">Festival Offer</h4>
                            <p>New online special festival offer</p>
                        </div>
                    </div>

                    {/* Product Thumbnail in the Middle */}
                    <div className="w-2/4 p-4">
                        <ProductThumbnail />
                    </div>

                    {/* Main Product Section */}
                    <div className="w-[40vw] p-4">
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-xl font-semibold mb-4">Belted Dress</h2>
                            <h4 className="text-lg line-through">$185 <span className="text-green-500">40% off</span></h4>
                            <h3 className="text-2xl">$111</h3>
                            <div className="mt-4 flex space-x-2">
                                <span className="w-8 h-8 bg-green-500 rounded-full cursor-pointer"></span>
                                <span className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer"></span>
                                <span className="w-8 h-8 bg-red-500 rounded-full cursor-pointer"></span>
                            </div>
                            <div className="mt-4">
                                <h6>Select Size</h6>
                                <div className="flex space-x-2">
                                    <button className="border rounded px-2 py-1">S</button>
                                    <button className="border rounded px-2 py-1">M</button>
                                    <button className="border rounded px-2 py-1">L</button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h6>Quantity</h6>
                                <div className="flex items-center space-x-2">
                                    <button className="border rounded px-2 py-1">-</button>
                                    <input type="number" className="border text-center w-10" value="10" />
                                    <button className="border rounded px-2 py-1">+</button>
                                </div>
                            </div>
                            <div className="mt-4 flex space-x-4">
                                <button className="bg-blue-500 text-white rounded px-4 py-2">Add to Cart</button>
                                <button className="bg-green-500 text-white rounded px-4 py-2">Buy Now</button>
                            </div>
                            <div className="mt-4">
                                <h6>Product Details</h6>
                                <p>This is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<Footer />

       </div>
    );
};

// ProductThumbnail Component
const ProductThumbnail = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settingsNav = {
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  return (
   <div>
     <div className="product-thumbnail">
      {/* Main Slider */}
      <Slider {...settings} className="product-slick w-[30vw] ">
        <div className="slick-slide">
          <img
            src="src/assets/img/22.jpg"
            alt="olive"
            className="w-[30vw] img-fluid"
          />
        </div>
        <div className="slick-slide">
          <img
            src="src/assets/img/15.jpg"
            alt="navy"
            className="w-[30vw] img-fluid"
          />
        </div>
        <div className="slick-slide">
          <img
            src="src/assets/img/14.jpg"
            alt="pink"
            className="w-[30vw] img-fluid"
          />
        </div>
        <div className="slick-slide">
          <img
            src="src/assets/img/13.jpg"
            alt="pink"
            className="w-[30vw] img-fluid"
          />
        </div>
      </Slider>

      {/* Thumbnail Nav */}
      <Slider {...settingsNav} className="slider-nav mt-4 w-[30vw]">
        <div className="slick-slide">
          <img
            src="src/assets/img/22.jpg"
            alt="olive"
            className="h-20"
          />
        </div>
        <div className="slick-slide">
          <img
            src="src/assets/img/13.jpg"
            alt="navy"
            className="h-20"
          />
        </div>
        <div className="slick-slide">
          <img
            src="src/assets/img/15.jpg"
            alt="pink"
            className="h-20"
          />
        </div>
        <div className="slick-slide">
          <img
            src="src/assets/img/14.jpg"
            alt="pink"
            className="h-20"
          />
        </div>
      </Slider>

    </div>
   </div>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
    type="button"
      className={`${className} slick-next bg-gray-800 hover:bg-gray-900 text-white rounded-full p-2`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      >
      Next
    </button>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
    type="button"
      className={`${className} slick-prev bg-gray-800 hover:bg-gray-900 text-white rounded-full p-2`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      >
      Prev
    </button>
  );
};

export default ProductPage;

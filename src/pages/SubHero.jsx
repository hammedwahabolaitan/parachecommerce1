import React from 'react';

const  SubHero = () => {
  return (
    <section className="my-5">
      <div className="container mx-auto px-4">
        <div className="flex  gap-5">
          {/* First Banner */}
          <div className="w-full md:w-1/2">
            <a href="/">
              <div className="collection-banner relative group">
                <img
                  src="src/assets/img/sub-banner1.5d5f9c6f.jpg"
                  alt="Men's Collection"
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="contain-banner absolute inset-0 flex items-center justify-end p-5  to-transparent rounded-lg">
                  <div className="text-right">
                    <h4 className="text-2xl md:text-4xl text-red-600">10% off</h4>
                    <h2 className="text-5xl md:text-7xl font-bold uppercase text-white">Men</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          {/* Second Banner */}
          <div className="w-full md:w-1/2">
            <a href="/left-sidebar/collection">
              <div className="collection-banner relative group">
                <img
                  src="src/assets/img/sub-banner2.3b2448f3.jpg"
                  alt="Women's Collection"
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="contain-banner absolute inset-0 flex items-center justify-end p-5  to-transparent rounded-lg">
                  <div className="text-right">
                    <h4 className="text-2xl md:text-4xl text-red-600">10% off</h4>
                    <h2 className="text-5xl md:text-7xl font-bold uppercase text-white">Women</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHero;


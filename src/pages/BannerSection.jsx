import React from 'react';

const BannerSection = () => {
  return (
    <section className="my-10">
      <div className="relative bg-cover bg-blend-multiply bg-blue-400 text-center h-[90vh] bg-opacity-65 bg-fixed" style={{ backgroundImage: "url('src/assets/img/1.jpg')" }}>
        <div className="container mx-auto">
          <div className="flex justify-start">
            <div>
              <div className="mt-52">
                <h2 className="text-6xl font-bold text-red-600">2023</h2>
                <h3 className="text-6xl mt-2 uppercase font-semibold text-white">fashion trends</h3>
                <h4 className="text-3xl mt-4 uppercase text-gray-200">special offer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;

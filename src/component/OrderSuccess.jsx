import React from "react";

const OrderSuccess = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2">
              <h2 className="text-2xl font-bold">Order Success</h2>
            </div>
            <div className="w-full sm:w-1/2">
              <nav aria-label="breadcrumb" className="text-right">
                <ol className="inline-flex space-x-2 text-gray-600">
                  <li>
                    <a href="/" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li> / </li>
                  <li className="text-gray-500">Order Success</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="text-green-500">
              <i className="fas fa-check-circle text-6xl mb-4"></i>
            </div>
            <h2 className="text-4xl font-bold">Thank You</h2>
            <p className="mt-4 text-lg">
              Payment is successfully processed, and your order is on the way.
            </p>
            <p className="text-lg font-medium">Transaction ID: 267676GHERT105467</p>
          </div>
        </div>
      </section>

      <div>
      {/* Order Details Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {/* Product Order Details */}
            <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Your Order Details</h3>
                <div className="flex flex-wrap">
                  <div className="w-1/4 p-2">
                    <img
                      src="src/assets/img/Wach1.jpg"
                      alt="Product"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-1/4 p-2">
                    <div>
                      <h4 className="font-semibold">Product Name</h4>
                      <h5>Crop Top</h5>
                    </div>
                  </div>
                  <div className="w-1/4 p-2">
                    <div>
                      <h4 className="font-semibold">Quantity</h4>
                      <h5>1</h5>
                    </div>
                  </div>
                  <div className="w-1/4 p-2">
                    <div>
                      <h4 className="font-semibold">Price</h4>
                      <h5>$121</h5>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <ul className="list-disc pl-5">
                    <li className="flex justify-between py-2">
                      Subtotal <span>$72.6</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">
                    Total <span className="font-normal">$72.6</span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Order Summary and Shipping Address */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-white p-6 shadow-md rounded-lg">
                <div className="flex flex-wrap">
                  <div className="w-full sm:w-1/2 p-2">
                    <h4 className="text-xl font-bold mb-2">Summary</h4>
                    <ul className="list-disc pl-5">
                      <li>Order ID: 5563853658932</li>
                      <li>Order Date: October 22, 2023</li>
                      <li>Order Total: $907.28</li>
                    </ul>
                  </div>
                  <div className="w-full sm:w-1/2 p-2">
                    <h4 className="text-xl font-bold mb-2">Shipping Address</h4>
                    <ul className="list-disc pl-5">
                      <li>Gerg Harvell</li>
                      <li>568, Suite Ave.</li>
                      <li>Australia, 235153</li>
                      <li>Contact No. 987456321</li>
                    </ul>
                  </div>
                  <div className="w-full p-2">
                    <h4 className="text-xl font-bold mb-2">Payment Method</h4>
                    <p>
                      Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net banking acceptance subject to device availability.
                    </p>
                  </div>
                  <div className="w-full p-2">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h3 className="text-xl font-bold mb-2">Expected Date of Delivery</h3>
                      <h2 className="text-2xl font-semibold">October 22, 2023</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="text-green-500 mb-4">
              <i className="fas fa-check-circle text-6xl"></i>
            </div>
            <h2 className="text-3xl font-bold mb-4">Thank You</h2>
            <p className="text-lg mb-2">Payment is successfully processed, and your order is on the way.</p>
            <p className="text-lg font-medium">Transaction ID: 267676GHERT105467</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};
export default OrderSuccess;

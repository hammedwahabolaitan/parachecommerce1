import React from "react";

const Checkout = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-bold">Checkout</h2>
            </div>
            <nav aria-label="breadcrumb" className="text-gray-600">
              <ol className="flex space-x-2">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li> / </li>
                <li className="text-gray-500">Checkout</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Checkout Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <div className="lg:flex lg:space-x-10">
            {/* Billing Details */}
            <div className="lg:w-1/2">
              <h3 className="text-lg font-semibold mb-6">Billing Details</h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-gray-700">Country</label>
                    <select
                      name="country"
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option>India</option>
                      <option>South Africa</option>
                      <option>United States</option>
                      <option>Australia</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-gray-700">Address</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Street address"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-gray-700">Town/City</label>
                    <input
                      type="text"
                      name="city"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-gray-700">State / County</label>
                    <input
                      type="text"
                      name="state"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-gray-700">Postal Code</label>
                    <input
                      type="text"
                      name="pincode"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="col-span-2">
                    <input type="checkbox" id="create_account" />
                    <label htmlFor="create_account" className="ml-2">
                      Create An Account?
                    </label>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="border p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-6">Your Order</h3>
                <div className="border-b pb-4 mb-4">
                  <div className="flex justify-between">
                    <span>Crop Top x 1</span>
                    <span>$72.6</span>
                  </div>
                </div>
                <div className="border-b pb-4 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$72.6</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <div className="space-y-2">
                      <div>
                        <input type="checkbox" id="free-shipping" />
                        <label htmlFor="free-shipping" className="ml-2">
                          Free Shipping
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" id="local-pickup" />
                        <label htmlFor="local-pickup" className="ml-2">
                          Local Pickup
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b pb-4 mb-4">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>$72.6</span>
                  </div>
                </div>

                {/* Payment Options */}
                <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input type="radio" name="payment-method" id="cod" defaultChecked />
                    <label htmlFor="cod" className="ml-2">
                      COD
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="payment-method" id="paypal" />
                    <label htmlFor="paypal" className="ml-2">
                      PayPal
                      <img
                        src="/_next/static/media/paypal.12ad09cd.png"
                        alt="PayPal"
                        className="inline-block w-6 h-6 ml-2"
                      />
                    </label>
                  </div>
                </div>

                <div className="text-right mt-6">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;

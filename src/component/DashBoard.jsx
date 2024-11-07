import React from 'react';
import Footer from '../pages/footer';

const DashboardPage = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Dashboard</h2>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="flex space-x-2 text-gray-600">
                <li className="breadcrumb-item">
                  <a href="/" className="hover:text-gray-900">Home</a>
                </li>
                <li className="breadcrumb-item text-gray-500">Dashboard</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Dashboard Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
              <div className="bg-white shadow-md rounded-lg p-4">
                <div className="mb-4">
                  <span className="cursor-pointer text-gray-500 hover:text-gray-900 flex items-center">
                    <i className="fa fa-angle-left mr-2"></i> Back
                  </span>
                </div>
                <ul className="space-y-4">
                  <li className="font-bold text-blue-500"><a href="#">Account Info</a></li>
                  <li><a href="#" className="hover:text-blue-500">Address Book</a></li>
                  <li><a href="#" className="hover:text-blue-500">My Orders</a></li>
                  <li><a href="#" className="hover:text-blue-500">My Wishlist</a></li>
                  <li><a href="#" className="hover:text-blue-500">Newsletter</a></li>
                  <li><a href="#" className="hover:text-blue-500">My Account</a></li>
                  <li><a href="#" className="hover:text-blue-500">Change Password</a></li>
                  <li className="text-red-500"><a href="#">Log Out</a></li>
                </ul>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="w-full lg:w-3/4">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-6">My Dashboard</h2>
                <div className="mb-6">
                  <p className="text-lg font-medium">Hello, MARK JECNO!</p>
                  <p>
                    From your My Account Dashboard, you have the ability to view a snapshot of your
                    recent account activity and update your account information. Select a link
                    below to view or edit information.
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4">Account Information</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-semibold">Contact Information</h4>
                        <a href="#" className="text-blue-500 hover:underline">Edit</a>
                      </div>
                      <div className="text-gray-700">
                        <p>MARK JECNO</p>
                        <p>MARk-JECNO@gmail.com</p>
                        <a href="#" className="text-blue-500 hover:underline">Change Password</a>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-semibold">Newsletters</h4>
                        <a href="#" className="text-blue-500 hover:underline">Edit</a>
                      </div>
                      <p className="text-gray-700">You are currently not subscribed to any newsletter.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4">Address Book</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold">Default Billing Address</h4>
                      <p className="text-gray-700">You have not set a default billing address.</p>
                      <a href="#" className="text-blue-500 hover:underline">Edit Address</a>
                    </div>

                    <div>
                      <h4 className="font-semibold">Default Shipping Address</h4>
                      <p className="text-gray-700">You have not set a default shipping address.</p>
                      <a href="#" className="text-blue-500 hover:underline">Edit Address</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />


    </>
  );
};

export default DashboardPage;

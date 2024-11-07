import React, { useEffect, useState } from 'react';



const RegisterPage = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Register</h2>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="flex space-x-2 text-gray-600">
                <li>
                  <a href="/" className="hover:text-gray-900">Home</a>
                </li>
                <li className="text-gray-500">Register</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Register Form Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <div className="w-full">
            <h3 className="text-2xl font-semibold mb-6">Create Account</h3>
            <div className="bg-white shadow-md rounded-lg p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fname" className="block text-gray-700">First Name</label>
                    <input
                      id="fname"
                      type="text"
                      placeholder="First Name"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="lname" className="block text-gray-700">Last Name</label>
                    <input
                      id="lname"
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <a href="#" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                    Create Account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;

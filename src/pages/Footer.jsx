
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#c7524ac0] py-10">
      {/* Upper Footer */}
      <div className="container mx-auto px-4">
        <section className="border-b border-gray-300 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Subscribe Section */}
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h4 className="text-xl font-semibold">KNOW IT ALL FIRST!</h4>
              <p className="text-gray-600">
                Never Miss Anything From Multikart By Signing Up To Our Newsletter.
              </p>
            </div>
            {/* Subscribe Form */}
            <div className="md:w-1/2 flex items-center justify-end">
              <form className="flex">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded px-4 py-2 w-full md:w-auto"
                />
                <button
                  type="submit"
                  className="ml-2 px-4 py-3 bg-[blue] text-white rounded hover:bg-gray-600"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Main Footer */}
        <section className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h4 className="text-lg font-semibold">About</h4>
              <div className="mt-4">
                <img
                  src="src/assets/img/logo.png"
                  alt="Multikart"
                  className="w-24"
                />
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
                <div className="flex mt-4 space-x-3">
                  {/* Social Icons */}
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[blue] hover:text-gray-900">
                    <i className="pi pi-facebook"></i>
                  </a>
                  <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer" className="text-[blue] hover:text-gray-900">
                    <i className="pi pi-google-plus"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[blue] hover:text-gray-900">
                    <i className="pi pi-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[blue] hover:text-gray-900">
                    <i className="pi pi-instagram"></i>
                  </a>
                  <a href="https://rss.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                    <i className="pi pi-rss"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* My Account Section */}
            <div>
              <h4 className="text-lg font-semibold">My Account</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="/shop/left_sidebar" className="text-gray-600 hover:text-gray-900">Womens</a></li>
                <li><a href="/shop/left_sidebar" className="text-gray-600 hover:text-gray-900">Clothing</a></li>
                <li><a href="/shop/left_sidebar" className="text-gray-600 hover:text-gray-900">Accessories</a></li>
                <li><a href="/shop/left_sidebar" className="text-gray-600 hover:text-gray-900">Featured</a></li>
              </ul>
            </div>

            {/* Why We Choose Section */}
            <div>
              <h4 className="text-lg font-semibold">Why We Choose</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Shipping & Return</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Secure Shopping</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Gallery</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Affiliates</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contacts</a></li>
              </ul>
            </div>

            {/* Store Information Section */}
            <div>
              <h4 className="text-lg font-semibold">Store Information</h4>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li><i className="pi pi-map-marker"></i> Multikart Demo Store, Demo store Ibadan 345-659</li>
                <li><i className="pi pi-phone"></i> Call Us: 08107450970</li>
                <li><i className="pi pi-envelope"></i> Email Us: <a href="mailto:Support@Fiot.com" className="hover:text-gray-900">Support@Fiot.com</a></li>
                <li><i className="pi pi-fax"></i> Fax: 123456</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">
              &copy; 2023-24 ThemeForest powered by <a href=""><span className='text-[#3030e0dc] uppercase'> Wabtech</span></a>
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#"><img src="src/assets/img/visa.png" alt="Visa" className="w-10" /></a>
              <a href="#"><img src="src/assets/img/mastercard.png" alt="Mastercard" className="w-10" /></a>
              <a href="#"><img src="src/assets/img/paypal.png" alt="Paypal" className="w-10" /></a>
              <a href="#"><img src="src/assets/img/american-express.png" alt="American Express" className="w-10" /></a>
              <a href="#"><img src="src/assets/img/discover.png" alt="Discover" className="w-10" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// =======
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-[#999695c0] py-10">
//       {/* Upper Footer */}
//       <div className="container mx-auto px-4">
//         <section className="border-b border-gray-300 pb-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             {/* Subscribe Section */}
//             <div className="md:w-1/2 mb-4 md:mb-0">
//               <h4 className="text-xl font-semibold">KNOW IT ALL FIRST!</h4>
//               <p className="text-gray-600">
//                 Never Miss Anything From Multikart By Signing Up To Our Newsletter.
//               </p>
//             </div>
//             {/* Subscribe Form */}
//             <div className="md:w-1/2 flex items-center justify-end">
//               <form className="flex">
//                 <input
//                   type="text"
//                   placeholder="Enter your email"
//                   className="border border-gray-300 rounded px-4 py-2 w-full md:w-auto"
//                 />
//                 <button
//                   type="submit"
//                   className="ml-2 px-4 py-3 bg-[blue] text-white rounded hover:bg-gray-600"
//                 >
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>

//         {/* Main Footer */}
//         <section className="py-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* About Section */}
//             <div>
//               <h4 className="text-lg font-semibold">About</h4>
//               <div className="mt-4">
//                 <img
//                   src="src/assets/img/logo.png"
//                   alt="Multikart"
//                   className="w-24"
//                 />
//                 <p className="text-gray-600 mt-4">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//                 </p>
//                 <div className="flex mt-4 space-x-3">
//                   {/* Social Icons */}
//                   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[blue] hover:text-gray-900">
//                     <i className="pi pi-facebook"></i>
//                   </a>
//                   <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer" className="text-[blue] hover:text-gray-900">
//                     <i className="pi pi-google-plus"></i>
//                   </a>
//                   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[blue] hover:text-gray-900">
//                     <i className="pi pi-twitter"></i>
//                   </a>
//                   <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[blue] hover:text-gray-900">
//                     <i className="pi pi-instagram"></i>
//                   </a>
//                   <a href="https://rss.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
//                     <i className="pi pi-rss"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* My Account Section */}
//             <div>
//               <h4 className="text-lg font-semibold">My Account</h4>
//               <ul className="mt-4 space-y-2">
//                 <li><a href="/shop/left_sidebar" className="text-gray-600 hover:text-gray-900">Womens</a></li>
//                 <li><a href="/shop/left_sidebar" className="text-gray-600 hover:text-gray-900">Clothing</a></li>
//                 <li><a href="/shop/left_sidebar" className="text-gray-600 hover:text-gray-900">Accessories</a></li>
//                 <li><a href="/shop/left_sidebar" className="text-gray-600 hover:text-gray-900">Featured</a></li>
//               </ul>
//             </div>

//             {/* Why We Choose Section */}
//             <div>
//               <h4 className="text-lg font-semibold">Why We Choose</h4>
//               <ul className="mt-4 space-y-2">
//                 <li><a href="#" className="text-gray-600 hover:text-gray-900">Shipping & Return</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-gray-900">Secure Shopping</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-gray-900">Gallery</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-gray-900">Affiliates</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-gray-900">Contacts</a></li>
//               </ul>
//             </div>

//             {/* Store Information Section */}
//             <div>
//               <h4 className="text-lg font-semibold">Store Information</h4>
//               <ul className="mt-4 space-y-2 text-gray-600">
//                 <li><i className="pi pi-map-marker"></i> Multikart Demo Store, Demo store Ibadan 345-659</li>
//                 <li><i className="pi pi-phone"></i> Call Us: 08107450970</li>
//                 <li><i className="pi pi-envelope"></i> Email Us: <a href="mailto:Support@Fiot.com" className="hover:text-gray-900">Support@Fiot.com</a></li>
//                 <li><i className="pi pi-fax"></i> Fax: 123456</li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Bottom Footer */}
//         <div className="border-t border-gray-300 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-600">
//               &copy; 2023-24 ThemeForest powered by <a href=""><span className='text-[#3030e0dc] uppercase'> Wabtech</span></a>
//             </p>
//             <div className="flex space-x-4 mt-4 md:mt-0">
//               <a href="#"><img src="src/assets/img/visa.png" alt="Visa" className="w-10" /></a>
//               <a href="#"><img src="src/assets/img/mastercard.png" alt="Mastercard" className="w-10" /></a>
//               <a href="#"><img src="src/assets/img/paypal.png" alt="Paypal" className="w-10" /></a>
//               <a href="#"><img src="src/assets/img/american-express.png" alt="American Express" className="w-10" /></a>
//               <a href="#"><img src="src/assets/img/discover.png" alt="Discover" className="w-10" /></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// >>>>>>> a594ddfe64ca44df28f1068105263b2953a81460

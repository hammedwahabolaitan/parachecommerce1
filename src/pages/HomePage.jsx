
import React from 'react'
import Header from '../component/Header'
import Hero from '../pages/Hero'
// import SubHero from '../pages/SubHero'
import Product from '../pages/Product'
import Section from  '../pages/Section'
import Footer from '../pages/footer'
import BannerSection from './BannerSection'
import Services from '../pages/Services'
// import SpecialProduct from './SpecialProduct'
// import InstagramSection from './InstergramSection'
import LogoSection from './LogoSection'
import ProductPage from '../component/SingleProduct'
export default function HomePage() {
  return (
    <div>
      <Header/>
      <Hero />
      {/* <SubHero /> */}
<Section />
        <BannerSection />
      <div>
      {/* <h1 className="text-center text-2xl font-bold my-6">Products</h1> */}
      <Product />
   <Services />
   {/* <SpecialProduct /> */}
     {/* <InstagramSection /> */}
     <LogoSection />
      </div>
      <Footer />
      <ProductPage />
    </div>
  )
}

// import React from 'react'
// import Header from '../component/Header'
// import Hero from '../pages/Hero'
// import SubHero from '../pages/SubHero'
// import Product from '../pages/Product'
// import Section from  '../pages/Section'
// import Footer from '../pages/footer'
// import BannerSection from './BannerSection'
// import Services from '../pages/Services'
// import SpecialProduct from './SpecialProduct'
// import InstagramSection from './InstergramSection'
// import LogoSection from './LogoSection'
// // import Cart from '../component/Cart'
// import Modal from '../component/Modal'
// export default function HomePage() {
//   return (
//     <div>
//       <Header/>
//       <Hero />
//       <SubHero />
// <Section />
//         <BannerSection />
//       <div>
//       <Product />
//    <Services />
//    <SpecialProduct />
//      <InstagramSection />
//      <LogoSection />
//       </div>
//       <Footer />
// {/* <BlogSection /> */}
// {/* <Cart /> */}
// <Modal />
//     </div>
//   )
// }

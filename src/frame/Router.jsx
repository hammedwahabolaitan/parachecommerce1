import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Special from '../component/Special';
import Feature from '../component/Feature';
import Product from '../pages/Product'
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/feature' element={<Feature />} />  {/* Changed to lowercase */}
        <Route path='/special' element={<Special />} />  {/* Changed to lowercase */}
        <Route path='/product' element={<Product />} />  {/* Changed to lowercase */}
      </Routes>
    </BrowserRouter>
  );
}

import React from 'react';

import Navbar from './components/Navbar';
import ProductImage from './components/ProductImage';
import ProductInfo from './components/ProductInfo';
import ItemPrice from './components/ItemPrice';
function App() {
  return (
    <>
      <Navbar />
      <ProductImage />
      <ProductInfo />
      <ItemPrice />
    </>
  )
}

export default App

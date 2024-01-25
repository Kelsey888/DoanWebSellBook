// ProductPage.js
import React, { useState } from 'react';
import Header from './heder.js';
import ProductInformation from './gioithieu.js';
import ProductDescription from './mota.js';
import RelatedProducts from './khuyenmai.js';
import Footer from './footer.js';
import Lienhe from './lienhe.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '../components/pages/CSS/sanpham.css';


function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const openChat = () => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div>
      <Header />
      
       <div><ProductInformation /></div>
       {/* <div> <ProductDescription /></div>
       <div><RelatedProducts /></div> */}
        

        <Lienhe/>
     
      <Footer />

    </div>
  );
}

export default ProductPage;

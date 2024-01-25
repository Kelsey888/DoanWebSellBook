// ProductPage.js
import React from 'react';
import Footer from "../components/footer";
import Header from "../components/heder";
import ProductInformation from "../components/gioithieu.js"
// import ProductDescription from './mota.js';
// import RelatedProducts from './khuyenmai.js';
// import Lienhe from './lienhe.js';



export const ProductPage= () =>{


  return (
    <div>
      {/* <Header /> */}
      
       <div><ProductInformation /></div>
       {/* <div> <ProductDescription /></div>
       <div><RelatedProducts /></div> */}
        

        {/* <Lienhe/> */}
     
      <Footer />

    </div>
  );
}


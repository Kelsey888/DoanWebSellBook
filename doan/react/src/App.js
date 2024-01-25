import './App.css';
import './css/bootstrap.css'
import './css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home_page';
import { CheckOutPage } from './pages/checkout_page';
import { WishListPage } from './pages/wishlist_page';
import { EbookPage } from './pages/ebook_page';
import { BookPage } from './pages/book_page';
import {ProductPage} from './pages/index.js';
import './components/CSS/sanpham.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path='/chi-tiet-san-pham/:id' element={<ProductPage />}/>
        <Route path="/ebook" element={<EbookPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
      {/* <ProductPage /> */}
    </>
  );
}
export default App;

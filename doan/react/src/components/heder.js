import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';
import {IdcardOutlined} from '@ant-design/icons';
import { Drawer } from 'antd';
import { Cart } from './cart.js';
import {  Badge  } from 'antd'
import { Input } from 'antd';
import axios from 'axios';
import { CartDetail } from './cart_detail.js';



function Header() {
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
    
  };
  useEffect(()=>{
    axios({
      url:'http://localhost:8000/api/gio-hang',
      method:'POST',
      data: {
        customer_id: 1,
      },
      headers:{
        "Content-Type": "application/x-www-form-urlencoded"
      } 

    }).then(response => {
      console.log('check api:' , response)
      if(response.data.success) {
        setGioHang(response.data.data)
      }
    })
  },[]);

  const onClose = () => {
    setOpen(false);
  };   
  const id = 1
  const [gioHang, setGioHang] = useState({});

  return (
    <>
      <div>
        <div id="Menu">
          <div>
            <a target="_blank" href="../HOME.html">VIKI</a>
          </div>
          <div className="sreach">
          <Search placeholder="Tìm Kiếm" onSearch={onSearch} enterButton />
          </div>
          
          <div className="taikhoan">
          <HomeOutlined />
          <span className='taikhoan_o'>Trang Chủ</span>
          </div>
          <div className="taikhoan">
            <IdcardOutlined />
           <span className="taikhoan_o">
            Tài Khoản
           </span>
          </div>
          <Badge count={Object.keys(gioHang).length>0? gioHang.cart.total_books: "0"} showZero>
      <div className="xe">
           <ShoppingCartOutlined onClick={showLargeDrawer}/>
          </div>
      </Badge>
        </div>
      </div>
 {/* {console.log('key', Object.keys(gioHang))} */}
{


  Object.keys(gioHang).length > 0 ?
  <Drawer className='cart'
     
  title={'Giỏ Hàng'}
  placement="right"
  size={size}
  onClose={onClose}
  open={open}>
     {
                         gioHang.cart.carts.map((item, idx) => {
                          //  let img = item.images.length > 0 ? `/img/images/${item.book_id}/${item.name}` : "";
                               
                             return (
                                 <>
                                     <CartDetail img={'/img/images/'+item.book.id+'/'+item.book.image_theme} name={item.book.name} price={item.book.price} quantity={item.book.quantity} discount={item.book.discount} />
                                 </>
                             )
                         })
                     }
                      <div className="TongTien">Tổng Tiền: </div>
 </Drawer>:
 null
} 
      
      
    </>
    
  );

}


export default Header;

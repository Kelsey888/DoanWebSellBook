import React, { useEffect, useState } from "react";
import axios from 'axios';
import { DeleteOutlined  } from '@ant-design/icons';
export const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const giam = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
    const tang = () => {
      setQuantity(quantity + 1);
    };
   

    const [post, setPost] = useState({
        name: "",
        average_point: 0,
        sold: 0,
        price: 0,
        discount: 0,
        genres_books: [],
        author: {
          name: "",
        }
    });
    const id = 1;
  
    useEffect(()=>{
      axios.get(`http://localhost:8000/api/chi-tiet-san-pham/${id}`)
        .then((response)=>{
          
          console.log("check api",response.data.data[0])
          if(response.data.success){
            setPost(response.data.data[0])
          }
        })
  
    },[]) ;
    let delete_cart = () => {
        console.log('xoa thanh cong')
    }
    const thanhtien =(post.price-((post.price * post.discount) /100));
    const thanhtien2=(thanhtien*quantity);
    return (
        <>
          <div className="cart">
          <div className="the-sp-gio-hang">
			          <img src="/thanh-guom-diet-quy-tap-12.jpg" alt="1" class="hinhanhtronggiohang"/>
                <div className="content_giohang">
                  <div className="text_content">
                      <p className="text_content_1">Tên Sách:</p> <p className="text_content_2"> {post.name} </p>
                  </div>
                  <div className="text_content">
                      <p className="text_content_1">Giá:</p> <p className="text_content_2"> {post.price} đ</p>
                  </div>
                  <div className="text_content">
                      <p className="text_content_1">Giảm giá:</p> <p className="text_content_2" style={{ color: 'red' }}> {post.discount} %</p>
                  </div>
                   
                    <div className="SL">
                            <p className="text_content_1">Số lượng:</p>
                            <button onClick={() => {giam()}} className="muiten">-</button>
                            <p className="soluong" style={{ width: '30px' }}>{quantity}</p>
                            <button onClick={() => {tang()}} className="muiten">+</button>
                            <div className="text" >{post.quantity} sản phẩm có sẵn</div>               
                    </div>
                    <div className="text_content"><p className="text_content_1">Thành tiền: </p> <p className="text_content_2">{thanhtien2}đ</p></div>
                </div>
                <div className="btn_del"><button onClick={() => delete_cart()}><DeleteOutlined /></button></div>
            </div>
            
            
            <div className="TongTien">Tổng Tiền: </div>
          </div>
            
          
        </>
    );
}
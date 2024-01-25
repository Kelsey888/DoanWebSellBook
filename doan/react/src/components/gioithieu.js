import React, { useEffect, useState } from "react";
import { Rate } from 'antd';
import { Carousel } from 'antd';
import axios from 'axios';

function ProductInformation(props) {
  const [Detail, setDetail] = useState({

      name: "",
      average_point: 0,
      sold: 0,
      price: 0,
      discount: 0,
      genres_books: [
        {
        genre: {
          name:""
          }
        }
      ] ,
      author: {
        name: "",
      },
      images:[
        {
          book_id: "",
          name: ""
        }
      ],
      
      
  });


  useEffect(() => {
    axios.get(`http://localhost:8000/api/chi-tiet-san-pham/${id}`)
      .then((response) => {
        if(response.data.success){
          setDetail(response.data.data);
          console.log("check api", response.data.data);
        }
      });
  }, []);

  const contentStyle = {
    height: '390px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const [quantity, setQuantity] = useState(1);
  const giam = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const tang = () => {
    setQuantity(quantity + 1);
  };
  const thanhtien = Detail && Detail.price
  ? Detail.price - (Detail.price * Detail.discount) / 100
  : 0;
return (
<>
{console.log("check",Detail)}
      <div className="content">
      <div class="slideshows" id="slideshow">
      <Carousel autoplay>
        {Detail.images.map((item)=>{
            let url = Detail.images.length > 0 ? `/img/images/${item.book_id}/${item.name}` : "";
          console.log(url)
          return(
            <div>
            <img style={contentStyle} src={url} alt="1" class="hinhanh"/>
          </div>
          )
        })}

  
  </Carousel>
  <div class="content2">
  {Detail.images.map((item)=>{
            let url = Detail.images.length > 0 ? `/img/images/${item.book_id}/${item.name}` : "";
          console.log(url)
          return(
              <img src={url} alt="1" class="hinhanh"/>
          )
        })}
        </div>
                
      </div>
  
         <div className="gioithieu">
    <div>
      <h1>{Detail.name}</h1>
      <div className="ns">
      {Detail.average_point} <Rate allowHalf value={Detail.average_point} defaultValue={0} disabled/>
      </div>
      | {Detail.average_point} đánh giá | {Detail.sold} đã bán
      
    </div>
  
    <div className="gia">
      <p style={{ textDecoration: 'line-through', color: '#929292' }}>
        <u>đ</u>{Detail.price}
      </p>&ensp;
      <p className="gia1">{thanhtien} đ</p>
      <div className="giam">
      {Detail.discount}%Giảm
      </div>
    </div>
  
    <div className="TEXT">
      <div className="text">
        Thể loại: 
      </div>
      <div>
          {Detail.genres_books[0].genre.name}
      </div>
    </div>
  
    <div className="TEXT">
      <div className="text">
        Tác giả: 
      </div>
      <div>
      {
        Detail.author.name
      }
      </div>
    </div>
  
    <div className="TEXT">
      <div className="text">
        Số lượng
      </div>
      <div className="SL">
          <button onClick={giam} className="muiten">-</button>
          <p className="so">{quantity}</p>
          <button onClick={tang} className="muiten">+</button>
        <div className="text1" >{Detail.quantity} sản phẩm có sẵn</div>
      </div>
    </div>
  
    <div className="Buy">
      <div className="giohang">
        <a href="#">Thêm vào giỏ hàng</a>
      </div>
  
      <div className="mua">
        <a href="#">Mua Hàng</a>
      </div>
    </div>
  </div>
      </div>
    )
   
  </>
  );

}

export default ProductInformation;

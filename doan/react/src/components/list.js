import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import React, { useEffect, useState } from "react";
import axios from 'axios';
library.add(faHeart, faEye);
export const List = (props) => {
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
	const contentStyle = {
		height: '390px',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79',
	  };
	  useEffect(()=>{
		axios.get(`http://localhost:8000/api/danh-sach-sach`)
		  .then((response)=>{
			
			console.log("check api",response.data.data)
			if(response.data.success){
			  setDetail(response.data.data)
			}
		  })
	
	  },[]) ;
	  
	  const content = (item) => {
		const url = item.images && item.images.length > 0
      ? `/img/images/${item.images[0].book_id}/${item.images[0].name}`
      : "";
		return (<>

			<div class="col-md-3 col-xs-6" key={item.id}>
				<div class="product">
					<div class="product-img">
						<img style={contentStyle} src={url} alt="" class="hinhanh"/>
						
					</div>
					<div class="product-body">
						<p class="product-category">{item.genres_books[0].genre.name}</p>
						<p class="product-name">{item.name}</p>
						<p class="product-author" > {item.author.name}</p>
						<h4 class="product-price">${item.price - item.discount} <del class="product-old-price">${item.price}</del></h4>
						<div class="product-rating">
						</div>
						<div class="product-btns">
							<button className="add-to-wishlist"><FontAwesomeIcon icon={faHeart} /><span className="tooltipp">yêu thích</span></button>
							<NavLink to={`/chi-tiet-san-pham/${item.id}`}><button className="quick-view"><FontAwesomeIcon icon={faEye} /><span className="tooltipp">xem chi tiết</span></button></NavLink>
							
						</div>
					</div>
					<div class="add-to-cart">
						<button class="add-to-cart-btn"><FontAwesomeIcon icon={faShoppingCart} /> thêm vào giỏ</button>
					</div>
				</div>
			</div>


		</>);
	}


	return (
		<>
			<div class="container mt-5">
				<div style={{ display: 'flex', justifyContent: "space-between" }}>
					<h3>{props.title}</h3>  <div ><Button><NavLink style={{ textDecoration: "none" }}>Xem tất cả</NavLink></Button></div>
				</div>
				<div class="row">
					{
						props.data !== null ? props.data.map((item, idx) => {
							if (props.number === -1) {
								return content(item);
							}
							if (idx < props.number) {
								return content(item);
							}
						})
							: null
					}
				</div>
			</div>
		</>
	);
}

import { DeleteOutlined  } from '@ant-design/icons';




export const CartDetail = (props)=> {
            return(
                <>

                <div className="cart">
                    <div className="the-sp-gio-hang">
			          <img src={props.img} alt="1" class="hinhanhtronggiohang"/>
                <div className="content_giohang">
                  <div className="text_content">
                      <p className="text_content_1">Tên Sách:</p> <p className="text_content_2"> {props.name} </p>
                  </div>
                  <div className="text_content">
                      <p className="text_content_1">Giá:</p> <p className="text_content_2"> {props.price} đ</p>
                  </div>
                  <div className="text_content">
                      <p className="text_content_1">Giảm giá:</p> <p className="text_content_2" style={{ color: 'red' }}> {props.discount} %</p>
                  </div>
                   
                    <div className="SL">
                            <p className="text_content_1">Số lượng:</p>
                            <button className="muiten">-</button>
                            <p className="soluong" style={{ width: '30px' }}>{props.quantity}</p>
                            <button className="muiten">+</button>
                            <div className="text" >{props.quantity} sản phẩm có sẵn</div>               
                    </div>
                    <div className="text_content"><p className="text_content_1">Thành tiền: </p> <p className="text_content_2">{props.quantity * props.price} đ</p></div>
                </div>
                <div className="btn_del"><button><DeleteOutlined /></button></div>
            </div>
            
            
           
          </div>
         
                
                </>
            )
            

}
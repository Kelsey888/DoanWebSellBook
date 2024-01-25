import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faEye, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faEye);
export const WishList = (props) => {

    let content = <>
        <div class="col-md-3 col-xs-6">
            <div class="product">
                <div class="product-img">
                    <img src="a4.jpg" alt="" />
                </div>
                <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Venti</a></h3>
                    <h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
                    <div class="product-rating">
                    </div>
                    <div class="product-btns">
                        <button className="add-to-wishlist"><FontAwesomeIcon icon={faHeartBroken} /><span className="tooltipp">add to wishlist</span></button>

                        <button className="quick-view"><FontAwesomeIcon icon={faEye} /><span className="tooltipp">quick view</span></button>
                    </div>
                </div>
                <div class="add-to-cart">
                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
                </div>
            </div>
        </div>


    </>;




    return (
        <>
            <div class="container mt-3">
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <h3>{props.title}</h3>
                </div>
                <div class="row">
                    {
                        [1, 2, 3, 4].map((item, idx) => {
                            if (idx < props.number) {
                                console.log('be hon ', props.number, idx)
                                return content;
                            }
                        })
                    }
                </div>
            </div>
        </>
    );
}

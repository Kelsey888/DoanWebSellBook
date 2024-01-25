export const CheckOut = (props) => {
    return (
        <>

            <div class="container">
                <div class="row">
                    <div class="col-md-7">

                        <div class="billing-details">
                            <div class="section-title">
                                <h3 class="title">Địa chỉ thanh toán</h3>
                            </div>
                            <div class="form-group">
                                <input class="input" type="text" name="name" placeholder="Full Name" />
                            </div>
                            <div class="form-group">
                                <input class="input" type="email" name="email" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <input class="input" type="text" name="address" placeholder="Address" />
                            </div>
                            <div class="form-group">
                                <input class="input" type="tel" name="tel" placeholder="Telephone" />
                            </div>
                        </div>

                        <div class="shiping-details">
                            <div class="section-title">
                                <h3 class="title">Địa chỉ giao hàng</h3>
                            </div>
                            <div class="input-checkbox">
                                <div class="caption">
                                    <div class="form-group">
                                        <input class="input" type="text" name="name" placeholder="Full Name" />
                                    </div>
                                    <div class="form-group">
                                        <input class="input" type="email" name="email" placeholder="Email" />
                                    </div>
                                    <div class="form-group">
                                        <input class="input" type="text" name="address" placeholder="Address" />
                                    </div>
                                    <div class="form-group">
                                        <input class="input" type="tel" name="tel" placeholder="Telephone" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="order-notes">
                            <textarea class="input" placeholder="Order Notes"></textarea>
                        </div>
                    </div>


                    <div class="col-md-5 order-details">
                        <div class="section-title text-center">
                            <h3 class="title">Your Order</h3>
                        </div>
                        <div class="order-summary">
                            <div class="order-col">
                                <div><strong>PRODUCT</strong></div>
                                <div><strong>TOTAL</strong></div>
                            </div>
                            <div class="order-products">
                                <div class="order-col">
                                    <div>1x Product Name Goes Here</div>
                                    <div>$980.00</div>
                                </div>
                                <div class="order-col">
                                    <div>2x Product Name Goes Here</div>
                                    <div>$980.00</div>
                                </div>
                            </div>
                            <div class="order-col">
                                <div>Shiping</div>
                                <div><strong>FREE</strong></div>
                            </div>
                            <div class="order-col">
                                <div><strong>TOTAL</strong></div>
                                <div><strong class="order-total">$2940.00</strong></div>
                            </div>
                        </div>
                        <div class="payment-method">
                            <div class="input-radio">
                                <input type="radio" name="payment" id="payment-1" />
                                <label for="payment-1">
                                    <span></span>
                                    Chuyển khoản trực tiếp
                                </label>

                            </div>
                            <div class="input-radio">
                                <input type="radio" name="payment" id="payment-2" />
                                <label for="payment-2">
                                    <span></span>
                                    Trả tiền mặt
                                </label>

                            </div>
                            <div class="input-radio">
                                <input type="radio" name="payment" id="payment-3" />
                                <label for="payment-3">
                                    <span></span>
                                    VÍ điện tử MOMO
                                </label>

                            </div>
                        </div>
                        <a href="#" class="primary-btn order-submit">ĐẶT HÀNG</a>
                    </div>
                </div>
            </div>

        </>
    );
}
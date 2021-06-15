import React, { useEffect } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';

import './ShoppingCart.css'
import ListProduct from './ListProduct'
import { useDispatch, useSelector } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

function Cart(props) {
    const dispatch = useDispatch();
    const history = useHistory()
    const cartItems = useSelector(state => state.cart.cartItems);
    console.log(cartItems)
    var userInfo = useSelector(state => state.userSignin.userInfo)
    console.log(userInfo)
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.salePrice, 0)

    const Order = () => {
        if(userInfo){
            history.push('/order')
        }else{
            alert("ban can dang nhap")
            history.push('/login')
        }
    }
    
    return (
        <section id="shopping-cart">
            <div className="shopping-cart">
                <div className="shopping-cart-header">
                    <Link to="/" className="back">
                        {/* <BsChevronDoubleLeft></BsChevronDoubleLeft> */}
                            Tiếp tục mua hàng
                        </Link>
                    <h2 className="shopping-cart-title">Giỏ hàng</h2>
                </div>

                {
                    cartItems ? (<ListProduct products={cartItems}></ListProduct>) : ''
                }

                <div className="total-price">
                    <span className="left">
                        Tổng tiền
                        </span>
                    <span className="right">
                        {totalPrice}
                    </span>
                </div>
                <div className="order">
                    <a href="" onClick={() => Order()}> Đặt Hàng </a>
                </div>


            </div>
        </section>
    );


}

export default Cart;

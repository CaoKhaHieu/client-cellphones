import React from 'react';
import './Order.css'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import {createOrder} from '../../actions/OrderAction'

function Order(props) {
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.salePrice, 0)
    const userInfo = useSelector(state => state.userSignin.userInfo)
    console.log(userInfo)
    console.log(cartItems)

    const onSubmit = async data => {
        const Order = {
            orderItems: [...cartItems],
            shippingAddress: data,
            totalPrice: totalPrice,
            user: userInfo
        }
        console.log(Order)
        await dispatch(createOrder(Order))
        alert('dat hang thanh cong')
    }
    return (
        <section id="order">
            <div className="order-page">
                <h2>nhap thong tin cua ban</h2>
                <form onSubmit={handleSubmit(onSubmit)} classname="form-order">
                    <input {...register("phone")} placeholder="Nhập sđt của bạn"></input>
                    <textarea {...register("address")} placeholder="Vui lòng nhập địa chỉ" type=""></textarea>

                    <input type="submit"></input>
                </form>
            </div>
        </section>
    );
}

export default Order;
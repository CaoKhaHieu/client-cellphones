import React from 'react';
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {deleteOrder, getAllOrder} from '../../../actions/OrderAction'
function Order(props) {
    const {order} = props
    const dispatch = useDispatch()
    const history = useHistory()
    const {orderItems, totalPrice, shippingAddress, user} = order
    const handleDeleteOrder = async (order) => {
         console.log(order)
         await dispatch(deleteOrder(order))
         dispatch(getAllOrder())
    }
    
    return (
        <div className="order">
           <div className="order-items">
                {
                    orderItems.map(item => (<div className="order-items-item">
                    <img src={item.image} className="img"></img>
                    <span className="qty">{item.qty}</span>
                    <span className="name">{item.name}</span>
                    <span className="price">{item.price}</span>
                </div>))
                }
           </div>
           <div className="toatalPrice">
                <span>{totalPrice}</span>
           </div>
           <div className="address">
                <p>{shippingAddress}</p>
           </div>
           <div className="user">
                <span>{user}</span>
           </div>
           <div className="done">
                <button onClick={() => handleDeleteOrder(order)}>Delete</button>
           </div>
        </div>
    );
}

export default Order;
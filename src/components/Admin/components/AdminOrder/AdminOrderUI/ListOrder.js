import React from 'react';
import Order from './Order';


function ListOrder(props) {
    const {orders} = props
    console.log(orders)
    return (
       <div className="all-order">
           {
               orders.length > 0 ? orders.map(item => (<Order order={item} key={item._id}></Order>)) : ''
           }
       </div>
    );
}

export default ListOrder;
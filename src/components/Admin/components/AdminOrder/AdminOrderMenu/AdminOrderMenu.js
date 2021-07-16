import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {GetAllOrderPendding, GetAllOrderShipping} from '../../../../../actions/OrderAction'
function AdminOrderMenu(props) {
    const dispatch = useDispatch()
    const {orderPendding} = useSelector(state => state.allOrder)
    const {orderShipping} = useSelector(state => state.allOrder)

    useEffect(() => {
        const getNewOrderPenddingAndShipping = async () => {
            await dispatch(GetAllOrderPendding())
            dispatch(GetAllOrderShipping())
        }

        getNewOrderPenddingAndShipping()
    }, [dispatch])

  return (
    <div className="order-menu">
      <Link to="/admin/order">All Orders</Link>
      <Link to="/admin/order/pendding">
        Orders Pendding
        {
            orderPendding ? (<div className="order-pendding-new">{orderPendding.length}</div>) : ''
        }
      </Link>
      <Link to="/admin/order/shipping">
        Orders Shipping
        {
            orderShipping ? (<div className="order-shipping-new">{orderShipping.length}</div>) : ''
        }
      </Link>
      <Link to="/admin/order/paid">Orders Paid</Link>
    </div>
  );
}

export default AdminOrderMenu;

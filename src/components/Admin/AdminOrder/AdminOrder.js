import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllOrder} from '../../../actions/OrderAction'
import ListOrder from './ListOrder';
import './AdminOrder.css'
function AdminProduct(props) {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.allOrder.order)
    
    useEffect(() => {
        dispatch(getAllOrder())
    }, [dispatch])

    return (
        // <ListProduct products={products}></ListProduct>
        <div id="order">
            
            {
                orders ? (<ListOrder orders={orders}></ListOrder>) : (<h2>khong co don hang</h2>)
            }

        </div>
       
    );
}

export default AdminProduct;
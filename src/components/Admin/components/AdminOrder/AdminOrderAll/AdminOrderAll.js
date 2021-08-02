import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../../../actions/OrderAction";
import ListOrder from "../AdminOrderUI/ListOrder";

function AdminOrderAll(props) {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.allOrder.order);
  const { orderGhnInfo } = useSelector((state) => state.orderGhn);
  const orderGhn = useSelector(state => state.orderGhn)
  

  useEffect(() => {
    dispatch(getAllOrder());
  }, []);


  return (
    <div>
      {orders && orders.length > 0 ? (
        <ListOrder orders={orders}></ListOrder>
      ) : (
        <h4>Không có đơn hàng</h4>
      )}
    </div>
  );
}

export default AdminOrderAll;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../../../actions/OrderAction";
import ListOrder from "../AdminOrderUI/ListOrder";

function AdminOrderAll(props) {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.allOrder.order);
  console.log("order paid", orders);
  useEffect(() => {
    console.log("get all order paid");
    dispatch(getAllOrder());
  }, []);

  return (
    <div>
      {orders ? (
        <ListOrder orders={orders}></ListOrder>
      ) : (
        <h2>khong co don hang</h2>
      )}
    </div>
  );
}

export default AdminOrderAll;

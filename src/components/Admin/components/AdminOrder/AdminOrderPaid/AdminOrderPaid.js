import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllOrderPaid } from "../../../../../actions/OrderAction";
import ListOrder from "../AdminOrderUI/ListOrder";

function AdminOrderPaid(props) {
  const dispatch = useDispatch();
  const { orderPaid } = useSelector((state) => state.allOrder);
  console.log("order paid", orderPaid);
  useEffect(() => {
    console.log("get all order paid");
    dispatch(GetAllOrderPaid());
  }, []);

  return (
    <div>
      {orderPaid ? (
        <ListOrder orders={orderPaid}></ListOrder>
      ) : (
        <h2>khong co don hang</h2>
      )}
    </div>
  );
}

export default AdminOrderPaid;

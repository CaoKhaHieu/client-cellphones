import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder, GetAllOrderPendding } from "../../../../../actions/OrderAction";
import ListOrder from "../AdminOrderUI/ListOrder";

function AdminOrderPendding(props) {
  const dispatch = useDispatch();
  const { orderPendding } = useSelector((state) => state.allOrder);
  console.log(orderPendding)

  useEffect(() => {
    console.log("get all order penddin");
    dispatch(GetAllOrderPendding());
  }, [dispatch]);

  return (
    <div>
      {orderPendding ? (
        <ListOrder orders={orderPendding}></ListOrder>
      ) : (
        <h2>khong co don hang</h2>
      )}
    </div>
  );
}

export default AdminOrderPendding;

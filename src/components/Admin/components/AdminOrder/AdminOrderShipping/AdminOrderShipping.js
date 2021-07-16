import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllOrderShipping } from "../../../../../actions/OrderAction";
import ListOrder from "../AdminOrderUI/ListOrder";

function AdminOrderShipping(props) {
  const dispatch = useDispatch();
  const { orderShipping } = useSelector((state) => state.allOrder);

  useEffect(() => {
    console.log("get all order penddin");
    dispatch(GetAllOrderShipping());
  }, []);

  return (
    <div>
      {orderShipping ? (
        <ListOrder orders={orderShipping}></ListOrder>
      ) : (
        <h2>khong co don hang</h2>
      )}
    </div>
  );
}

export default AdminOrderShipping;

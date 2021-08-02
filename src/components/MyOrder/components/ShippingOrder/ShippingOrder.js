import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderShippingByUser } from "../../../../actions/OrderAction";
import {formatPrice} from '../../../../untils/index'


const orderItem = (item) => (
  <div className="all-myorder-item">
    <div className="all-myorder-item-img">
      <img src={item.image}></img>
    </div>
    <div className="all-myorder-item-name">
      <p>{item.name}</p>
      <span>x{item.qty}</span>
    </div>
    <div className="all-myorder-item-price">{formatPrice(item.salePrice)}</div>
  </div>
);

export const orderParent = (item) => (
  <div className="all-myorder-parent-item">
    <div className="all-myorder-list">
      {item.orderItems.map((item) => orderItem(item))}
    </div>
    <div className="all-myorder-item-totalprice">
      <span>Tổng số tiền : </span> <strong>{formatPrice(item.totalPrice)}đ</strong>
    </div>
  </div>
);

function ShippingOrder(props) {
  const dispatch = useDispatch();
  const { myOrdersShipping } = useSelector((state) => state.orderByUser);
  
  const { userInfo } = useSelector((state) => state.userSignin);
  
  useEffect(() => {
    dispatch(getOrderShippingByUser(userInfo._id));
  }, [dispatch]);

  return (
    <div className="all-myorder">
      {myOrdersShipping && myOrdersShipping.length > 0 ? myOrdersShipping.map((item) => orderParent(item)) : "Bạn không có đơn hàng nào"}
    </div>
  );
}

export default ShippingOrder;

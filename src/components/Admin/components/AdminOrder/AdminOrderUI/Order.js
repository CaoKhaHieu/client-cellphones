import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteOrder,
  getAllOrder,
  GetAllOrderPendding,
  GetAllOrderShipping,
  PaidOrder,
  ShippingOrder,
} from "../../../../../actions/OrderAction";
import { formatPrice } from "../../../../../untils/index";

function Order(props) {
  const { order } = props;
  const orderStatus = order.status;
  const dispatch = useDispatch();
  const { orderItems, totalPrice, shippingAddress, user, name } = order;

  // const handleDeleteOrder = async (order) => {
  //   console.log(order);
  //   await dispatch(deleteOrder(order));
  //   dispatch(getAllOrder());
  // };

  const handleShippingOrder = async (order) => {
    await dispatch(ShippingOrder(order._id));
    await dispatch(GetAllOrderPendding());
    dispatch(GetAllOrderShipping())
  };

  const handlePaidOrder = async (order) => {
    await dispatch(PaidOrder(order._id));
    dispatch(GetAllOrderShipping())
  };

  return (
    <div className="order-list">
      <div className="order-list-items">
        {orderItems.map((item) => (
          <div className="order-items-item">
            <span className="img">
              <img src={item.image}></img>
            </span>
            <span className="qty">Qty: {item.qty}</span>
            <span className="name">{item.name}</span>
            <span className="price">{formatPrice(item.price)}</span>
          </div>
        ))}
      </div>
      <div className="toatalPrice">
        <span>Tổng tiền: {formatPrice(totalPrice)}</span>
      </div>
      <div className="order-info">
        <div className="order-info-address">
          <b>Địa chỉ : </b> {"  "}
          {shippingAddress.name},{"  "}
          {shippingAddress.province}, {shippingAddress.district},{"  "}
          {shippingAddress.ward}, {shippingAddress.detail},{" "}
          {shippingAddress.phone}
        </div>
        <div className="order-button">
          {orderStatus === "pendding" ? (
            <button
              className="shipping"
              onClick={() => handleShippingOrder(order)}
            >
              Shipping
            </button>
          ) : (
            ""
          )}
          {orderStatus === "shipping" ? (
            <button
              className="paid"
              onClick={() => handlePaidOrder(order)}
            >
              Confirm Paid
            </button>
          ) : (
            ""
          )}
          {/* <button className="delete" onClick={() => handleDeleteOrder(order)}>
            Delete
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Order;

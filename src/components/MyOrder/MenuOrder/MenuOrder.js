import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderPenddingByUser,
  getOrderShippingByUser,
} from "../../../actions/OrderAction";
function MenuOrder(props) {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userSignin);
  const { myOrdersPendding } = useSelector((state) => state.orderByUser);
  const { myOrdersShipping } = useSelector((state) => state.orderByUser);

  useEffect(() => {
    const getAllOrderPenddingAndShippingByUser = async () => {
      await dispatch(getOrderPenddingByUser(userInfo._id));
      dispatch(getOrderShippingByUser(userInfo._id));
    };

    getAllOrderPenddingAndShippingByUser();
  }, [dispatch]);

  return (
    <div className="myorder-menu">
      <div className="myorder-menu-item">
        <Link to="/myOrder">Tất cả</Link>
      </div>
      <div className="myorder-menu-item">
        <Link to="/myOrder/pendding">Chờ xử lí</Link>
        {myOrdersPendding ? (
          <div className="myorder-menu-item-newPendding">
            {myOrdersPendding.length}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="myorder-menu-item">
        <Link to="/myOrder/shipping">Đang giao</Link>
        {myOrdersShipping ? (
          <div className="myorder-menu-item-newShipping">
            {myOrdersShipping.length}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="myorder-menu-item">
        <Link to="/myOrder/paid">Đã thanh toán</Link>
      </div>
    </div>
  );
}

export default MenuOrder;

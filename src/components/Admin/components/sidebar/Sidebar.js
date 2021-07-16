import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllOrderPendding } from "../../../../actions/OrderAction";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import {
  AppstoreOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  OrderedListOutlined,
  WechatOutlined,
} from "@ant-design/icons";

function Sidebar(props) {
  const dispatch = useDispatch();
  const { orderPendding } = useSelector((state) => state.allOrder);

//   useEffect(() => {
//     console.log("get all order penddin");
//     dispatch(GetAllOrderPendding());
//   }, [dispatch]);
  
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="https://raw.githubusercontent.com/trananhtuat/tua-react-admin/main/src/assets/images/logo.png"></img>
      </div>
      <div className="sidebar-list">
        <Link className="sidebar-list-item" to="/admin">
          <span>
            <AppstoreOutlined></AppstoreOutlined>
          </span>
          <p>Dashboard</p>
        </Link>
        <Link className="sidebar-list-item" to="/admin/customer">
          <span>
            <UsergroupAddOutlined></UsergroupAddOutlined>
          </span>
          <p>Customer</p>
        </Link>
        <Link className="sidebar-list-item" to="/admin/product">
          <span>
            <ShopOutlined></ShopOutlined>
          </span>
          <p>Products</p>
        </Link>
        <Link className="sidebar-list-item" to="/admin/order">
          <span>
            <OrderedListOutlined></OrderedListOutlined>
          </span>
          <p>
            Order 
            {/* {
                orderPendding ? (<div className="admin-order-new">{orderPendding.length}</div>) : ''
            } */}
          </p>
        </Link>
        <Link className="sidebar-list-item" to="/admin/chat">
          <span>
            <WechatOutlined></WechatOutlined>
          </span>
          <p>Chat</p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;

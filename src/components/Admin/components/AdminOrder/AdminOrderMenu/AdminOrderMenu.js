import React from "react";
import { Link } from "react-router-dom";

function AdminOrderMenu(props) {
  return (
    <div className="order-menu">
      <Link to="/admin/order">All Orders</Link>
    </div>
  );
}

export default AdminOrderMenu;

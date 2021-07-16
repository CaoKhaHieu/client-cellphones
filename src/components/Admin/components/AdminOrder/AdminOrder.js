import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder, RemoveAllOrder } from "../../../../actions/OrderAction";
import ListOrder from "./AdminOrderUI/ListOrder";
import "./AdminOrder.css";
import AdminOrderMenu from "./AdminOrderMenu/AdminOrderMenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminOrderPendding from "./AdminOrderPendding/AdminOrderPendding";
import AdminOrderShipping from "./AdminOrderShipping/AdminOrderShipping";
import AdminOrderPaid from "./AdminOrderPaid/AdminOrderPaid";
import AdminOrderAll from "./AdminOrderAll/AdminOrderAll";

function AdminOrder(props) {

  return (
    <Router>
      <div className="order">
        <span>Orders</span>
        <AdminOrderMenu></AdminOrderMenu>

        <Switch>
          <Route path="/admin/order" exact component={AdminOrderAll}>
          </Route>
          <Route
            path="/admin/order/pendding"
            component={AdminOrderPendding}
          ></Route>
          <Route
            path="/admin/order/shipping"
            component={AdminOrderShipping}
          ></Route>
          <Route path="/admin/order/paid" component={AdminOrderPaid}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AdminOrder;

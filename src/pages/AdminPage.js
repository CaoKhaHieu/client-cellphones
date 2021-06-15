import React from 'react';
import Admin from '../components/Admin/Admin';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AdminProduct from '../components/Admin/AdminProduct/AdminProduct';
import AdminCreate from '../components/Admin/AdminProduct/AdminCreate';
import AdminUpdate from '../components/Admin/AdminProduct/AdminUpdate';
import AdminOrder from '../components/Admin/AdminOrder/AdminOrder'
import AdminUser from '../components/Admin/AdminUser/AdminUser';
function AdminPage(props) {
    return (
        <div>
            <Router>
                <Route path="/admin" exact>
                    <Admin></Admin>
                </Route>

                <Route path="/admin/product" exact>
                    <AdminProduct></AdminProduct>
                </Route>

                <Route path="/admin/product/create" exact>
                    <AdminCreate></AdminCreate>
                </Route>

                <Route path="/admin/product/update/:id" exact>
                    <AdminUpdate></AdminUpdate>
                </Route>

                <Route path="/admin/order" exact>
                    <AdminOrder></AdminOrder>
                </Route>

                <Route path="/admin/user" exact>
                    <AdminUser></AdminUser>
                </Route>
            </Router>
        </div>
    );
}

export default AdminPage;
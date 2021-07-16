import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';
import Customers from '../pages/Customers';
import AdminProduct from './AdminProduct/AdminProduct';
import AdminCreate from './AdminProduct/AdminCreate'
import AdminUpdate from './AdminProduct/AdminUpdate'
import AdminOrder from './AdminOrder/AdminOrder'
import AdminUser from './AdminUser/AdminUser';
import AppChat from './AppChat/AppChat'
import ReviewProduct from './AdminProduct/ReviewProduct/ReviewProduct';

function Routes(props) {
    return (
        <Switch>
            <Route path='/admin/' exact component={Dashboard}/>
            <Route path='/admin/customer' component={AdminUser}/>

            <Route path='/admin/product/create' component={AdminCreate}/>
            <Route path='/admin/product/update/:id' component={AdminUpdate}/>
            <Route path='/admin/product/reviewProduct' component={ReviewProduct}/>
            <Route path='/admin/product' component={AdminProduct}/>

            <Route path='/admin/order' component={AdminOrder}/>
            <Route path='/admin/chat' component={AppChat}/>
        </Switch>
    );
}

export default Routes;
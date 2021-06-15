import React from 'react';
import PropTypes from 'prop-types';
import Order from '../components/order/Order';
import { useSelector } from 'react-redux';

OrderPage.propTypes = {
    
};

function OrderPage(props) {
    return (
        <div>
            <Order></Order>
        </div>
    );
}

export default OrderPage;
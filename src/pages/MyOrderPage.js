import React from 'react';
import Header from '../components/header/Header';
import MyOrder from '../components/MyOrder/MyOrder';

function MyOrderPage(props) {
    return (
        <div>
           <Header></Header> 
           <MyOrder></MyOrder>
        </div>
    );
}

export default MyOrderPage;
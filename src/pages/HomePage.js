import React from 'react';
import Header from '../components/header/Header';
import IPhone from '../components/HotSale/components/Iphone'
import Samsung from '../components/HotSale/components/Samsung'
import Xiaomi from '../components/HotSale/components/Xiaomi';

function HomePage(props) {
    return (
        <div>
            <Header></Header>
            <IPhone></IPhone>
            <Samsung></Samsung>
            <Xiaomi></Xiaomi>
        </div>
    );
}

export default HomePage;
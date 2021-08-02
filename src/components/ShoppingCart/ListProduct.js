import React from 'react';
import Product from './Product'


function ListProduct(props) {
    const { products } = props;

    return (
        <div className="shopping-cart-list">
            {
                products.map((product, index) => (
                    <Product product={product} key={index}></Product>
                ))
            }
        </div>
    );
}

export default ListProduct;
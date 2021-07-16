import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {AddToCart} from '../../actions/CartAction'
import {Link} from 'react-router-dom'
import {formatPrice} from '../../untils/index'

Product.propTypes = {
    // product: PropTypes.object,
};
Product.defaultProps = {
    // product: null,
}

function Product(props) {
    const { product } = props;
    const dispatch = useDispatch();

    function AddProductToCart(product) {
        const action = AddToCart(product);
        dispatch(action);
    }

    return (
        <div className="hotsale-listproduct-product">
            <Link to={"/detail/" + product._id}>
                <img src={product.image}></img>
                <p className="hotsale-listproduct-product-name">{product.name}</p>
                <div className="price">
                    <span className="price1">{formatPrice(product.salePrice)}đ</span>
                    <span className="price2">{formatPrice(product.price)}đ</span>
                </div>
            </Link>
            {
                product.percentDiscount >= 5 ? (<div className="discount">
                <p>{product.percentDiscount}%</p>
            </div>) : ''
            }
            <div className="buy">
                <Link to="" onClick={(e) => {AddProductToCart(product)}}> Mua Ngay</Link>
            </div>
        </div>
    );
}

export default Product;
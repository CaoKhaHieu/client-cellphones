import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {DeleteProduct} from '../../../actions/ProductAction'
import {useHistory, Link} from 'react-router-dom'
Product.propTypes = {
    
};

function Product(props) {
    const history = useHistory()
    const { product, update } = props;
    const dispatch = useDispatch()
    
    const handleDeleteProduct = (product) => {
        console.log(product)
        dispatch(DeleteProduct(product._id))
    }
    
    return (
        <div className="product">
            <div className="product-image">
                <img src={product.image} className="img"></img>
            </div>
            <p className="name">{product.name}</p>
            <p className="price">{product.price}</p>
            <p className="type">{product.type}</p>
            <div className="delete">
                <Link to={`/admin/product/update/${product._id}`}>Update</Link>
                <button onClick={(e) => handleDeleteProduct(product)}>Delete</button>
            </div>
        </div>
    );
}

export default Product;
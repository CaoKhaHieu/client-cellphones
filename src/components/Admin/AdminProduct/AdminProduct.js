import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllProduct, paginationProduct} from '../../../actions/ProductAction'
import ListProduct from './ListProduct';
import './AdminProduct.css'

function AdminProduct(props) {
    const dispatch = useDispatch()
    const products = useSelector(state => state.paginationProduct.product)
    console.log(products)

    useEffect(() => {
        dispatch(paginationProduct(1))
    }, [])

    return (
        <div className="admin-product">
            {
                products ? (<ListProduct listProducts={products}></ListProduct>) : 'ko co san pham '
            }

            
        </div>
    );
}

export default AdminProduct;
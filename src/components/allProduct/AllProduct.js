import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListProduct from './ListProduct'
import './Sale.css'
import {handlePercentDiscount, SortProductByDiscount} from '../../untils/index'
import { useDispatch, useSelector } from 'react-redux';
import { ascendingProduct, getAllProduct, descendingProduct, filterProductByType } from '../../actions/ProductAction';
import { useHistory } from 'react-router';
import FilterProduct from './FilterProduct';


function AllProduct(props) {
    const dispatch = useDispatch()
    const [check, setCheck] = useState()
    const product = useSelector(state => state.allProduct.product)
    useEffect(() => {
        dispatch(getAllProduct())
    }, [dispatch])

    const ThapDenCao = () => {
        dispatch(descendingProduct())
    }
    const CaoDenThap = () => {
        dispatch(ascendingProduct())
    }
    const handleCheckBox = (type) => {
        console.log(type)
    }
    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                <div className="button">
                    <button className="thapdencao" onClick={() => ThapDenCao(product)}> Thấp đến cao </button>
                    <button className="caodenthap" onClick={() => CaoDenThap(product)}> Cao đến thấp </button>
                </div>
                <FilterProduct></FilterProduct>
                {
                   product ? (<ListProduct HotSaleProducts={handlePercentDiscount(product)}></ListProduct>) : (<h2>error</h2>)
                }
            </div>
        </section>

    );
}


export default AllProduct;
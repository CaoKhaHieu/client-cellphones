import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct, getAllProduct, filterProductByPrice } from '../../actions/ProductAction';
import {formatPrice} from '../../untils/index'

function FilterProduct(props) {
    const dispatch = useDispatch()
    const [startPrice, setStartPrice] = useState(0)
    const [endPrice, setEndPrice] = useState(0)
    const FilterProduct = async (name) => {
        await dispatch(getAllProduct())
        dispatch(filterProduct(name))
    }
    const FilterProductByPrice = async (a, b) => {
        await dispatch(getAllProduct())
        let startPrice = parseInt(a)
        let endPrice = parseInt(b)
        console.log(formatPrice(startPrice))
        dispatch(filterProductByPrice(startPrice, endPrice))
    }

    const GetAllProduct = () => {
        dispatch(getAllProduct())
    }

    return (
        <div className="filter">
            <ul>
                <li onClick={() => GetAllProduct()}>All</li>
                <li onClick={() => FilterProduct('iphone')}>Iphone</li>
                <li onClick={() => FilterProduct('xiaomi')}>Xiaomi</li>
                <li onClick={() => FilterProduct('samsung')}>Samsung</li>
            </ul>
            <div className="options-price">
                <input type="number" id="priceStart" placeholder="đ TỪ" onChange={e => setStartPrice(e.target.value)}></input>
                <input type="number" id="priceEnd" placeholder="đ ĐẾN"  onChange={e => setEndPrice(e.target.value)}></input>
                <button onClick={() => FilterProductByPrice(startPrice, endPrice)}>Tim</button>
            </div>
        </div>
    );
}

export default FilterProduct;
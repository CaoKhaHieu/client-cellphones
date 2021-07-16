import React from 'react';
import { useSelector } from 'react-redux';
import {handlePercentDiscount, SortProductByDiscount} from '../../untils/index'
import './Search.css'
import ListProduct from './ListProduct'
function Search(props) {
    const searchProduct = useSelector(state => state.searchProduct)
    console.log(searchProduct)
    const {products} = searchProduct;
    console.log(products)
    
    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                {
                    products ? (<ListProduct HotSaleProducts={handlePercentDiscount(products)}></ListProduct>) : (<h2>ko tim thay sp</h2>)
                }
            </div>
        </section>
    );
}

export default Search;
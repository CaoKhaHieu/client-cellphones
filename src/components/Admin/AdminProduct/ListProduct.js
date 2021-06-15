import React from 'react';
import { useDispatch } from 'react-redux';
import { paginationProduct } from '../../../actions/ProductAction';
import Product from './Product';
import {Link} from 'react-router-dom'

function ListProduct(props) {
    const dispatch = useDispatch()
    const {listProducts} = props;
    const {products, current, pages} = listProducts
    console.log(products, current, pages)
    const ListPage = []

    for(let i =1; i<=pages; i++){
        ListPage.push(i)
    }
    console.log(ListPage)

    const paginate = (number) => {
        console.log(number)
        dispatch(paginationProduct(number))
    }
    return (
       <div className="list-product">
           <Link to="/admin/product/create" className="add-product">them san pham</Link>
           {
               products ? products.map(item => (
                <Product product={item} key={item._id} update={item._id}></Product>
            )) : ''
           }

            <div class="pagination">
                {
                    ListPage ? ListPage.map(item => (<button  className="active" key={item} onClick={() => paginate(item)}>{item}</button>)) : ''
                }
            </div>
       </div>
    );
}

export default ListProduct;
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'

import {handlePercentDiscount, SortProductByDiscount} from '../../../untils/index'
import { useDispatch, useSelector } from 'react-redux';


function Xiaomi(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('xiaomi');
    const [hotXiaomi, setHotXiaomi] = useState([])

    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:5000/products/${name}`)
                console.log(data)
                setHotXiaomi(data)
            } catch (error) {
                console.log(error)
            }
        }
        FetchApi()
    }, [])

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>{name}</h2>
                {
                   hotXiaomi ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotXiaomi)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Xiaomi;
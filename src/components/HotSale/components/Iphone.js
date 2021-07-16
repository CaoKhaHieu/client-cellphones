import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'
import {handlePercentDiscount, SortProductByDiscount} from '../../../untils/index'
import { useDispatch, useSelector } from 'react-redux';


function Iphone(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('iphone');
    const [hotIphone, setHotIphone] = useState([])
    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:5000/products/${name}`)
                setHotIphone(data)
            } catch (error) {
                console.log(error)
            }
        }
        FetchApi()
    }, [])

    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                <h2>{name}</h2>
                {
                    hotIphone ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotIphone)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Iphone;
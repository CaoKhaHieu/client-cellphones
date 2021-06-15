import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Detail.css'
import DetailInfo from './DetailInfo'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

function Detail(props) {
    
    const { id } = useParams();
    const [detailProduct, setDetailProduct] = useState({});

    useEffect(() => {
        console.log('call api')
        axios.get(`http://localhost:5000/products/detail/${id}`)
            .then(response => {
                console.log(response.data)
                setDetailProduct(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <section id="detail">
            <div className="detail">
                <div className="detail-info">
                    <div className="detail-info-slide">
                        <div className="detail-info-slide-image">
                            <img src={detailProduct.image}></img>
                        </div>
                    </div>
                    <DetailInfo  product={detailProduct}></DetailInfo>
                </div>
                {/* <AboutProduct></AboutProduct> */}
                
            </div>
        </section>
    );
}

export default Detail;
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import {getproductById, saveProduct} from '../../../actions/ProductAction'
import {} from '../../../actions/ProductAction'

function AdminUpdate(props) {
    const {id} = useParams()
    console.log(id)
    const dispatch = useDispatch()
    const history = useHistory()
    const product = useSelector(state => state.getProductById.product)
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    
   
    const onSubmit = data => {
        dispatch(saveProduct(data))
    }

    useEffect(() => {
        dispatch(getproductById(id))
    }, [])
    
    return (
        <div className="login-page">
            <h2>Update</h2>
            {
                product ? (<form onSubmit={handleSubmit(onSubmit)} className="form-login">
                <input {...register("name")} placeholder="name" defaultValue={product.name}></input>
                <input {...register("price")} placeholder="Sale" type="number" value={product.price}></input>
                <input {...register("salePrice")} placeholder="salePrice" type="number" value={product.salePrice}></input>
                <select {...register("type")} value={product.type}>
                    <option value="iphone">Iphone</option>
                    <option value="samsung">Samsung</option>
                    <option value="xiaomi">Xiaomi</option>
                </select>
                <input {...register("image")} placeholder="image" value={product.image}></input>
                <button type="submit">Update</button>
            </form>) : ''
            }
        </div>
    );
}

export default AdminUpdate;
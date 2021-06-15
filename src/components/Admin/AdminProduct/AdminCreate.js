import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {saveProduct} from '../../../actions/ProductAction'
import {getAllProduct} from '../../../actions/ProductAction'

function AdminCreate(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const user = useSelector(state => state.userSignin)
    const {userInfo, error} = user

    const onSubmit = data => {
        console.log(data)
        dispatch(saveProduct(data))
    }
    
    return (
        <div className="login-page">
            <h2>them san pham</h2>
            <form onSubmit={handleSubmit(onSubmit)} classname="form-login">
                <input {...register("name")} placeholder="name"></input>
                <input {...register("price")} placeholder="Sale" type="number"></input>
                <input {...register("salePrice")} placeholder="salePrice" type="number"></input>
                <select {...register("type")}>
                    <option value="iphone">Iphone</option>
                    <option value="samsung">Samsung</option>
                    <option value="xiaomi">Xiaomi</option>
                </select>
                <input {...register("image")} placeholder="image"></input>
                <button type="submit">Thêm</button>
            </form>
        </div>
    );
}

export default AdminCreate;
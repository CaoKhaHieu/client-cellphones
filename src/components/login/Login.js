import React, { useEffect } from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../../actions/UserAction'
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom'

function Login(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const user = useSelector(state => state.userSignin)
    const {userInfo, error} = user

    const onSubmit = data => {
        dispatch(login(data))
    }

    useEffect(() => {
        if(userInfo){
            history.push('/')
        }
    })
    
    
    return (
        <div class="login-page">
            <div className="form">
            <h2> login</h2>
            <form onSubmit={handleSubmit(onSubmit)} class="register-form">
                <input {...register("email")} placeholder="email"></input>
                <input {...register("password")} placeholder="password" type="password"></input>

                <input type="submit"></input>
                {
                    error ? (<h2>{error}</h2>) : <></>
                }
                <Link to="/register">Create account?</Link>
            </form>
            </div>

        </div>
    );
}

export default Login;
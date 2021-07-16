import React, { useEffect, useState } from 'react';
import './Order.css'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import {createOrder, GetAllDistrict, GetAllProvince, GetAllWard} from '../../actions/OrderAction'
import Alert from '../Alert/Alert'
function Order(props) {
    // api 
    // -------- province https://vapi.vnappmob.com/api/province/
    // -------- district https://vapi.vnappmob.com/api/province/district/48
    // -------- ward https://vapi.vnappmob.com/api/province/ward/490
    const allProvince = useSelector(state => state.address.province)
    const allDistrict = useSelector(state => state.address.district)
    const allWard = useSelector(state => state.address.ward)
    

    const [listProvince, setListProvince] = useState(false)
    const [listDistrict, setListDistrict] = useState(false)
    const [listWard, setListWard] = useState(false)
    const [orderSuccess, setOrderSuccess] = useState(false)


    const [chooseProvince, setChooseProvince] = useState('Thành phố Hồ Chí Minh')
    const [chooseDistrict, setChooseDistrict] = useState('Quận / Huyện')
    const [chooseWard, setChooseWard] = useState('Phường / Xã')
    const [choosePay, setChoosePay] = useState({payLater: false, payOnline: false})


    const [sdkReady, setSdkReady] = useState(false);

    const handleListProvince = (e) => {
        e.preventDefault()
        setListProvince(!listProvince)
    }
    const handleListDistrict = (e) => {
        e.preventDefault()
        setListDistrict(!listDistrict)
    }
    const handleListWard = (e) => {
        e.preventDefault()
        setListWard(!listWard)
    }

    

    const dispatch = useDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const cartItems = useSelector(state => state.cart.cartItems)
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.salePrice, 0)
    const userInfo = useSelector(state => state.userSignin.userInfo)
    

        
    const onSubmit = async data => {
        const Order = {
            orderItems: [...cartItems],
            shippingAddress: {
                ...data,
                province: chooseProvince,
                district: chooseDistrict,
                ward: chooseWard,
            },
            totalPrice: totalPrice,
            name: userInfo.name,
            user: userInfo
        }
        console.log(Order)
        await dispatch(createOrder(Order))
        setOrderSuccess(true)
    }

    useEffect(async () => {
        dispatch(GetAllProvince())
    }, [])

    useEffect(() => {
        dispatch(GetAllDistrict(79))
    }, [])
    

    const handleSelectProvince = (name, id) => {
        setChooseProvince(name)
        setListProvince(!listProvince)
        dispatch(GetAllDistrict(id))
    }

    const handleSelectDistrict = (name, id) => {
        setChooseDistrict(name)
        setListDistrict(!listDistrict)
        dispatch(GetAllWard(id))
    }

    const handleSelectWard = (name, id) => {
        setChooseWard(name)
        setListWard(!listWard)
    }

    const payLater = () => {
        setChoosePay({payOnline: false, payLater: true})
    }

    const payOnline = () => {
        setChoosePay({payLater:false, payOnline: true})
    }

    return (
        <section id="order">
            <form className="order-page" onSubmit={handleSubmit(onSubmit)}>
                <div className="customer">
                    <h4>THÔNG TIN KHÁCH HÀNG </h4>
                    <div className="form-customer">
                        <input placeholder="Họ và tên" {...register("name")} required></input>
                        <input placeholder="Số điện thoại" {...register("phone")} required></input>
                    </div>
                </div>

                <div className="address">
                    <h4>CHỌN ĐỊA CHỈ</h4>
                    <div className="address-form">
                        <div className="province">
                            {
                                allProvince ? (<button className="" onClick={(e) => handleListProvince(e)}>{chooseProvince}</button>) : (<button className="" onClick={(e) => handleListProvince(e)}>{chooseProvince}</button>)
                            }
                            {
                                listProvince ? (<div className="select">
                                <div className="select-list">
                                    <aside>
                                        {
                                            allProvince  ? allProvince.results.map(item => (<span onClick={() => handleSelectProvince(item.province_name, item.province_id)}>{item.province_name}</span>)) : ''
                                        }
                                    </aside>
                                </div>
                            </div>) : ''
                            }
                        </div>
                        <div className="province">
                            {
                                chooseProvince ? (<button className="" onClick={(e) => handleListDistrict(e)}>{chooseDistrict}</button>) : (<button className="" onClick={(e) => handleListProvince(e)} disabled="disabled">{chooseDistrict}</button>)
                            }
                            {
                                listDistrict ? (<div className="select">
                                <div className="select-list">
                                    <aside>
                                        {
                                            allDistrict ? allDistrict.results.map(item => (<span onClick={() => handleSelectDistrict(item.district_name, item.district_id)}>{item.district_name}</span>)) : ''
                                        }
                                    </aside>
                                </div>
                            </div>) : ''
                            }
                        </div>
                        <div className="province">
                            {
                                chooseWard ? (<button className="" onClick={(e) => handleListWard(e)}>{chooseWard}</button>) : (<button className="" onClick={(e) => handleListWard(e)} disabled>{chooseWard}</button>)
                            }
                            {
                                listWard ? (<div className="select">
                                <div className="select-list">
                                    <aside>
                                        {
                                            allWard ? allWard.results.map(item => (<span onClick={() => handleSelectWard(item.ward_name,item.ward_id)}>{item.ward_name}</span>)) : ''
                                        }
                                    </aside>
                                </div>
                            </div>) : ''
                            }
                        </div>
                        <div className="province">
                            <input placeholder="Số nhà, đường ..."{...register("more")} required></input>
                        </div>
                    </div>
                </div>
                
                <div className="choose-pay">
                    <h4>CHỌN PHƯƠNG THỨC THANH TOÁN </h4>
                    <div className="choose">
                        <span className={choosePay.payLater ? 'active' : ''} onClick={() => payLater()}>Thanh toán khi nhận hàng</span>
                        <span className={choosePay.payOnline ? 'active' : ''} onClick={() => payOnline()}>Thanh toán Online</span>
                    </div>
                    {
                        choosePay.payOnline ? (
                            <div className="paypal">
                                <a>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1200px-PayPal_logo.svg.png"></img>
                                </a>
                            </div>
                        ) : ''
                    }
                </div>

                <div className="customer-order">
                    <button type="submit">Đặt Hàng</button>
                </div>

            </form>
            {
                orderSuccess === true ? (<Alert></Alert>) : ''
            }
        </section>
    );
}

export default Order;
import axios from 'axios'

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        const {
            userSignin: {userInfo},
        } = getState()
        console.log(order)
        const {data} = await axios.post('http://localhost:5000/order/create', order , {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        })
        dispatch({type: 'ORDER_CREATE-SUCCESS', payload: data})
        dispatch({type: 'CART_EMTY'});
        localStorage.removeItem('cartItems');
        document.location.href = '/';
    } catch (error) {
        console.log(error)
    }
}

export const getAllOrder = () => async (dispatch, getState) => {
    try {
        const {userSignin: {userInfo}} = getState()
        const {data} = await axios.get(`http://localhost:5000/order`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        })
        dispatch({type: 'GET_ALL_ORDER', payload: data})
        
    } catch (error) {
        console.log(error)
    }
}

export const deleteOrder = (order) => async (dispatch, getState) => {
    try {
        const {userSignin: {userInfo}} = getState()
        console.log('callapi delete')
        const {data} = await axios.delete(`http://localhost:5000/order/delete/${order._id}`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        })
        dispatch({type: 'DELETE_ORDER', payload: data})
    } catch (error) {
        console.log(error)
    }
}
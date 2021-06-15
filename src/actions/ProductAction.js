import axios from 'axios'

export const filterProductByType = (name) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/products/${name}`)
        console.log(data)
        dispatch({type: 'FILTER_PRODUCT_BY_TYPE', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getAllProduct = () => async (dispatch) => {
    console.log('call api')
    try {
        const {data} = await axios.get(`http://localhost:5000/products/`)
        console.log(data)
        dispatch({type: 'GET_ALL_PRODUCT', payload: data})
    } catch (error) {
        dispatch({type: 'GET_ALL_PRODUCT_FAIL', payload: error.message})
    }
}

export const ascendingProduct = (products) => async (dispatch, getState) => {
    const {
        allProduct: {product},
    } = getState()
    dispatch({type: 'ASCENDING_PRODUCT', payload: product})
}

export const descendingProduct = (products) => async (dispatch, getState) => {
    const {
        allProduct: {product},
    } = getState()
    dispatch({type: 'DESCENDING_PRODUCT', payload: product})
}

export const filterProduct = (name) => async (dispatch, getState) => {
    const {
        allProduct: {product},
    } = getState()
    dispatch({type: 'FILTER_PRODUCT', payload: name})
}

export const filterProductByPrice = (startPrice, endPrice) => async (dispatch, getState) => {
    const {
        allProduct: {product},
    } = getState()
    dispatch({type: 'FILTER_PRODUCT_BY_PRICE', payload: {startPrice, endPrice}})
}

export const paginationProduct = (page) => async (dispatch) => {
    try {
        console.log(page)
        const {data} = await axios.get(`http://localhost:5000/products/pagination/${page}`)
        console.log(data)
        dispatch({type: 'PAGINATION_PRODUCT', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getproductById = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/products/detail/${id}`)
        dispatch({type: 'GET_PRODUCT_BY_ID', payload: data})
    } catch (error) {
        dispatch({type: 'GET_PRODUCT_BY_ID_FAIL', payload: error.message})
    }
}


export const saveProduct = (product) => async (dispatch, getState) => {
    try {
        const {
            userSignin: {userInfo},
        } = getState()
        if(!product._id){
            console.log('create')
            const {data} = await axios.post('http://localhost:5000/products/create', product, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            })
            dispatch({type: 'SAVE_PRODUCT', payload: data})
            document.location.href = '/admin/product';
        }else{
            console.log('update')
            const {data} = await axios.put(`http://localhost:5000/products/update/${product._id}`, product, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            })
            dispatch({type: 'SAVE_PRODUCT', payload: data})
            document.location.href = '/admin/product';
        }
    } catch (error) {
        dispatch({type: 'SAVE_PRODUCT_FAIL', payload: error.message})
    }
}

export const DeleteProduct = (productId) => async (dispatch, getState) => {
    try {
        const {
            userSignin: {userInfo}
        } = getState()
        console.log(productId)
        const {data} = axios.delete(`http://localhost:5000/products/delete/${productId}`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({type: 'DELETE_PRODUCT', payload: data })
        document.location.href = '/admin/product';
    } catch (error) {
        dispatch({type: 'DELETE_PRODUCT_FAIL', payload: error.message })
    }
}

export const searchProduct = (name) => async (dispatch, getState) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/products/search/product?name=${name}`)
        console.log(data)
        dispatch({type: 'SEARCH_PRODUCT', payload: data})
    } catch (error) {
        dispatch({type: 'SEARCH_PRODUCT_FAIL', payload: error.message})
    }
}






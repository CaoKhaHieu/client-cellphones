import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { getAllUserReducer, UserSigninReducer, UserSignupReducer} from './reducers/UserReducer'
import {getProductByTypeReducer, getAllProductReducer, getProductByIdReducer, paginationProductReducer, ascendingProductReducer, descendingProductReducer, searchProductReducer, reviewProductReducer} from './reducers/ProductReducer'

import { CartReducer} from './reducers/CartReducer'
import { addressReducer, getAllOrderReducer, getOrderByUserReducer } from './reducers/OrderReducer'
import { ChatReducer } from './reducers/ChatReducer'

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo') 
        ? JSON.parse(localStorage.getItem('userInfo'))
        : undefined
    },
    cart: {
        cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    }
    //   shippingAddress: localStorage.getItem('shippingAddress')
    //   ? JSON.parse(localStorage.getItem('shippingAddress'))
    //   : {},
    
}

const reducer = combineReducers({
    users: getAllUserReducer,
    userSignin: UserSigninReducer,
    userSignup: UserSignupReducer,

    allProduct: getAllProductReducer,
    // paginationProduct: paginationProductReducer,
    getProductById: getProductByIdReducer,
    
    searchProduct: searchProductReducer,

    cart: CartReducer,

    allOrder: getAllOrderReducer,
    address: addressReducer,
    orderByUser: getOrderByUserReducer,
    // orderCreate: orderCreateReducer,
    // deleteOrder: deleteOrderReducer,

    chat: ChatReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { getAllUserReducer, UserSigninReducer, UserSignupReducer} from './reducers/UserReducer'
import {getProductByTypeReducer, getAllProductReducer, SaveProductReducer, DeleteProductReducer, getProductByIdReducer, paginationProductReducer, ascendingProductReducer, descendingProductReducer, searchProductReducer} from './reducers/ProductReducer'

import { CartReducer} from './reducers/CartReducer'
import { getAllOrderReducer } from './reducers/OrderReducer'

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
    // deleteUser: deleteUserReducer,

    allProduct: getAllProductReducer,
    paginationProduct: paginationProductReducer,
    getProductById: getProductByIdReducer,
    productSave: SaveProductReducer,
    productDelete: DeleteProductReducer,
    searchProduct: searchProductReducer,

    cart: CartReducer,

    allOrder: getAllOrderReducer,
    // orderCreate: orderCreateReducer,
    // deleteOrder: deleteOrderReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
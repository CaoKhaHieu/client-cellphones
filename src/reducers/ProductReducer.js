
export const getAllProductReducer = (state = {product: []}, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCT':
            console.log(action.payload);
            return {...state, product: action.payload}

        case 'GET_ALL_PRODUCT_FAIL':
            return {...state, error: action.payload}

        case 'ASCENDING_PRODUCT':{
            console.log(action.payload);
            let newList = [...state.product]
            console.log(newList)
            newList = newList.sort((a,b) => b.salePrice - a.salePrice)
            return {...state, product: newList}
        }

        case 'DESCENDING_PRODUCT':{
            let newList = [...state.product]
            newList = newList.sort((a,b) => a.salePrice - b.salePrice)
            return {...state, product: newList}
        }

        case 'FILTER_PRODUCT':{
            let newList = [...state.product]
            console.log(action.payload)
            newList = newList.filter(item => item.type === action.payload)
            return {...state, product: newList}
        }

        case 'FILTER_PRODUCT_BY_PRICE':{
            let newList = [...state.product]
            newList = newList.filter(item => item.salePrice >= action.payload.startPrice && item.salePrice <= action.payload.endPrice)
            return {...state, product: newList}
        }

        default:
            return state
           
    }
}

export const paginationProductReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PAGINATION_PRODUCT':
            return {...state, product: action.payload}
            
    
        default:
            return state
           
    }
}

export const getProductByIdReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_BY_ID':{
            return {...state, product: action.payload}
        }
    
        default: return state
    }
}

// export const DetailProductReducer = (state = {}, action) => {
//     switch (action.type) {
//         case 'GET_ALL_PRODUCT':
//             return {...state, product: action.payload}
    
//         default:
//             return state
//     }
// }

export const SaveProductReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_PRODUCT':{
            console.log({...state, product: action.payload})
            return {...state, product: action.payload}
        }

        case 'SAVE_PRODUCT_FAIL':{
            return {...state, error: action.payload}
        }
            
        default: return state
    }
}

export const DeleteProductReducer = (state = {}, action) => {
    switch (action.type) {
        case 'DELETE_PRODUCT':{
            return {...state, product: action.payload}
        }
            
        case 'DELETE_PRODUCT_FAIL':{
            return {...state, error: action.payload}
        }
    
        default: return state
            
    }
}

export const searchProductReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_PRODUCT':{
            return {...state, products: action.payload}
        }

        case 'SEARCH_PRODUCT_FAIL':{
            return {...state, error: action.payload}
        }
    
        default: return state
    }
}


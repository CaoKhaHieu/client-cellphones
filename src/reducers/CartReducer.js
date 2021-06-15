
export const CartReducer = (state = {cartItems: []}, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let newList = [...state.cartItems]
            console.log(newList)
            const exists = newList.find(item => item._id === action.payload._id)
            console.log(exists)
            if (exists) {
                newList = newList.map((item) => item._id === action.payload._id ? { ...exists, qty: exists.qty + 1 } : item)
            }else{
                const product = {
                    ...action.payload,
                    qty: 1,
                }
                newList.push(product);
            }

            localStorage.setItem('cartItems', JSON.stringify(newList))
            return {
                ...state,
                cartItems: newList
            };
        }
            
        
        case 'DELETE_TO_CART': {
            let newList = [...state.cartItems]
            console.log(newList)
            const exists = newList.find(item => item._id === action.payload._id)
            console.log(exists)
            if (exists.qty === 1) {
                newList = newList.filter((item) => item._id !== exists._id)
            }else{
                newList = newList.map((item) => item._id === action.payload._id ? { ...exists, qty: exists.qty - 1 } : item)
            }
    
            localStorage.setItem('cartItems', JSON.stringify(newList))
            return {
                ...state,
                cartItems: newList
            };
        }
            
        case 'DELETE_QTY_PRODUCT': {
            let newList = [...state.cartItems]
            
            newList = newList.filter((item) => item._id !== action.payload._id)
            
            localStorage.setItem('cartItems', JSON.stringify(newList))
            return {
                ...state,
                cartItems: newList
            };
        }

        case 'CART_EMTY':{
            return {...state, cartItems: []}
        }
        default:
            return state;
    }

}


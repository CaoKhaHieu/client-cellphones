// export const orderCreateReducer = (state = {}, action) => {
//     switch (action.type) {
//         case 'ORDER_CREATE_SUCCESS':
//             return {...state, order: action.payload}
    
//         default:
//             return state
//     }
// }

export const getAllOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_ORDER':{
            return {...state, order: action.payload}
        }

        case 'ORDER_CREATE_SUCCESS':
            return {...state, order: action.payload}

        case 'DELETE_ORDER':{
            console.log({...state, order: action.payload})
            return {...state, order: action.payload}
        }
    
        default: return state
    }
}

// export const deleteOrderReducer = (state = {}, action) => {
//     switch (action.type) {
//         case 'DELETE_ORDER':{
//             console.log({...state, order: action.payload})
//             return {...state, order: action.payload}
//         }
    
//         default: return state
//     }
// }
export const AddToCart = (product) => async (dispatch) => {
    console.log(product)
    dispatch({type: 'ADD_TO_CART', payload: product})
}

export const DeleteToCart = (product) => async (dispatch) => {
    console.log(product)
    dispatch({type: 'DELETE_TO_CART', payload: product})
}

export const DeleteQtyProduct = (product) => async (dispatch) => {
    dispatch({type: 'DELETE_QTY_PRODUCT', payload: product})
}


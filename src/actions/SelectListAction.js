import axios from "axios";

export const getAllSelectList = () => async (dispatch) => {
    try {
        const {data} = await axios.get('http://localhost:5000/selectList')
        dispatch({type: 'GET_ALL_SELECT_LIST', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const CreateSelectListItem = (item) => async (dispatch) => {
    try {
        const {data} = await axios.post('http://localhost:5000/selectList/create', item)
        dispatch({type: 'CREATE_SELECT_LIST_ITEM', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const UpdateSelectListItem = (item) => async (dispatch) => {
    try {
        const {data} = await axios.put(`http://localhost:5000/selectList/update/${item._id}`, item)
        dispatch({type: 'UPDATE_SELECT_LIST_ITEM', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getSelectListItemById = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/selectList/detail/${id}`)
        dispatch({type: 'GET_SELECT_LIST_ITEM_BY_ID', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteSelectListItemById = (id) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`http://localhost:5000/selectList/delete/${id}`)
        dispatch({type: 'DELETE_SELECT_LIST_ITEM_BY_ID', payload: data})
    } catch (error) {
        console.log(error)
    }
}
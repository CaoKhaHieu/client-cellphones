import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../../actions/UserAction';
import ListUser from './ListUser';
import './AdminUser.css'

function AdminUser(props) {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.user)
    console.log(users)

    useEffect(() => {
        dispatch(getAllUser())
    }, [dispatch])
    return (
        <div>
            {
                users ? (<ListUser users={users}></ListUser>) : (<h2> khong ton tai user nao</h2>)
            }
        </div>
    );
}

export default AdminUser;
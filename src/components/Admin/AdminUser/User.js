import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser, getAllUser } from '../../../actions/UserAction';

function User(props) {
    const {user} = props
    const dispatch = useDispatch()
    const handleDeleteUser = async (user) => {
        console.log(user)
        await dispatch(deleteUser(user._id))
        dispatch(getAllUser())
    }

    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
            <td><button onClick={() => handleDeleteUser(user)}>Delete</button></td>
        </tr>
    );
}

export default User;
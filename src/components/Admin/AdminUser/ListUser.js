import React from 'react';
import User from './User';


function ListUser(props) {
    const {users} = props

    return (
        <div>
            <table>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>address</th>
                    <th>phone</th>
                </tr>
                {
                    users.map(item => (<User user={item} key={item._id}></User>))
                }
            </table>
        </div>
    );
}

export default ListUser;
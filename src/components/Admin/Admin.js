import React from 'react';
import { useSelector } from 'react-redux';
import './Admin.css'
import {Link} from 'react-router-dom'

function Admin(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, error} = userSignin;
    
    return (
        <div className="admin">
            {
                userInfo.isAdmin ? (
                    <div>
                        <Link to="/admin/product"> quan li san pham</Link>
                        <Link to="/admin/user"> quan li user</Link>
                        <Link to="/admin/order"> quan li don hang</Link>
                    </div>
                ) : (<h2>error</h2>)
            }
        </div>
    );
}

export default Admin;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css'
import {SignoutUser} from '../../actions/UserAction'
import { useHistory } from 'react-router';
import { searchProduct } from '../../actions/ProductAction';
import {Link} from 'react-router-dom'

function Header(props) {
  const dispatch = useDispatch()
  const history = useHistory()

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, error} = userSignin;
  const [search, setSearch] = useState('')
  const cartItems = useSelector(state => state.cart.cartItems)
  const amount = cartItems.reduce((a, b) => a + b.qty, 0)

  const [menu, setMenu] = useState(true)

  const handleSignout = () => {
    dispatch(SignoutUser())
  }



  const SearchProduct = async (e) => {
    await history.push('/search')
    dispatch(searchProduct(search))
    e.preventDefault()
  }

    return (
        <div className="header">
        <section id="menu">
          <div className="logo">
            <span><Link to='/'> SHOP </Link></span>
            {/* <form action="/search">
              <input type="text"></input>
              <button type="submit">submit</button>
            </form> */}
          </div>
          <div className="search">
            <form>
              <input type="text" name="search" onChange={e => setSearch(e.target.value)}></input>
              <button type="submit" onClick={(e) => SearchProduct(e)}>Search</button>
            </form>
          </div>
          <ul className="menu-list" id={menu ? 'hidden' : ''}>
            <li className="active">
              <Link to="/"> Trang Chủ </Link>
            </li>
            <li>
              <Link to='/product'> Product </Link>
            </li>
            {
              userInfo ? (<li><a>{userInfo.name}</a> <a onClick={handleSignout}> dang xuat </a></li>) :(
                <div>
                  <li>
                    <Link to="/register"> dang ki </Link>
                  </li>
                  <li><Link to="/login"> đăng nhập </Link></li>
                </div>
                
              ) 
            }
            {
              userInfo && userInfo.isAdmin ? (<li>
                <li><Link to="/admin"> Admin </Link></li>
              </li>) : ''
            }
            <li>
              <Link to="/cart">
                <span className="shooping-cart">
                 
                </span>
                <span className="count"> {amount} </span>
              </Link>
            </li>
          </ul>
          <div className="bar" onClick={() => setMenu(!menu)}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </section>
      </div>
    );
}

export default Header;
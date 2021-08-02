import React, { useState, useEffect } from 'react';
import { Col} from 'antd';
import {useDispatch, useSelector} from 'react-redux'
import { commentProduct, getproductById } from '../../actions/ProductAction';
import {useParams} from 'react-router-dom'

import AllComment from './AllComment';

function CommentProduct(props) {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const allComment = useSelector(state => state.getProductById.product.comments)
  const {userInfo} = useSelector(state => state.userSignin)
  
  const Comment = () => {
    if(userInfo){
      const comment = {
        author: userInfo.name,
        isAdmin: userInfo.isAdmin,
        content: value,
        byUser: userInfo._id,
      }
      console.log(comment)
      dispatch(commentProduct(id, comment))
      setValue('')
    }
    else alert('Đăng nhập đi bạn êiiiii')
  }
  useEffect(() => {
    dispatch(getproductById(id))
  }, [])

    return (
      <div className='comment'>
        <Col span={18} align='start' style={{ alignItems:'center'}} xs={24} sm={24} md={18}>
          <div className="comment-area" style={{display: 'flex', alignItems:'center'}}>
            <textarea placeholder='Xin mời để lại câu hỏi, CellphoneS sẽ trả lời trong 1h từ 8h - 22h mỗi ngày.' rows={10} cols={3} value={value} onChange={(e) => setValue(e.target.value)}></textarea>
          </div>
          <div className="comment-send">
            <button onClick={() => Comment()}>Gửi</button>
          </div>
        </Col>

        <AllComment allComment={allComment}></AllComment>
      </div>

    )
}

export default CommentProduct;
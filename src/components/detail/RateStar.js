import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Rate, Row, Col, Divider, Progress} from 'antd'
import {useParams} from 'react-router-dom'
import { reviewProduct } from '../../actions/ProductAction';
import { StarOutlined } from '@ant-design/icons';

function RateStar(props) {
    const {id} = useParams()
    const dispatch = useDispatch()

    const [star, setStar] = useState(0)
    const [showRate, setShowRate] = useState(false)
    const [showEvaluate, setShowEvalute] = useState(false)
    const [evaluate, setEvaluate] = useState('')

    const {userInfo} = useSelector(state => state.userSignin)
    const product = useSelector(state => state.getProductById.product)
    
    const countReview = product.reviews.length
    let averageRate = Math.round(product.reviews.reduce((a,c) => a + c.star, 0) / countReview)

    if(userInfo) {
        var existsUser = product.reviews.find(x => x.name == userInfo.name)
    }
    
    const fiveStar = Math.round(product.reviews.filter(x => x.star === 5).length / countReview * 100)
    const fourStar = Math.round(product.reviews.filter(x => x.star === 4).length / countReview * 100)
    const threeStar = Math.round(product.reviews.filter(x => x.star === 3).length / countReview * 100)
    const twoStar = Math.round(product.reviews.filter(x => x.star === 2).length / countReview * 100)
    const oneStar = Math.round(product.reviews.filter(x => x.star === 1).length / countReview * 100)

    const onFinish = (value) => {
        const review ={
            name: userInfo.name,
            star: star,
            comment: evaluate,
        }
        dispatch(reviewProduct(id, review))  
        setEvaluate('')
        setShowEvalute(false)
        setShowRate(false)
    }
    const setRate = (value) => {
        console.log(value)
        setStar(value)
        setShowEvalute(true)
    }
    return (
        
        <div className="">
            <Row>
                <Col span={18} xs={24} sm={24} md={24} style={{minWidth:'100%'}}>
                    <span className="rate-star-title">{product.reviews.length} Đánh giá {product.name}</span>
                </Col>
            </Row>
            <Row>
                <Col span={18} xs={24} sm={24} md={18}>
                <div className='rate'>
                <div className="rate-info">
                    <Row>
                        <Col span={7} style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                            <p className="star-average" style={{textTransform:'uppercase', fontSize:'18px'}}>sao trung bình</p>
                            <p className="star-average-num" style={{marginBottom: 0, fontSize: '25px', color: 'orange'}}>
                                {isNaN(averageRate) ? 0 : averageRate}
                                <StarOutlined style={{fontSize: '23px', color: 'orange', fontWeight: 'bolder', paddingBottom: '3px'}}></StarOutlined>
                            </p>
                        </Col>
                        <Col span={10}>
                            <li className="thongke">
                                <div className="numstar">5 <StarOutlined style={{color: 'orange', margin: '0 5px'}}></StarOutlined></div>
                                <p className="percent" style={{display: 'flex'}}><Progress status="active" percent={fiveStar} strokeColor='orange' style={{display: 'flex', alignItems: 'center', width:'100%', fontSize: '15px'}}/></p>
                            </li> 
                            <li className="thongke">
                                <div className="numstar">4 <StarOutlined style={{color: 'orange', margin: '0 5px'}}></StarOutlined></div>
                                <p className="percent" style={{display: 'flex'}}><Progress status="active" percent={fourStar} strokeColor='orange' style={{display: 'flex', alignItems: 'center', width:'100%', fontSize: '15px'}}/></p>
                            </li>
                            <li className="thongke">
                                <div className="numstar">3 <StarOutlined style={{color: 'orange', margin: '0 5px'}}></StarOutlined></div>
                                <p className="percent" style={{display: 'flex'}}><Progress status="active" percent={threeStar} strokeColor='orange' style={{display: 'flex', alignItems: 'center', width:'100%', fontSize: '15px'}}/></p>
                            </li>
                            <li className="thongke">
                                <div className="numstar">2 <StarOutlined style={{color: 'orange', margin: '0 5px'}}></StarOutlined></div>
                                <p className="percent" style={{display: 'flex'}}><Progress status="active" percent={twoStar} strokeColor='orange' style={{display: 'flex', alignItems: 'center', width:'100%', fontSize: '15px'}}/></p>
                            </li>
                            <li className="thongke">
                                <div className="numstar">1 <StarOutlined style={{color: 'orange', margin: '0 5px'}}></StarOutlined></div>
                                <p className="percent" style={{display: 'flex'}}><Progress status="active" percent={oneStar} strokeColor='orange' style={{display: 'flex', alignItems: 'center', width:'100%', fontSize: '15px'}}/></p>
                            </li>
                        </Col>
                        {
                            existsUser ? '' : (
                        <Col span={7} style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                            <button className='guidanhgia' onClick={() => {userInfo ? setShowRate(true) : alert('Đăng nhập đi bạn eii')}}> Gửi đánh giá </button>
                        </Col>)
                        }
                    </Row>
                </div>
                {
                    showRate ? (
                    <div className="rate-star" style={{fontSize: '15px', fontWeight:'bold', padding:'1rem 0'}}>
                        Vui lòng chọn đánh giá: <Rate onChange={setRate}/>
                    </div>
                    ) : ''
                }
                {
                    showEvaluate ? (<div className="rate-send">
                    <p>Đánh giá: </p>
                    <textarea placeholder="Vui lòng đánh giá sản phẩm ở đây" onChange={(e) => setEvaluate(e.target.value)}></textarea>
                    <button className='guidanhgia' onClick={() => onFinish()}> Gửi </button>
                </div>) : ''
                }

            </div>
                </Col>
            </Row>

            <Row style={{marginTop: '1rem'}}>
                 {
                     product.reviews.map(item => (
                <Col span={18} align='start' xs={24} sm={24} md={18}>
                     <div className="danhgia">
                         <p className="name" style={{fontWeight:'bold', fontSize: '15px'}}>{item.name}</p>
                         <div className="cmt" style={{display:'flex'}}>
                             <Rate style={{color: 'orange', fontSize: '14px'}} value={item.star} disabled={true}/>
                             <p className="cmt" style={{marginLeft: '1rem'}}>{item.comment}</p>
                         </div>
                         <Divider></Divider>
                     </div>
                </Col>))
                 }
             </Row> 
        </div>
    );
}

export default RateStar;
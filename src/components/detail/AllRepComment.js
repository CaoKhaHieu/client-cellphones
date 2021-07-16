import React from 'react';
import { WechatOutlined } from '@ant-design/icons';
import { getFirstCharacterUser } from '../../untils';

function AllRepComment(props) {
    const {allrepcomment, showRepComment, id} = props;
    
    return (
        <div className="all-comment-rep-list">
        {
            allrepcomment.map(repComment => (
            <div className="all-comment-rep-list-item">
              
              <div className="all-comment-info">
                <div className="all-comment-info-name">
                  {getFirstCharacterUser(repComment.nameUser)}
                </div>
                <strong>{repComment.nameUser}</strong>
              </div>
    
              <div className="all-comment-content">
                {repComment.content}
              </div>
    
              <div className="all-comment-more">
                <a className="all-comment-more-chat" onClick={() => showRepComment(id)}>
                  <WechatOutlined style={{color: '#e11b1e'}}/> <p> Trả lời</p>
                </a>
              </div>
              
            </div>
            
            ))
        }
        </div>
    );
}

export default AllRepComment;
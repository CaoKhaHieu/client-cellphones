import React from 'react';

function ListMessage(props) {
    const {messages, user} = props
    console.log(messages)
    return (
        <div className="ad-chatuser-listmessage">
            { 
                messages.length > 0 ? messages.map(message => (
                <div key={message._id} className={user.name === message.sender ? 'ad-chatuser-listmessage-message me' : 'ad-chatuser-listmessage-message'}>
                    
                    <p>{message.message}</p>
                    
                </div>)) : ''
            }
        </div>
    );
}

export default ListMessage;
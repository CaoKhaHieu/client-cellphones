import React from 'react';
import Contact from './Contact/Contact';
import Chat from './Chat/Chat'
import './AppChat.css'
function AppChat(props) {
    return (
        <div className="appchat">
            <Contact></Contact>
            <div className="chat">
                <Chat></Chat>
            </div>
            
        </div>
    );
}

export default AppChat;
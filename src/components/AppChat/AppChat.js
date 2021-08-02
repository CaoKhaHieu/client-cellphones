import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import axios from "axios";
import ListMessage from "./Components/ListMessage.js/ListMessage";
import TypeMessage from "./Components/TypeMessage/TypeMessage";
import './AppChat.css'
import { LineOutlined } from '@ant-design/icons';

let socket;

function AppChat(props) {
  const ENDPOINT = "http://localhost:5000";
  const [messages, setMessages] = useState([]);
  const [openChat, setOpenChat] = useState(false)
  const { userInfo } = useSelector((state) => state.userSignin)

  useEffect(() => {
    const getAllMessageByConversation = async () => {
      const {data}  = await axios.get(
        `http://localhost:5000/chat/message?idUser=${userInfo._id}`
      );
      setMessages(data.messageList);
    }

    getAllMessageByConversation()
  }, []);

  useEffect(() => {

    socket = io(ENDPOINT);

    socket.emit('join_conversation', userInfo._id);
    //setup response
    socket.on('newMessage', (message) => {
      console.log([...messages])
      setMessages([...messages, message]);
    });

    // disconnect ||cleanup the effect
    // return () => socket.disconnect();
    // eslint-disable-next-line
  }, [messages]);

  useEffect(() => {
    const scrollMessage = () => {
      var element = document.querySelector(".chatuser-listmessage");
      element.scrollTop = element.scrollHeight;
    }
    if(openChat){
      scrollMessage()
    }
  })

  const handleChatFormSubmit = async (message) => {
    console.log(message)
    const sender = userInfo.name;
    console.log(messages.length)

    //emit create conversation and chat
    if (messages.length === 0) {
      console.log('create')
      socket.emit('create_conversation', userInfo);

      socket.on('response_room', async (conversation) => {
        const payload = {
          sender,
          message,
          idConversation: conversation._id,
        };
        console.log(payload)
        const {data} = await axios.post('http://localhost:5000/chat/save', payload);
        console.log(data)
        socket.emit('chat', data);
      });
    } else {
      const idConversation = messages[0].idConversation._id || messages[0].idConversation;
      console.log(idConversation)
      // request save message
      const payload = {
        sender,
        message,
        idConversation,
      };
      console.log(payload, 'sdbhuca')
      const {data} = await axios.post('http://localhost:5000/chat/save', payload)
      console.log(data)
      socket.emit('chat', data);
    } 
  };

  
  return (
  <div className="appchat">
      
      {
        openChat ? '' : (
          <div className="openchat" onClick={() => setOpenChat(!openChat)}>
            Chat với nhân viên
          </div>
        )
      }
      
      {
        openChat ? (<div className="chatuser">
        <div className="chatuser-user">
          <span className="chatuser-user-name">Cao Kha Hieu</span>
          <span className="chatuser-user-line" onClick={() => setOpenChat(!openChat)}><LineOutlined></LineOutlined></span>
        </div>

        {
          messages ? (<ListMessage messages={messages} user={userInfo}></ListMessage>) : ''
        }

      <TypeMessage onSubmit={handleChatFormSubmit} ></TypeMessage>

      </div>) : ''
      }
  </div>);
}

export default AppChat;

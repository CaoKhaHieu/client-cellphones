import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import ListMessage from "./ListMessage";
import TypeMessage from "./TypeMessage";

function Chat(props) {
  let socket;
  const ENDPOINT = "localhost:5000";
  const [messages, setMessages] = useState([]);
  const { userInfo } = useSelector((state) => state.userSignin);
  const idConversation = useSelector((state) => state.chat.idConversation);
  const nameConversation = useSelector(state => state.chat.nameConversation)

  useEffect(() => {
    if (!idConversation) return;
    const getAllMessageByConversation = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/chat/message?idConversation=${idConversation}`
      );
      console.log(data);
      setMessages(data.messageList);
    };

    getAllMessageByConversation();
  }, [idConversation]);

  useEffect(() => {
    console.log('csndcasucaodnoa')
    socket = io(ENDPOINT);

    socket.emit("admin_join_conversation", idConversation);

    socket.on("newMessage", (message) => {
      console.log(message)
      setMessages([...messages, message]);
    });

    return () => socket.disconnect();
  });

  useEffect(() => {
    const scrollMessage = () => {
      var element = document.querySelector(".ad-chatuser-listmessage");
      element.scrollTop = element.scrollHeight;
    }
    
      scrollMessage()

  })

  const handleFormSubmit = async (message) => {
    const sender = userInfo.name;

    const payload = {
      sender,
      message,
      idConversation,
    };
    const { data } = await axios.post(
      "http://localhost:5000/chat/save",
      payload
    );
    console.log(data);
    socket.emit('chat', data);
  };
  return (
   
      <div className="ad-chatuser">
        <div className="ad-chatuser-user">
          <span className="ad-chatuser-user-name">{nameConversation}</span>
        </div>

        {messages ? (
          <ListMessage messages={messages} user={userInfo}></ListMessage>
        ) : (
          ""
        )}

        <TypeMessage onSubmit={handleFormSubmit}></TypeMessage>
      </div>
      
   
  );
}

export default Chat;

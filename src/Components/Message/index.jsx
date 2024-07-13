import React from "react";
import MessageStyle from "./Message.style";

const Message = ({ messageText, sendData }) => {
  return (
    <MessageStyle>
      <div className="message-text">{messageText}</div>
      <div className="message-data">{sendData}</div>
    </MessageStyle>
  );
};

export default Message;

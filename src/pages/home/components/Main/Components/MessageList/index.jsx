import { forwardRef, useEffect, useRef, useState } from "react";
import MessageListStyle from "./MessageList.style";
import Change from "../Change";
import MessageDelete from "../MessageDelete";
import SendMessage from "../TypText";

const MessageList = ({ scrollToEndHandler, message, ref }) => {
  useEffect(() => {
    scrollToEndHandler();
  }, []);

  const [showMessage, setShowMessage] = useState(false);
  return (
    <MessageListStyle ref={ref}>
      <div className="messageList__wrapper">
        <p className="message__text">{message}</p>
        <Change />
        <MessageDelete />
      </div>
    </MessageListStyle>
  );
};

export default MessageList;

import SendMessageStyle from "./SendMessage.style";
import PlusIcon from "../../../../images/icon-plus.svg";
import FaceIcon from "../../../../images/icon-face.svg";
import SendIcon from "../../../../images/send-icon.svg";
import { useEffect, useRef, useState } from "react";

function SendMessage({ scrollToEndHandler }) {
  const ref = useRef(null);
  const [message, setMessage] = useState("");
  const handlePlus = () => {
    console.log(ref.current);
  };

  function sendMessageHandler() {
    if (ref.current.value) {
      scrollToEndHandler();
      ref.current.value = "";
      console.log(message);
    }
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    sendMessageHandler();
  };

  return (
    <SendMessageStyle>
      <form onSubmit={onSubmitForm} className="sendMessage__wrapper">
        <img src={PlusIcon} alt="icon-plus" onClick={handlePlus} />
        <div className="sendMessage__typ-wrapper">
          <input
            ref={ref}
            className="sendMessage__typ-inp"
            type="text"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <img
            className="sendMessage__icon-face"
            src={FaceIcon}
            alt="icon-face"
          />
        </div>
        <button className="send__icon-wrapper" type="submit">
          <img src={SendIcon} alt="send-icon" />
        </button>
      </form>
    </SendMessageStyle>
  );
}

export default SendMessage;

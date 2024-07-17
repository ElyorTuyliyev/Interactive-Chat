import SendMessageStyle from "./SendMessage.style";
import PlusIcon from "../../../../images/icon-plus.svg";
import FaceIcon from "../../../../images/icon-face.svg";
import SendIcon from "../../../../images/send-icon.svg";
import { useEffect, useRef } from "react";
function SendMessage({ scrollToEndHandler }) {
  const ref = useRef(null);

  const handlePlus = () => {
    console.log(ref.current);
  };

  function sendMessageHandler() {
    // if (ref.current.value) {
    scrollToEndHandler();
    // }
  }

  return (
    <SendMessageStyle>
      <div className="sendMessage__wrapper">
        {ref.current}
        <img src={PlusIcon} alt="icon-plus" onClick={handlePlus} />
        <div className="sendMessage__typ-wrapper">
          <input
            ref={ref}
            className="sendMessage__typ-inp"
            type="text"
            placeholder="Type your message"
          />
          <img
            className="sendMessage__icon-face"
            src={FaceIcon}
            alt="icon-face"
          />
        </div>
        <img onClick={sendMessageHandler} src={SendIcon} alt="face-icon" />
      </div>
    </SendMessageStyle>
  );
}

export default SendMessage;

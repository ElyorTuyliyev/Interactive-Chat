import SendMessageStyle from "./SendMessage.style";
import PlusIcon from "../../../../images/icon-plus.svg";
import FaceIcon from "../../../../images/icon-face.svg";
import SendIcon from "../../../../images/send-icon.svg";
function SendMessage() {
  return (
    <SendMessageStyle>
      <div className="sendMessage__wrapper">
        <img src={PlusIcon} alt="icon-plus" />
        <div className="sendMessage__typ-wrapper">
          <input
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
        <img src={SendIcon} alt="face-icon" />
      </div>
    </SendMessageStyle>
  );
}

export default SendMessage;

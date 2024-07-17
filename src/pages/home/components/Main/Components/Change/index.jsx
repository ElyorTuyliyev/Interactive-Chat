import ChangeStyle from "./Change.style";
import ReplyIcon from "../../../../images/reply.svg";
import MessageIcon from "../../../../images/message.svg";
import EditIconIcon from "../../../../images/edit.svg";
import PinIconIcon from "../../../../images/pin.svg";
import BasketIcon from "../../../../images/Basket.svg";

function Change() {
  return (
    <ChangeStyle>
      <button>
        <img src={ReplyIcon} alt="Reply-icon" />
        <span> Reply</span>
      </button>
      <button>
        <img src={MessageIcon} alt="MessageIcon-icon" />
        <span> Thread Reply</span>
      </button>
      <button>
        <img src={EditIconIcon} alt="EditIconIcon-icon" />
        <span> Edit Message</span>
      </button>
      <button>
        <img src={PinIconIcon} alt="PinIconIcon-icon" />
        <span> Pin to Conversation</span>
      </button>
      <button>
        <img src={BasketIcon} alt="BasketIcon-icon" />
        <span> Delete Message</span>
      </button>
    </ChangeStyle>
  );
}

export default Change;

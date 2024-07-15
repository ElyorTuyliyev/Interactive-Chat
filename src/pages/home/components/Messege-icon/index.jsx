import MessageIcon from "../../images/message-icon.svg";

function MessageIconText({ messageText }) {
  return (
    <>
      <div className="aside__chanel-wrapper">
        <img
          className="aside__message-icon"
          src={MessageIcon}
          alt="message-icon"
        />
        <p className="aside__message-chanel-text">{messageText}</p>
      </div>
    </>
  );
}

export default MessageIconText;

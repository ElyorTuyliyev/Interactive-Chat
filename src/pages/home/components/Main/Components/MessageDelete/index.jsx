import MessageDeleteStyle from "./MessageDelete.style";

function MessageDelete() {
  return (
    <MessageDeleteStyle>
      <div className="deleteMessage__wrapper">
        <p className="deleteMessage__text">Delete Message</p>
        <p className="deleteMessage__question">
          Are you sure you want to permanently delete this message?
        </p>
        <div className="deleteMessage__btn-wrapper">
          <button>Cancel</button>
          <button>Delete</button>
        </div>
      </div>
    </MessageDeleteStyle>
  );
}

export default MessageDelete;

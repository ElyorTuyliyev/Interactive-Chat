import { createRef } from "react";
import MainUser from "./Components/MainUser";
import MessageList from "./Components/MessageList";
import SendMessage from "./Components/TypText";
import MainStyle from "./Main.style";

function Main() {
  const messagesListRef = createRef();
  function scrollToEnd() {
    messagesListRef.current.scroll({
      behavior: "smooth",
      top: messagesListRef.current.scrollHeight,
    });
  }

  const mainMessageText = [
    {
      messageText: "No chats here yet…",
      key: "2",
    },
  ];
  return (
    <MainStyle>
      <div className="main__wrapper ">
        <MainUser />
        {/* {mainMessageText.map((item) => (
          <MessageIconText key={item.messageText} {...item} />
          ))} */}
        <MessageList ref={messagesListRef} scrollToEndHandler={scrollToEnd} />
        <SendMessage
          messagesListRef={messagesListRef}
          scrollToEndHandler={scrollToEnd}
        />
      </div>
    </MainStyle>
  );
}

export default Main;

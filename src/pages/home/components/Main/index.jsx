import { createRef } from "react";
import MainUser from "./Components/MainUser";
import MessageList from "./Components/MessageList";
import SendMessage from "./Components/TypText";
import MainStyle from "./Main.style";
import MessageIconText from "../Message-icon";

function Main() {
  const messagesListRef = createRef();
  function scrollToEnd() {
    messagesListRef.current?.scroll({
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
        {mainMessageText.map((item) => (
          <MessageIconText key={item.messageText} {...item} />
        ))}
        <MessageList
          ref={messagesListRef}
          scrollToEndHandler={scrollToEnd}
          message={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nobis blanditiis eveniet quibusdam quidem, voluptatem officia praesentium. Aut perspiciatis, error reiciendis numquam repudiandae maxime id, deleniti est fugit esse sunt!"
          }
        />
        <SendMessage
          messagesListRef={messagesListRef}
          scrollToEndHandler={scrollToEnd}
        />
      </div>
    </MainStyle>
  );
}

export default Main;

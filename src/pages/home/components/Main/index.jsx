import MessageIconText from "../Message-icon";
import MainStyle from "./Main.style";

function Main() {
  const mainMessageText = [
    {
      messageText: "No chats here yet…",
      key: "2",
    },
  ];
  return (
    <MainStyle>
      <div className="main__wrapper ">
        {/* {mainMessageText.map((item) => (
          <MessageIconText key={item.messageText} {...item} />
        ))} */}
      </div>
    </MainStyle>
  );
}

export default Main;

import MainUser from "./Components/MainUser";
import SendMessage from "./Components/TypText";
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
        <MainUser />
        {/* {mainMessageText.map((item) => (
          <MessageIconText key={item.messageText} {...item} />
          ))} */}
        <SendMessage />
      </div>
    </MainStyle>
  );
}

export default Main;

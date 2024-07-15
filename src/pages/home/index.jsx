import MessageIconText from "./components/Messege-icon";
import HomeStyle from "./home.style";
import BarsIcon from "./images/bars-icon.svg";
import LoopIcon from "./images/Loop-icon.svg";

function Home() {
  const asideMessageText = [
    {
      messageText: "You currently have no channels",
      key: "1",
    },
  ];
  const mainMessageText = [
    {
      messageText: "No chats here yet…",
      key: "2",
    },
  ];
  return (
    <>
      <HomeStyle>
        <div className="aside__wrapper">
          <div className="aside__menu-wrapper">
            <img className="aside__bars-icon" src={BarsIcon} alt="bars-icon" />
            <div className="aside__search-wrapper">
              <img
                className="aside__loop-icon"
                src={LoopIcon}
                alt="loop-icon"
              />
              <input
                className="aside__input-search"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          {/* {asideMessageText.map((item) => (
            <MessageIconText key={item.messageText} {...item} />
          ))} */}
        </div>
        <div className="main__wrapper ">
          {/* {mainMessageText.map((item) => (
            <MessageIconText key={item.messageText} {...item} />
          ))} */}
        </div>
      </HomeStyle>
    </>
  );
}

export default Home;

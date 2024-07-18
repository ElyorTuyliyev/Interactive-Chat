import Main from "./components/Main";
import MessageIconText from "./components/Message-icon";
import Users from "./components/User/Components/User";
import HomeStyle from "./home.style";
import BarsIcon from "./images/bars-icon.svg";
import LoopIcon from "./images/Loop-icon.svg";
import PersonImg from "./images/Profile pic.png";

function Home() {
  const asideMessageText = [
    {
      messageText: "You currently have no channels",
      key: "1",
    },
  ];

  const users = [
    {
      userImg: PersonImg,
      userName: "Bill Sell",
      userMessage: "Here’re my latest drone shots",
      userDate: "12:01",
    },
    {
      userImg: PersonImg,
      userName: "Bill Sell",
      userMessage: "Here’re my latest drone shots",
      userDate: "12:01",
    },
    {
      userImg: PersonImg,
      userName: "Bill Sell",
      userMessage: "Here’re my latest drone shots",
      userDate: "12:01",
    },
    {
      userImg: PersonImg,
      userName: "Bill Sell",
      userMessage: "Here’re my latest drone shots",
      userDate: "12:01",
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
          {users.map((item) => (
            <Users key={item.userDate} {...item} />
          ))}
          {/* 
          {asideMessageText.map((item) => (
            <MessageIconText key={item.messageText} {...item} />
          ))} */}
        </div>
        <Main />
      </HomeStyle>
    </>
  );
}

export default Home;

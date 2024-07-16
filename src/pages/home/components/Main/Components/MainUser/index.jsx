import MainUserStyle from "./MainUser.style";
import Person from "../../../../images/Profile pic.png";

function MainUser() {
  return (
    <>
      <MainUserStyle>
        <img className="MainUser__img" src={Person} alt="person " />
        <div className="mainUser__name-wrapper">
          <p className="mainUser__name">Bill Sell</p>
          <p className="mainUser__howLong-online">Online for 10 mins</p>
        </div>
      </MainUserStyle>
    </>
  );
}

export default MainUser;

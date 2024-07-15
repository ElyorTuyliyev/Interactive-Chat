import NewMessageNumber from "./New-message-number";
import OnlineOffline from "./Online-offline";
import UserStyle from "./User.style";

function Users({ userImg, userName, userMessage, userDate }) {
  return (
    <>
      <UserStyle>
        <div className="user__wrapper">
          <div className="user__img-wrapper">
            <img className="user__img" src={userImg} alt="person" />
            <OnlineOffline />
          </div>
          <div className="user__name-message-wrapper">
            <div className="User__name-wrapper">
              <p className="User__name">{userName}</p>
              <NewMessageNumber number={"10"} />
            </div>
            <div className="User__message-wrapper">
              <p className="User__message">{userMessage}</p>
              <p className="user__date">{userDate}</p>
            </div>
          </div>
        </div>
      </UserStyle>
    </>
  );
}

export default Users;

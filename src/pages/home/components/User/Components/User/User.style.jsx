import styled from "styled-components";

const UserStyle = styled.div`
  .user__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;
    padding: 14px 8px;
  }

  .user__img-wrapper {
    position: relative;
  }

  .user__img {
    width: 49px;
    height: 49px;
    object-fit: cover;
    border-radius: 50%;
  }

  .user__online-wrapper {
    width: 14.5px;
    height: 14.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #17191c;
    position: absolute;
    top: 0;
    right: 0;
  }

  .user__online-offline {
    width: 10.5px;
    height: 10.5px;
    border-radius: 50%;
    background-color: #20e070;
  }

  .user__name-message-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .User__name {
    font-size: 16px;
    color: white;
    font-weight: 400;
  }

  .User__name-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .User__message-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: space-between;
  }

  .User__message {
    font-size: 14px;
    color: #747881;
  }

  .user__data-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .user__write-number {
    width: fit-content;
    height: 22px;
    padding: 10px;
    background-color: red;
    color: #fff;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
  }

  .user__date {
    font-size: 14px;
    color: #747881;
  }
`;

export default UserStyle;

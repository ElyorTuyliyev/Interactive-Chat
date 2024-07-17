import styled from "styled-components";

const MessageDeleteStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: #000000af;
  display: flex;
  align-items: center;
  justify-content: center;
  .deleteMessage__wrapper {
    max-width: 320px;
    width: 100%;
    color: #fff;
    border-radius: 16px;
    background-color: #17191c;
    padding: 32px 16px;
  }

  .deleteMessage__text {
    font-weight: 500;
    margin: 0 0 8px 0;
  }

  .deleteMessage__question {
    line-height: 20px;
    margin: 0 0 32px 0;
  }

  .deleteMessage__btn-wrapper {
    width: 100%;
    display: flex;
    gap: 32px;
    justify-content: flex-end;
    button {
      color: #337eff;
      border: none;
      cursor: pointer;
      font-size: 14px;
      background-color: transparent;
      &:hover {
        color: #ffffff;
      }
    }
  }
`;

export default MessageDeleteStyle;

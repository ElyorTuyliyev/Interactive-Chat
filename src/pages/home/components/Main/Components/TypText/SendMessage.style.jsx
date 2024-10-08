import styled from "styled-components";

const SendMessageStyle = styled.div`
  background-color: #17191c;
  width: 100%;
  padding: 8px;
  border-left: 1px solid #2a2a2a;

  .sendMessage__wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: space-between;
  }

  .sendMessage__typ-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
  }

  .sendMessage__typ-inp {
    display: block;
    width: 100%;
    padding: 10px 16px;
    border-radius: 20px;
    font-weight: 300;
    background-color: transparent;
    border: 1px solid #272a30;
    outline: none;
    color: #fff;
    letter-spacing: 0.3px;
  }

  .sendMessage__icon-face {
    position: absolute;
    right: 4px;
  }

  .send__icon-wrapper {
    width: 45px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    display: flex;
    background-color: #4c525c;
    border: none;
  }
`;

export default SendMessageStyle;

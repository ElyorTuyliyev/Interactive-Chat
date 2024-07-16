import styled from "styled-components";

const SendMessageStyle = styled.div`
  background-color: #17191c;
  width: 100%;
  padding: 8px;
  border-left: 1px solid #2a2a2a;

  .sendMessage__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sendMessage__typ-wrapper {
    max-width: 500px;
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
    background-color: transparent;
    border: 1px solid #272a30;
    outline: none;
    color: #fff;
  }

  .sendMessage__icon-face {
    position: absolute;
    right: 4px;
  }
`;

export default SendMessageStyle;

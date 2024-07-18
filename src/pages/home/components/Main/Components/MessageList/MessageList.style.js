import styled from "styled-components";

const MessageListStyle = styled.div`
  margin: 0px 0 10px 0;

  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  .messageList__wrapper {
    color: #fff;
    max-height: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .message__text {
    max-width: 200px;
    font-size: 14px;
    font-weight: 300;
    color: #fff;
    background-color: #1c1e22;
    padding: 8px 16px;
    scroll-behavior: smooth;
    border-radius: 20px 20px 20px 0;
    position: relative;
  }
`;

export default MessageListStyle;

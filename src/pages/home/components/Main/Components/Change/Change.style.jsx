import styled from "styled-components";
const ChangeStyle = styled.div`
  max-width: 240px;
  width: 100%;
  background-color: #17191c;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px;
  position: absolute;
  z-index: 999;
  right: 20%;
  top: 20%;
  img {
    width: 24px;
    height: 24px;
  }
  button {
    width: 100%;
    cursor: pointer;
    display: flex;
    gap: 16px;
    align-items: center;

    background-color: transparent;
    border: none;
    padding: 10px;
    span {
      color: #fff;
      font-size: 16px;
    }
    &:last-child {
      span {
        color: red;
      }
    }
    &:hover {
      background-color: #333333;
      &:first-child {
        border-radius: 16px 16px 0 0;
      }
      &:last-child {
        border-radius: 0 0 16px 16px;
      }
    }
  }
`;

export default ChangeStyle;

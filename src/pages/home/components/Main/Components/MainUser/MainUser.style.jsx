import styled from "styled-components";

const MainUserStyle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: aliceblue;
  background-color: #17191c;
  padding: 9px;
  border-left: 1px solid #2a2a2a;
  display: flex;
  gap: 18px;

  .MainUser__img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .mainUser__name-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .mainUser__name {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
  }

  .mainUser__howLong-online {
    font-weight: 400;
    font-size: 16px;
    color: #7a7a7a;
  }
`;

export default MainUserStyle;

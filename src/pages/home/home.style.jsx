import styled from "styled-components";

const HomeStyle = styled.div`
  display: flex;

  .aside__wrapper {
    max-width: 360px;
    width: 100%;
    height: 100vh;
    border-radius: 10px 0 0 10px;
    background-color: #17191c;
  }

  .main__wrapper {
    width: 100%;
    height: 100vh;
    background-color: #000;
    border-radius: 0 10px 10px 0;
  }

  .aside__menu-wrapper {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 10px 16px;
  }

  .aside__search-wrapper {
    display: flex;
    position: relative;
  }

  .aside__loop-icon {
    position: absolute;
    top: 10px;
    left: 16px;
  }

  .aside__input-search {
    padding: 10px 0 10px 48px;
    border-radius: 20px;
    background-color: transparent;
    border: 1px solid #272a30;
    outline: none;
    color: #fff;
    font-weight: 400;
  }
`;

export default HomeStyle;

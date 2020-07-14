import styled from "styled-components";

import SignInBackground from "../../assets/background.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  background-color: #f5f5f5;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  #groupofSocialMedia {
    margin: 15px 0 5px 0;
  }

  button {
    width: 295px;
    height: 40px;

    margin-top: 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #00a7cf;

    color: white;
    font-size: 15px;
    font-weight: bold;
    padding-left: 20px;

    img {
      margin-right: 20px;
    }
  }
`;

export const Input = styled.div`
  background: #ffffff;
  border-radius: 4px;
  /* padding: 16px 50px; */
  width: 295px;
  height: 40px;

  border: 1px solid #e0e7ed;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;

    width: 100%;

    border: 0;
    background: transparent;
    &::placeholder {
      color: #c7d7e2;
    }
    & + input {
      margin-top: 8px;
    }
  }

  img {
    margin-left: 16px;

    margin-right: 10px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackground}) no-repeat center;
  background-size: cover;
`;

import styled from "styled-components";

export const Container = styled.div`
  grid-area: CC;

  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerFunctionArea = styled.div`
  height: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  background-color: white;

  h2 {
    margin-left: 8px;
    text-transform: uppercase;
  }

  div {
    display: flex;
    align-items: center;

    button {
      font-size: 16px;
      margin: 5px;
      padding: 8px 12px;
      cursor: pointer;

      border: 1px solid gray;
      background-color: #00a7cf;

      font-weight: bold;
      color: white;
    }
  }
`;

export const InputArea = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  height: 28px;
  margin-bottom: 8px;
  border: 1px solid gray;

  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  img {
    margin-right: 8px;
  }
`;

export const EmailsContent = styled.div`
  overflow-y: scroll;
  height: 100%;
  width: 97%;

  margin: 0 auto;

  ::-webkit-scrollbar {
    display: none;
  }

  a {
    padding: 2% 8% 2% 2%;
    background-color: #f8fafc;

    display: flex;

    text-decoration: none;
    color: black;
    margin-bottom: 8px;

    transition: font-weight 0.5s, padding 0.5s;

    &:hover {
      font-weight: bold;
      padding: 3% 8% 3% 2%;
    }

    p {
      &:nth-child(1) {
        width: 50%;
      }
      &:nth-child(2) {
        width: 20%;
        margin-left: 2%;
      }
      &:nth-child(3) {
        margin-left: 5%;
      }
    }
  }
`;

export const HeadTable = styled.div`
  display: flex;

  font-size: 12px;
  color: #79accd;
  padding: 18px 0;

  h2 {
    margin-left: 2%;
    &:nth-child(1) {
      width: 45%;
    }
    &:nth-child(2) {
      width: 20%;
    }
  }
`;

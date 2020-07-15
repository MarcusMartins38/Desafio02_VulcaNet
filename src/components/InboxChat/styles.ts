import styled from "styled-components";

export const Container = styled.div`
  grid-area: CC;
  max-height: 100%;

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

  div {
    display: flex;

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

export const ChatContent = styled.div`
  max-height: 88vh;
  height: 100%;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
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

export const ClientMessage = styled.div`
  margin: 16px 6px 8px 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  #perfil_image {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  p {
    margin: 0 6px;
    color: #636466;
    font-size: 16px;
  }

  #visto_image {
    width: 16px;
    height: 16px;

    margin: 0 6px;
  }
`;

export const TextDiv = styled.div`
  width: 600px;

  background-color: white;
  margin-top: 28px;

  font-family: Lato;
  font-size: 15px;
  color: #333333;
  line-height: 24px;

  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0px 10px 10px 10px;

  p {
    max-width: 560px;
    padding: 20px 0px 20px 20px;
  }
`;

export const UserMessage = styled.div`
  margin: 26px 16px 8px 6px;

  display: flex;
  justify-content: space-between;

  #user_info {
    margin-left: 280px;
  }

  #user_message {
    background-color: #aeffd4;
  }
`;

export const SendMessageDiv = styled.div`
  color: white;
  height: 64px;
  padding: 13px 14px;

  background-color: white;

  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 100%;

    border-radius: 10px;
    border: 1px solid #e5e5e5;
    padding: 0 8px;
  }
`;

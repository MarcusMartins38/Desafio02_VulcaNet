import styled from "styled-components";

export const Container = styled.div`
  grid-area: CI;

  background-color: white;

  max-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 16px;

  width: 90%;

  strong {
    color: #79accd;
  }

  div {
    margin: 8px;
  }
`;

export const UserContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  div {
    margin-left: 8px;

    strong {
      font-size: 16px;
      color: black;
    }

    p {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      color: #79accd;
    }
  }
`;

export const DivWriteDelete = styled.div`
  margin-top: 8px;

  button {
    width: 48%;
    margin: 0 1%;
    padding: 4px 0;
    background-color: transparent;
    border: 1px solid gray;
    cursor: pointer;
  }
`;

export const DivLastConversations = styled.div`
  strong {
    text-transform: uppercase;
    font-size: 13px;
  }
  div {
    display: flex;

    p {
      font-size: 16px;
      margin-left: 8px;
    }
  }
`;

export const DivObservation = styled.div`
  strong {
    text-transform: uppercase;
    font-size: 13px;
  }
  p {
    font-size: 14px;
    margin-top: 8px;
  }
`;

export const DivContacts = styled.div`
  display: flex;
  margin: 8px 0;

  align-items: center;

  div {
    margin-left: 8px;
    strong {
      text-transform: uppercase;
      font-size: 13px;
    }
    p {
      font-size: 14px;
    }
  }
`;

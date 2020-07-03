import styled from "styled-components";

export const Container = styled.div`
  grid-area: UI;

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
    color: blue;
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
      font-size: 14px;
      color: black;
    }

    p {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 10px;
      color: blue;
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
  }
`;

export const DivUltimasConversas = styled.div`
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

export const DivObservacao = styled.div`
  strong {
    text-transform: uppercase;
    font-size: 13px;
  }
  p {
    font-size: 14px;
    margin-top: 8px;
  }
`;

export const DivContatos = styled.div`
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

import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  grid-area: LU;

  background: linear-gradient(180deg, #39a0b8 0%, #2b6d7d 100%);

  max-height: 100vh;

  strong {
    color: white;
  }
  p {
    color: #dddddd;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 16px;

  width: 90%;
`;

export const UserContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }

  div {
    margin-left: 8px;

    strong {
      font-size: 16px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const InputArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  height: 28px;
  margin-bottom: 8px;

  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  img {
    margin-right: 5px;
  }
`;

export const DivClientes = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentClientList = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

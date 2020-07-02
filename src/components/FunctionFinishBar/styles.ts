import styled from "styled-components";

export const Container = styled.div`
  grid-area: FFB;

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
      border: 1px solid gray;
      background-color: transparent;
      color: blue;
      cursor: pointer;

      transition: background-color 0.5s, color 0.5s;

      &:hover {
        background-color: blue;
        color: white;
      }
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

  p {
    margin-right: 5px;
  }
`;

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
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }

  a {
    padding: 2% 8% 2% 2%;
    background-color: #f8fafc;

    display: flex;
    justify-content: space-between;
  }

  table {
    width: 98%;
    margin: 0 auto;

    thead {
      background-color: #e5e5e5;
      border: 0;

      th {
        text-align: left;
        color: #79accd;
        padding: 18px 0;
      }
    }

    tbody {
      width: 100%;

      a {
        min-width: 100%;
      }
      tr {
        background: #f8fafc;
        border: 1px solid #e5e5e5;
        border-radius: 5px;

        &:hover {
          background-color: white;
          font-weight: bold;
        }

        td {
          text-align: left;
          padding: 18px 5px;
        }
      }
    }
  }
`;

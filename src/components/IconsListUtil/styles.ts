import styled from "styled-components";

export const Container = styled.div`
  grid-area: ILU;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 15px 0 0 0;

  background-color: #f8fafc;

  a {
    display: flex;
    justify-content: center;
  }

  button,
  a {
    padding: 16px 0;
    width: 100%;
    background-color: transparent;

    &:hover {
      cursor: pointer;
      transition: background-color 0.5s;
      svg {
        transition: color 0.5s;
      }
    }
  }
  #calendar {
    color: #01baef;
    &:hover {
      background-color: #01baef;
      svg {
        color: white;
      }
    }
  }

  #wpp {
    color: green;
    &:hover {
      background-color: green;
      svg {
        color: white;
      }
    }
  }

  #email {
    color: red;
    &:hover {
      background-color: red;
      svg {
        color: white;
      }
    }
  }

  #skype {
    color: #01baef;
    &:hover {
      background-color: #01baef;
      svg {
        color: white;
      }
    }
  }

  #phone {
    color: purple;
    &:hover {
      background-color: purple;
      svg {
        color: white;
      }
    }
  }

  #chat {
    color: orange;
    &:hover {
      background-color: orange;
      svg {
        color: white;
      }
    }
  }
`;

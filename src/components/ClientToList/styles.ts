import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ClientProps } from "./index";

export const Content = styled.div`
  width: 90%;
`;

export const ClienteInfo = styled(NavLink)<ClientProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  margin-top: 16px;
  margin-bottom: 16px;

  cursor: pointer;
  text-decoration: none;

  transition: background-color 0.5s, padding 0.5s;

  #counter_of_notification {
    display:flex;
      align-items:center;
      text-align: center;

    width: 20px;
    height: 20px;

    
    background-color: #e33e1a;
    border: 1px solid white;

    margin-left: 30%;
    border-radius: 50%;

    display: ${(props) =>
      props.conversation && props.conversation > 0 ? "inline" : "none"};
    p {
      
      align-self: center;
      /* margin-left: 5px; */

      font-size: 13px;
      font-weight: bold;
      color: white;
      display: ${(props) =>
        props.conversation && props.conversation > 0 ? "inline" : "none"};
        
    }
    }
  }

  #info_client {
    display:flex;
    align-items: center;

    img {
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }


    strong {
      margin-left: 8px;
      font-size: 14px;
    }
    p {
      margin-left: 8px;
      font-size: 12px;
    }
  }
`;

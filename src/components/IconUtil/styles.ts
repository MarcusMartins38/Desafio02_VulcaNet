import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { IconProps } from "./index";

export const Link = styled(NavLink)<IconProps>`
position:relative;

&::after {
    background-color: #E33E1A;
    border: 2px solid rgba(255, 255, 255, 0.6);
    width: auto;
    height: 16px;
    padding: 3px 6px;
    position: absolute;
    bottom: 0px;
    right: -2px;
    border-radius: 50%;
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: white;
  content: '${(props) => props.conversation && props.conversation}';
  display: ${(props) =>
    props.conversation && props.conversation > 0 ? "inline" : "none"}

  
  }

  

`;

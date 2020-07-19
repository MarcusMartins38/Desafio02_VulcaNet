import React from "react";
import { NavLink } from "react-router-dom";

import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp, FaRegCalendarAlt, FaRocketchat } from "react-icons/fa";
import { AiOutlineSkype, AiOutlineMail } from "react-icons/ai";

import { Container } from "./styles";

interface ChannelProps {
  channel: number;
  type: string;
}

const IconsListUtil: React.FC = () => {
  return (
    <Container>
      <button id="calendar">
        <FaRegCalendarAlt size={30} />
      </button>
      <NavLink
        id="wpp"
        to={`/wppchat/1/1`}
        isActive={(match, location) => location.pathname.includes("wppchat")}
        activeStyle={{
          backgroundColor: "green",
          color: "white",
        }}
      >
        <FaWhatsapp size={30} />
      </NavLink>

      <NavLink
        id="email"
        to="/inbox"
        isActive={(match, location) => location.pathname.includes("inbox")}
        activeStyle={{
          backgroundColor: "red",
          color: "white",
        }}
      >
        <AiOutlineMail size={30} />
      </NavLink>

      <button id="skype">
        <AiOutlineSkype size={30} />
      </button>
      <button id="phone">
        <FiPhoneCall size={30} />
      </button>
      <button id="chat">
        <FaRocketchat size={30} />
      </button>
    </Container>
  );
};

export default IconsListUtil;

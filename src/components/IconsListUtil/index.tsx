import React, { useCallback, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp, FaRegCalendarAlt, FaRocketchat } from "react-icons/fa";
import { AiOutlineSkype, AiOutlineMail } from "react-icons/ai";

import { Container } from "./styles";

const IconsListUtil: React.FC = ({}) => {
  return (
    <Container>
      <button id="calendar">
        <FaRegCalendarAlt size={30} />
      </button>
      <Link id="wpp" to="/wppchat">
        <FaWhatsapp size={30} />
      </Link>
      <Link id="email" to="/inbox">
        <AiOutlineMail size={30} />
      </Link>
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

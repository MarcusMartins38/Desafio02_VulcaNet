import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp, FaRegCalendarAlt, FaRocketchat } from "react-icons/fa";
import { AiOutlineSkype, AiOutlineMail } from "react-icons/ai";

import { Container } from "./styles";

const IconsListUtil: React.FC = () => {
  return (
    <Container>
      <button id="calendar">
        <FaRegCalendarAlt size={30} />
      </button>
      <button id="wpp">
        <FaWhatsapp size={30} />
      </button>
      <button id="email">
        <AiOutlineMail size={30} />
      </button>
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

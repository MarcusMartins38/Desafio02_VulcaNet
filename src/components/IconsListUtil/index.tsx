import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp, FaRegCalendarAlt, FaRocketchat } from "react-icons/fa";
import { AiOutlineSkype, AiOutlineMail } from "react-icons/ai";

import { Container } from "./styles";

interface Props {
  emailButtonClicked: boolean;
  handleButtonEmail: () => void;
  wppButtonClicked: boolean;
  handleButtonWpp: () => void;
}

const IconsListUtil: React.FC<Props> = ({
  emailButtonClicked,
  handleButtonEmail,
  wppButtonClicked,
  handleButtonWpp,
}) => {
  const [emailStatus, setEmailStatus] = useState(emailButtonClicked);
  const [wppStatus, setWppStatus] = useState(wppButtonClicked);

  return (
    <Container>
      <button id="calendar">
        <FaRegCalendarAlt size={30} />
      </button>
      <button id="wpp">
        <FaWhatsapp size={30} onClick={handleButtonWpp} />
      </button>
      <button id="email">
        <AiOutlineMail size={30} onClick={handleButtonEmail} />
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

import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp, FaRegCalendarAlt, FaRocketchat } from "react-icons/fa";
import { AiOutlineSkype, AiOutlineMail } from "react-icons/ai";

import { Container } from "./styles";

import IconUtil from "../IconUtil";
import api from "../../services/api";

interface Props {
  id: number;
  channel: number;
}

const IconsListUtil: React.FC = () => {
  const [channelWpp, setChannelWpp] = useState(0);
  const [channelEmail, setChannelEmail] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    let CountWpp = 0;
    let CountEmail = 0;

    async function getChat() {
      const response = await api.get<Props[]>("/chats", {
        params: { customer: id },
      });
      response.data.map((chat) => {
        if (chat.channel === 1) {
          CountWpp++;
          return;
        }
        if (chat.channel === 2) {
          CountEmail++;
          return;
        } else return;
      });

      setChannelWpp(CountWpp);
      setChannelEmail(CountEmail);
    }

    getChat();
  }, [id]);

  return (
    <Container>
      <button id="calendar">
        <FaRegCalendarAlt size={30} />
      </button>
      <IconUtil
        id="wpp"
        to={`/wppchat/1/${id}`}
        isActive={(match, location) => location.pathname.includes("wppchat")}
        activeStyle={{
          backgroundColor: "green",
          color: "white",
        }}
        conversation={channelWpp}
      >
        <FaWhatsapp size={30} />
      </IconUtil>

      <IconUtil
        id="email"
        to={`/inbox/${id}`}
        isActive={(match, location) => location.pathname.includes("inbox")}
        activeStyle={{
          backgroundColor: "red",
          color: "white",
        }}
        conversation={channelEmail}
      >
        <AiOutlineMail size={30} />
      </IconUtil>

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

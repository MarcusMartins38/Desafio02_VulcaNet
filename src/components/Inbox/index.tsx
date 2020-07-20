import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";

import {
  Container,
  ContainerFunctionArea,
  InputArea,
  EmailsContent,
  HeadTable,
} from "./styles";

import lupa from "../../assets/lupa.svg";
import api from "../../services/api";

interface ChatProps {
  id: number;
  customer: number;
  channel: number;
  subject: string | null;
  start: number;
  messages: MessageProps[];
}

interface MessageProps {
  seen: boolean;
  timestamp: string;
  body: string;
  type: string;
}

const Inbox: React.FC = () => {
  const [chatData, setChatData] = useState<ChatProps[]>();

  const { id } = useParams();

  useEffect(() => {
    api
      .get("/chats", {
        params: {
          customer: id,
          channel: 2,
        },
      })
      .then((response) => {
        setChatData(response.data);
      });
  }, [id]);

  const formatDate = useCallback((timeStamp) => {
    const date = new Date(timeStamp * 1000);
    const formattedDate = format(date, "dd/MM/yyyy");
    return formattedDate;
  }, []);

  return (
    <Container>
      <ContainerFunctionArea>
        <h2>Caixa de Entrada</h2>
        <div>
          <InputArea>
            <input />
            <img src={lupa} alt="lupa" />
          </InputArea>
          <button>Novo Email</button>
        </div>
      </ContainerFunctionArea>
      <EmailsContent>
        <HeadTable>
          <h2>Assunto</h2>
          <h2>Inicio</h2>
          <h2>Ultima Mensagem</h2>
        </HeadTable>
        {chatData &&
          chatData.map((chat) => (
            <Link key={chat.id} to={`/inboxchat/2/${id}/${chat.id}`}>
              <p>{chat.subject}</p>
              <p>{formatDate(chat.start)}</p>
              <p>{formatDate(1594388082)}</p>
            </Link>
          ))}
      </EmailsContent>
    </Container>
  );
};

export default Inbox;

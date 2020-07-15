import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  ContainerFunctionArea,
  InputArea,
  EmailsContent,
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

interface UserProps {
  name: string;
  company: string;
  photo: string;
}

const Inbox: React.FC = () => {
  const [chatData, setChatData] = useState<ChatProps>({} as ChatProps);
  const [clientInfo, setClientInfo] = useState<ClientData>({} as ClientData);

  useEffect(() => {
    api.get("/chats").then((response) => {});
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
          <button>Finalizar Atendimento</button>
        </div>
      </ContainerFunctionArea>
      <EmailsContent>
        <table>
          <thead>
            <tr>
              <th>Assunto</th>
              <th>Inicio</th>
              <th>Ultima Mensagem</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </tbody>
        </table>
        <Link to="">
          <p>Suspensão Freelander 2</p>
          <p>20/10/2000</p>
          <p>10/05/2500</p>
        </Link>
      </EmailsContent>
    </Container>
  );
};

export default Inbox;

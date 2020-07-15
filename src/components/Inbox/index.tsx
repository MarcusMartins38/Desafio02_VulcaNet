import React, { useEffect, useState } from "react";

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
              <td>Suspensão Freelander 2</td>
              <td>01/10/2019</td>
              <td>22/10/2019</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </tbody>
        </table>
      </EmailsContent>
    </Container>
  );
};

export default Inbox;

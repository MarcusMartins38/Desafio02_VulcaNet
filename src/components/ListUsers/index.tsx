import React, { useState, useEffect, useCallback, useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";

import {
  Container,
  Content,
  UserContent,
  InputArea,
  DivClientes,
  ContentClientList,
} from "./styles";

import plusIcon from "../../assets/plusIcon.svg";
import lupa from "../../assets/lupa.svg";

import api from "../../services/api";

import ClientToList from "../ClientToList";

interface UserProps {
  name: string;
  company: string;
  photo: string;
}

interface ClientProps {
  id: number;
  name: string;
  photo: string;
  company: string;
}

interface ChatProps {
  id: number;
  customer: number;
  channel: number;
  subject: string | null;
  start: number;
}
const ListUsers: React.FC = () => {
  const [userData, setUserData] = useState<UserProps>({} as UserProps);
  const [clienteData, setClienteData] = useState<ClientProps[]>([]);

  const [chat, setChat] = useState<ChatProps[]>([]);
  const [count1, setCount1] = useState(0);

  var b = 0;

  // const { id } = useParams();

  useEffect(() => {
    api.get<ChatProps[]>("/chats").then((response) => {
      setChat(response.data);
    });
  }, []);

  useEffect(() => {
    api.get("/user").then((response) => {
      setUserData(response.data);
    });
  }, []);

  useEffect(() => {
    api.get("/customers").then((response) => {
      setClienteData(response.data);
    });
  }, []);

  function zeroOnCount() {
    b = 0;
  }

  return (
    <Container>
      <Content>
        <UserContent>
          <img alt="Perfil" src={userData.photo} />
          <div>
            <strong>{userData.name}</strong>
            <p>{userData.company}</p>
          </div>
        </UserContent>

        <InputArea>
          <input />
          <img src={lupa} alt="lupa" />
        </InputArea>

        <DivClientes>
          <p>Clientes</p>
          <img src={plusIcon} alt="plusIcon" />
        </DivClientes>

        <ContentClientList>
          {clienteData.map((client) => (
            <ClientToList
              key={client.id}
              to={`/wppchat/1/${client.id}`}
              onClick={zeroOnCount}
              conversation={
                (chat.map((chatuni) => {
                  if (chatuni.customer === client.id) {
                    console.log(b);
                    console.log(client.id + "  id");
                    return b++;
                  }
                }),
                b)
              }
            >
              <img alt="Perfil" src={client.photo} />
              <div>
                <strong>{client.name}</strong>
                <p>{client.company}</p>
              </div>
            </ClientToList>
          ))}
        </ContentClientList>
      </Content>
    </Container>
  );
};

export default ListUsers;

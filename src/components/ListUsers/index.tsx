import React, { useState, useEffect, useCallback, useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";

import {
  Container,
  Content,
  UserContent,
  InputArea,
  DivClientes,
  ContentClientList,
  ClientToListInfo,
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

  function handleCount(id: number) {
    var b = 0;

    chat.map((chatuni) => {
      if (chatuni.customer === id) {
        b++;
      }
    });

    return b;
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
            <ClientToListInfo key={client.id} to={`/wppchat/1/${client.id}`}>
              <div id="info_client">
                <img alt="Perfil" src={client.photo} />
                <div>
                  <strong>{client.name}</strong>
                  <p>{client.company}</p>
                </div>
              </div>
              {handleCount(client.id) > 0 ? (
                <div id="counter_of_notification">
                  <p>{handleCount(client.id)}</p>
                </div>
              ) : (
                <div></div>
              )}
            </ClientToListInfo>
          ))}
        </ContentClientList>
      </Content>
    </Container>
  );
};

export default ListUsers;

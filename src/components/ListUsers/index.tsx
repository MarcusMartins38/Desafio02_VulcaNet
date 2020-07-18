import React, { useState, useEffect, useCallback } from "react";

import {
  Container,
  Content,
  UserContent,
  InputArea,
  DivClientes,
  ContentClientList,
  ClienteInfo,
} from "./styles";

import plusIcon from "../../assets/plusIcon.svg";
import lupa from "../../assets/lupa.svg";

import api from "../../services/api";
import { useHistory } from "react-router-dom";

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

const ListUsers: React.FC = () => {
  const [userData, setUserData] = useState<UserProps>({} as UserProps);
  const [clienteData, setClienteData] = useState<ClientProps[]>([]);

  const history = useHistory();

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

  const handleClick = useCallback(
    (id) => {
      history.push(`/wppchat/1/${id}`);
    },
    [history]
  );

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
            <ClienteInfo key={client.id} onClick={() => handleClick(client.id)}>
              <img alt="Perfil" src={client.photo} />
              <div>
                <strong>{client.name}</strong>
                <p>{client.company}</p>
              </div>
            </ClienteInfo>
          ))}
        </ContentClientList>
      </Content>
    </Container>
  );
};

export default ListUsers;

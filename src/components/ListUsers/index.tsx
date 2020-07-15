import React, { useState, useEffect } from "react";

import {
  Container,
  Content,
  UserContent,
  InputArea,
  DivClientes,
  ConterntClientList,
  ClienteInfo,
} from "./styles";

import plusIcon from "../../assets/plusIcon.svg";
import lupa from "../../assets/lupa.svg";

import api from "../../services/api";

interface UserProps {
  name: string;
  company: string;
  photo: string;
}

const ListUsers: React.FC = () => {
  const [userData, setUserData] = useState<UserProps>({} as UserProps);

  useEffect(() => {
    api.get("/user").then((response) => {
      setUserData(response.data);
    });
  }, []);

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

        <ConterntClientList>
          <ClienteInfo>
            <img
              alt="Perfil"
              src="https://avatars3.githubusercontent.com/u/57776263?s=460&u=288a03e3830a5fb19dfe83a0f8f9f9abf48cfaac&v=4"
            />
            <div>
              <strong>Cliente</strong>
              <p>Legenda</p>
            </div>
          </ClienteInfo>

          <ClienteInfo>
            <img
              alt="Perfil"
              src="https://avatars3.githubusercontent.com/u/57776263?s=460&u=288a03e3830a5fb19dfe83a0f8f9f9abf48cfaac&v=4"
            />
            <div>
              <strong>Cliente</strong>
              <p>Legenda</p>
            </div>
          </ClienteInfo>

          <ClienteInfo>
            <img
              alt="Perfil"
              src="https://avatars3.githubusercontent.com/u/57776263?s=460&u=288a03e3830a5fb19dfe83a0f8f9f9abf48cfaac&v=4"
            />
            <div>
              <strong>Cliente</strong>
              <p>Legenda</p>
            </div>
          </ClienteInfo>
        </ConterntClientList>
      </Content>
    </Container>
  );
};

export default ListUsers;

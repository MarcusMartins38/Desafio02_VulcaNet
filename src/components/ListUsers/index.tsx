import React from "react";

import {
  Container,
  Content,
  UserContent,
  InputArea,
  DivClientes,
  ConterntClientList,
  ClienteInfo,
} from "./style";

const ListUsers: React.FC = () => {
  return (
    <Container>
      <Content>
        <UserContent>
          <img
            alt="Perfil"
            src="https://avatars3.githubusercontent.com/u/57776263?s=460&u=288a03e3830a5fb19dfe83a0f8f9f9abf48cfaac&v=4"
          />
          <div>
            <strong>Marcus Martins</strong>
            <p>Legenda</p>
          </div>
        </UserContent>

        <InputArea>
          <input />
          <p>Icon</p>
        </InputArea>

        <DivClientes>
          <p>Clientes | Em fila 3</p>
          <p>icon</p>
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

import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { FaWhatsapp, FaPen } from "react-icons/fa";
import { AiOutlineSkype, AiOutlineMail } from "react-icons/ai";

import {
  Container,
  Content,
  UserContent,
  DivWriteDelete,
  DivUltimasConversas,
  DivObservacao,
  DivContatos,
} from "./styles";

const UserList: React.FC = () => {
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

        <DivWriteDelete>
          <button>
            <FaPen color="blue" />
          </button>
          <button>
            <FiTrash2 color="red" />
          </button>
        </DivWriteDelete>

        <DivUltimasConversas>
          <strong>Ultimas Conversas</strong>
          <div>
            <FaWhatsapp size={20} color="gray" />
            <p>Data</p>
          </div>
          <div>
            <FaWhatsapp size={20} color="gray" />
            <p>Data</p>
          </div>
          <div>
            <AiOutlineSkype size={20} color="gray" />
            <p>Data</p>
          </div>
        </DivUltimasConversas>

        <DivObservacao>
          <strong>Observações</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse
            odio quis, et quas officia deleniti nam, rerum dignissimos minima
            veritatis eveniet? Error fugit doloremque nulla dolore debitis
            blanditiis officia!
          </p>
        </DivObservacao>

        <DivContatos>
          <FaWhatsapp size={30} color="gray" />
          <div>
            <strong>whats</strong>
            <p>123123123</p>
          </div>
        </DivContatos>

        <DivContatos>
          <AiOutlineMail size={30} color="gray" />
          <div>
            <strong>whats</strong>
            <p>123123123</p>
          </div>
        </DivContatos>

        <DivContatos>
          <AiOutlineSkype size={30} color="gray" />
          <div>
            <strong>whats</strong>
            <p>123123123</p>
          </div>
        </DivContatos>
      </Content>
    </Container>
  );
};

export default UserList;

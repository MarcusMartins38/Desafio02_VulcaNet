import React, { useState, useEffect, useCallback } from "react";
import { FiTrash2 } from "react-icons/fi";
import { FaWhatsapp, FaPen } from "react-icons/fa";
import { AiOutlineSkype, AiOutlineMail } from "react-icons/ai";
import { format, differenceInDays } from "date-fns";

import {
  Container,
  Content,
  UserContent,
  DivWriteDelete,
  DivUltimasConversas,
  DivObservacao,
  DivContatos,
} from "./styles";

import api from "../../services/api";

export interface ClientData {
  id: number;
  name: string;
  photo: string;
  company: string;
  lastConversations: ConversationProps[];
  observations: string;
  contacts: ContactsProps[];
}

interface ConversationProps {
  channel: number;
  finishedAt: number;
}

interface ContactsProps {
  channel: number;
  value: string;
}

const ClientInfo: React.FC = () => {
  const [clientInfo, setClientInfo] = useState<ClientData>({} as ClientData);

  useEffect(() => {
    api.get("/customers").then((response) => {
      setClientInfo(response.data[0]);
    });
  }, []);

  const formatDate = useCallback((timeStamp) => {
    const currentDate = new Date(Date.now());

    const date = new Date(timeStamp * 1000);
    const formattedDate = format(date, "dd/MM/yyyy");

    const comparedDate = differenceInDays(currentDate, date);

    const phraseDateFormatted = `${formattedDate} (${comparedDate} dias atrás)`;
    return phraseDateFormatted;
  }, []);

  return (
    <Container>
      {clientInfo && (
        <Content>
          <UserContent>
            <img alt="Perfil" src={clientInfo.photo} />
            <div>
              <strong>{clientInfo.name}</strong>
              <p>{clientInfo.company}</p>
            </div>
          </UserContent>

          <DivWriteDelete>
            <button>
              <FaPen color="#79ACCD" />
            </button>
            <button>
              <FiTrash2 color="red" />
            </button>
          </DivWriteDelete>

          <DivUltimasConversas>
            <strong>Ultimas Conversas</strong>
            {clientInfo.lastConversations !== undefined ? (
              clientInfo.lastConversations.map((item) => {
                if (item.channel === 1) {
                  return (
                    <div>
                      <FaWhatsapp size={20} color="gray" />
                      <p>{formatDate(item.finishedAt)}</p>
                    </div>
                  );
                }

                if (item.channel === 4) {
                  return (
                    <div>
                      <AiOutlineSkype size={20} color="gray" />
                      <p>{formatDate(item.finishedAt)}</p>
                    </div>
                  );
                }
              })
            ) : (
              <p></p>
            )}
          </DivUltimasConversas>

          <DivObservacao>
            <strong>Observações</strong>
            <p>{clientInfo.observations}</p>
          </DivObservacao>

          {clientInfo.contacts !== undefined ? (
            clientInfo.contacts.map((item) => {
              if (item.channel === 1) {
                return (
                  <DivContatos>
                    <FaWhatsapp size={30} color="gray" />
                    <div>
                      <strong>whats</strong>
                      <p>{item.value}</p>
                    </div>
                  </DivContatos>
                );
              }

              if (item.channel === 2) {
                return (
                  <DivContatos>
                    <AiOutlineMail size={30} color="gray" />
                    <div>
                      <strong>whats</strong>
                      <p>{item.value}</p>
                    </div>
                  </DivContatos>
                );
              }

              if (item.channel === 4) {
                return (
                  <DivContatos>
                    <AiOutlineSkype size={30} color="gray" />
                    <div>
                      <strong>whats</strong>
                      <p>{item.value}</p>
                    </div>
                  </DivContatos>
                );
              }
            })
          ) : (
            <p></p>
          )}
        </Content>
      )}
    </Container>
  );
};

export default ClientInfo;

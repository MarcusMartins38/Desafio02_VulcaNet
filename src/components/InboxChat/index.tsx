import React, { useEffect, useState, useCallback } from "react";

import {
  Container,
  ContainerFunctionArea,
  ChatContent,
  ClientMessage,
  UserInfo,
  TextDiv,
  UserMessage,
  SendMessageDiv,
} from "./styles";

import checkedMessage from "../../assets/checkedMessage.svg";
import uncheckedMessage from "../../assets/uncheckedMessage.svg";
import lupa from "../../assets/lupa.svg";
import InboxClip from "../../assets/InboxClip.svg";
import InboxImage from "../../assets/InboxImage.svg";
import InboxGroupIcons from "../../assets/InboxGroupIcons.svg";
import BackArrow from "../../assets/BackArrow.svg";

import { ClientData } from "../../components/ClientInfo";

import { format } from "date-fns";
import api from "../../services/api";
import { useParams, useHistory } from "react-router-dom";

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

const InboxChat: React.FC = () => {
  const [chatData, setChatData] = useState<ChatProps>({} as ChatProps);
  const [clientInfo, setClientInfo] = useState<ClientData>({} as ClientData);
  const [userData, setUserData] = useState<UserProps>({} as UserProps);

  const history = useHistory();

  const { id, chatid } = useParams();

  useEffect(() => {
    api.get("/user").then((response) => {
      setUserData(response.data);
    });
  }, [id]);

  useEffect(() => {
    api.get("/customers").then((response) => {
      setClientInfo(response.data[0]);
    });
  }, []);

  useEffect(() => {
    api
      .get("/chats", {
        params: {
          id: chatid,
        },
      })
      .then((response) => {
        setChatData(response.data[0]);
      });
  }, [chatid, id]);

  const formatDate = useCallback((timeStamp) => {
    const date = new Date(timeStamp * 1000);
    const formattedDate = format(date, "dd/MM/yyyy HH:mm");
    return formattedDate;
  }, []);

  const handleBackButton = useCallback(() => {
    history.push(`/inbox/${id}`);
  }, [history, id]);

  return (
    <Container>
      <ContainerFunctionArea>
        <div id="div_voltar">
          <button onClick={handleBackButton}>
            <img src={BackArrow} alt="BackArrow" />
          </button>

          <h2>Procedimento de Troca</h2>
        </div>
        <div id="div_button">
          <button>Finalizar Atendimento</button>
        </div>
      </ContainerFunctionArea>

      <ChatContent>
        {chatData && (
          <>
            {chatData.messages !== undefined ? (
              chatData.messages.map((message) => {
                if (message.type === "incoming") {
                  return (
                    <ClientMessage key={message.timestamp}>
                      <UserInfo>
                        <div id="div_info">
                          <img
                            id="perfil_image"
                            alt="Perfil"
                            src={clientInfo.photo}
                          />
                          <p>
                            <strong>{clientInfo.name}</strong> -{" "}
                            {formatDate(message.timestamp)}
                          </p>
                          <img
                            id="visto_image"
                            src={
                              message.seen === true
                                ? checkedMessage
                                : uncheckedMessage
                            }
                            alt="checkedMessage"
                          />
                        </div>

                        <div></div>
                      </UserInfo>
                      <TextDiv>
                        <p id="body_message">{message.body}</p>
                      </TextDiv>
                    </ClientMessage>
                  );
                } else {
                  return (
                    <UserMessage key={message.timestamp}>
                      <div></div>

                      <div>
                        <UserInfo>
                          <div></div>

                          <div id="div_info">
                            <img
                              id="visto_image"
                              src={
                                message.seen === true
                                  ? checkedMessage
                                  : uncheckedMessage
                              }
                              alt="checkedMessage"
                            />

                            <p>
                              <strong>{userData.name}</strong> -{" "}
                              {formatDate(message.timestamp)}
                            </p>

                            <img
                              id="perfil_image"
                              alt="Perfil"
                              src={userData.photo}
                            />
                          </div>
                        </UserInfo>
                        <TextDiv id="user_message">
                          <p id="body_message">{message.body}</p>
                        </TextDiv>
                      </div>
                    </UserMessage>
                  );
                }
              })
            ) : (
              <p>loading...</p>
            )}
          </>
        )}
      </ChatContent>

      <SendMessageDiv>
        <textarea placeholder="Digite sua mensagem..." />
        <div>
          <button>Responder</button>
          <div>
            <img src={InboxImage} alt="InboxImage" />
            <img src={InboxClip} alt="InboxClip" />
          </div>
          <img src={InboxGroupIcons} alt="InboxGroupIcons" />
        </div>
      </SendMessageDiv>
    </Container>
  );
};

export default InboxChat;

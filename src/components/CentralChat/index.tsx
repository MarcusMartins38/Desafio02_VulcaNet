import React from "react";

import {
  Container,
  ContainerFunctionArea,
  InputArea,
  ChatContent,
  ClientMessage,
  UserInfo,
  TextDiv,
  UserMessage,
  SendMessageDiv,
} from "./styles";

import checkedMessage from "../../assets/checkedMessage.svg";
import uncheckedMessage from "../../assets/uncheckedMessage.svg";
import sendingMessageGroup from "../../assets/sendingMessageGroup.svg";
import lupa from "../../assets/lupa.svg";

const CentralChat: React.FC = () => {
  return (
    <Container>
      <ContainerFunctionArea>
        <InputArea>
          <input />
          <img src={lupa} alt="lupa" />
        </InputArea>
        <div>
          <button>Finalizar Atendimento</button>
        </div>
      </ContainerFunctionArea>
      <ChatContent>
        <ClientMessage>
          <UserInfo>
            <img
              id="perfil_image"
              alt="Perfil"
              src="https://avatars3.githubusercontent.com/u/57776263?s=460&u=288a03e3830a5fb19dfe83a0f8f9f9abf48cfaac&v=4"
            />
            <p>
              <strong>João da Silva</strong> - 07/10/2019 14h10
            </p>
            <img id="visto_image" src={checkedMessage} alt="checkedMessage" />
          </UserInfo>
          <TextDiv>
            <p>
              Quisque enim purus, hendrerit et volutpat viverra, faucibus non
              neque. Suspendisse quis arcu lacus. Sed tincidunt dui at leo
              laoreet, vel suscipit mauris dignissim. Phasellus ullamcorper orci
              ac lorem ultrices, ac fringilla nisi bibendum. Integer quis
              aliquam massa, vitae condimentum lorem. Suspendisse scelerisque
              cursus nisl non pulvinar. Donec at varius nulla. Praesent
              volutpat, nibh ac volutpat pharetra, sapien sapien scelerisque
              sapien, id vehicula nibh elit in velit.
            </p>
          </TextDiv>
        </ClientMessage>

        <UserMessage>
          <div></div>

          <div>
            <UserInfo id="user_info">
              <img id="visto_image" src={checkedMessage} alt="checkedMessage" />

              <p>
                <strong>João da Silva</strong> - 07/10/2019 14h10
              </p>

              <img
                id="perfil_image"
                alt="Perfil"
                src="https://avatars3.githubusercontent.com/u/57776263?s=460&u=288a03e3830a5fb19dfe83a0f8f9f9abf48cfaac&v=4"
              />
            </UserInfo>
            <TextDiv id="user_message">
              <p>
                Quisque enim purus, hendrerit et volutpat viverra, faucibus non
                neque. Suspendisse quis arcu lacus. Sed tincidunt dui at leo
                laoreet, vel suscipit mauris dignissim. Phasellus ullamcorper
                orci ac lorem ultrices, ac fringilla nisi bibendum. Integer quis
                aliquam massa, vitae condimentum lorem. Suspendisse scelerisque
                cursus nisl non pulvinar. Donec at varius nulla. Praesent
                volutpat, nibh ac volutpat pharetra, sapien sapien scelerisque
                sapien, id vehicula nibh elit in velit.
              </p>
            </TextDiv>
          </div>
        </UserMessage>

        <ClientMessage>
          <UserInfo>
            <img
              id="perfil_image"
              alt="Perfil"
              src="https://avatars3.githubusercontent.com/u/57776263?s=460&u=288a03e3830a5fb19dfe83a0f8f9f9abf48cfaac&v=4"
            />
            <p>
              <strong>João da Silva</strong> - 07/10/2019 14h10
            </p>
            <img
              id="visto_image"
              src={uncheckedMessage}
              alt="uncheckedMessage"
            />
          </UserInfo>
          <TextDiv>
            <p>
              Quisque enim purus, hendrerit et volutpat viverra, faucibus non
              neque. Suspendisse quis arcu lacus. Sed tincidunt dui at leo
              laoreet, vel suscipit mauris dignissim. Phasellus ullamcorper orci
              ac lorem ultrices, ac fringilla nisi bibendum. Integer quis
              aliquam massa, vitae condimentum lorem. Suspendisse scelerisque
              cursus nisl non pulvinar. Donec at varius nulla. Praesent
              volutpat, nibh ac volutpat pharetra, sapien sapien scelerisque
              sapien, id vehicula nibh elit in velit.
            </p>
          </TextDiv>
        </ClientMessage>
      </ChatContent>

      <SendMessageDiv>
        <input type="text" placeholder="Digite sua mensagem..." />
        <img src={sendingMessageGroup} alt="sendingMessageGroup" />
      </SendMessageDiv>
    </Container>
  );
};

export default CentralChat;

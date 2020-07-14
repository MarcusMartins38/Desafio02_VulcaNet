import React from "react";

import {
  Container,
  ContainerFunctionArea,
  InputArea,
  EmailsContent,
} from "./styles";

import lupa from "../../assets/lupa.svg";

const Inbox: React.FC = () => {
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

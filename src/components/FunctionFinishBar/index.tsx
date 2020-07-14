import React from "react";

import { Container, InputArea } from "./styles";

import lupa from "../../assets/lupa.svg";

const FunctionFinishBar: React.FC = () => {
  return (
    <Container>
      <InputArea>
        <input />
        <img src={lupa} alt="lupa" />
      </InputArea>
      <div>
        <button>Finalizar Atendimento</button>
      </div>
    </Container>
  );
};

export default FunctionFinishBar;

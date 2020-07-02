import React from "react";

import { Container, InputArea } from "./styles";

const FunctionFinishBar: React.FC = () => {
  return (
    <Container>
      <InputArea>
        <input />
        <p>Icon</p>
      </InputArea>
      <div>
        <button>Transferir</button>
        <button>Finalizar Atendimento</button>
      </div>
    </Container>
  );
};

export default FunctionFinishBar;

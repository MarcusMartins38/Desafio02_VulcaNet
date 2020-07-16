import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Content, Input, Background } from "./styles";

import logo from "../../assets/logo.svg";
import groupofSocialMedia from "../../assets/socialMediaGroup.svg";
import usuarioIcon from "../../assets/usuarioIcon.svg";
import passwordIcon from "../../assets/passwordIcon.svg";
import rightArrow from "../../assets/rightArrow.svg";

import api from "../../services/api";

interface ApiData {
  user: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [formLogin, setFormLogin] = useState("");
  const [formPassword, setFormPassword] = useState("");

  const history = useHistory();

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const response = await api.get<ApiData>("/user");

      const { user, password } = response.data;

      if (user === formLogin && password === formPassword) {
        history.push("/wppchat/1");
      } else {
        console.log("Login/Password it's wrong");
      }
    },
    [formLogin, formPassword, history]
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <img
          id="groupofSocialMedia"
          src={groupofSocialMedia}
          alt="Group of Social Media"
        />
        <form onSubmit={handleSubmit}>
          <Input>
            <img src={usuarioIcon} alt="usuarioIcon"></img>
            <input
              value={formLogin}
              onChange={(event) => setFormLogin(event.target.value)}
              type="text"
              placeholder="Usuário"
            />
          </Input>

          <Input>
            <img src={passwordIcon} alt="passwordIcon"></img>
            <input
              value={formPassword}
              onChange={(event) => setFormPassword(event.target.value)}
              type="password"
              placeholder="Senha"
            />
          </Input>

          <button>
            ENTRAR
            <img src={rightArrow} alt="rightArrow" />
          </button>
        </form>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;

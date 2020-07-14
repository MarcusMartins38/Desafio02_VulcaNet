import React from "react";

import { Grid } from "./styles";

import ListUsers from "../../components/ListUsers";
import IconsListUtil from "../../components/IconsListUtil";
import FunctionFinishBar from "../../components/FunctionFinishBar";
import UserInfo from "../../components/UserInfo";
import CentralChat from "../../components/CentralChat";

const Main: React.FC = () => {
  return (
    <Grid>
      <ListUsers />
      <IconsListUtil />
      <FunctionFinishBar />
      <CentralChat />
      <UserInfo />
    </Grid>
  );
};

export default Main;

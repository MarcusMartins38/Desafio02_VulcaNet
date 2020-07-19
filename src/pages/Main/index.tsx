import React from "react";

import { Grid } from "./styles";

import ListUsers from "../../components/ListUsers";
import IconsListUtil from "../../components/IconsListUtil";
import ClientInfo from "../../components/ClientInfo";
import CentralChat from "../../components/CentralChat";

const Main: React.FC = () => {
  return (
    <Grid>
      <ListUsers />
      <IconsListUtil />
      <CentralChat />
      <ClientInfo />
    </Grid>
  );
};

export default Main;

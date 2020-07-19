import React from "react";

import { Grid } from "./styles";

import ListUsers from "../../components/ListUsers";
import IconsListUtil from "../../components/IconsListUtil";
import ClientInfo from "../../components/ClientInfo";
import InboxChat from "../../components/InboxChat";

const Main: React.FC = () => {
  return (
    <Grid>
      <ListUsers />
      <IconsListUtil />
      <InboxChat />
      <ClientInfo />
    </Grid>
  );
};

export default Main;

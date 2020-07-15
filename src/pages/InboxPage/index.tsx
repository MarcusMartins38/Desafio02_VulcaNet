import React, { useState, useCallback } from "react";

import { Grid } from "./styles";

import ListUsers from "../../components/ListUsers";
import IconsListUtil from "../../components/IconsListUtil";
import ClientInfo from "../../components/ClientInfo";
import Inbox from "../../components/Inbox";

const Main: React.FC = () => {
  return (
    <Grid>
      <ListUsers />
      <IconsListUtil />
      <Inbox />
      <ClientInfo />
    </Grid>
  );
};

export default Main;

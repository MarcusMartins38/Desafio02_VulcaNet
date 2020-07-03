import React from "react";

import { Grid } from "./styles";

import ListUsers from "../../components/ListUsers";
import IconsListUtil from "../../components/IconsListUtil";
import FunctionFinishBar from "../../components/FunctionFinishBar";
import UserInfo from "../../components/UserInfo";

const Main: React.FC = () => {
  return (
    <Grid>
      <ListUsers />
      <IconsListUtil />
      <FunctionFinishBar />
      <UserInfo />
    </Grid>
  );
};

export default Main;

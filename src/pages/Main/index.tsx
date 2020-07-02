import React from "react";

import { Grid } from "./styles";

import ListUsers from "../../components/ListUsers";
import IconsListUtil from "../../components/IconsListUtil";
import FunctionFinishBar from "../../components/FunctionFinishBar";

const Main: React.FC = () => {
  return (
    <Grid>
      <ListUsers />
      <IconsListUtil />
      <FunctionFinishBar />
    </Grid>
  );
};

export default Main;

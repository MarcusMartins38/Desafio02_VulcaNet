import React from "react";

import { Grid } from "./styles";

import ListUsers from "../../components/ListUsers";
import IconsListUtil from "../../components/IconsListUtil";

const Main: React.FC = () => {
  return (
    <Grid>
      <ListUsers />
      <IconsListUtil />
    </Grid>
  );
};

export default Main;

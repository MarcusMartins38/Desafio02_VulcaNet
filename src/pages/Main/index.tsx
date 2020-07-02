import React from "react";

import { Grid } from "./styles";

import ListUsers from "../../components/ListUsers";

const Main: React.FC = () => {
  return (
    <Grid>
      <ListUsers />
    </Grid>
  );
};

export default Main;

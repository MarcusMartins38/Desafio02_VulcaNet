import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Main from "../pages/Main";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={SignIn} exact path="/" />
      <Route component={Main} exact path="/chat" />
    </BrowserRouter>
  );
};

export default Routes;

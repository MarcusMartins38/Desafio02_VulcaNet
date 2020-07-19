import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import InboxPage from "../pages/InboxPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={SignIn} exact path="/" />
      <Route component={Main} path="/wppchat/:channel/:id" />
      <Route component={Main} path="/inboxchat/:channel/:id" />
      <Route component={InboxPage} path="/inbox" />
    </BrowserRouter>
  );
};

export default Routes;

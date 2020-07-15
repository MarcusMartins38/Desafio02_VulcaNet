import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import InboxPage from "../pages/InboxPage";
import InboxChat from "../pages/InboxChat";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={SignIn} exact path="/" />
      <Route component={Main} exact path="/wppchat" />
      <Route component={InboxPage} exact path="/inbox" />
      <Route component={InboxChat} exact path="/inboxchat:id" />
    </BrowserRouter>
  );
};

export default Routes;

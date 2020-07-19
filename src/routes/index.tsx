import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import InboxPage from "../pages/InboxPage";
import InboxChatPage from "../pages/InboxChatPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={SignIn} exact path="/" />
      <Route component={Main} path="/wppchat/:channel/:id" />
      <Route component={InboxChatPage} path="/inboxchat/:channel/:id" />
      <Route component={InboxPage} path="/inbox" />
    </BrowserRouter>
  );
};

export default Routes;

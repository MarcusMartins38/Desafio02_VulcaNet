import React, { useState, useCallback } from "react";

import { Grid } from "./styles";

import ListUsers from "../../components/ListUsers";
import IconsListUtil from "../../components/IconsListUtil";
import UserInfo from "../../components/UserInfo";
import CentralChat from "../../components/CentralChat";
import Inbox from "../../components/Inbox";

const Main: React.FC = () => {
  const [emailButtonClicked, setEmailButtonClicked] = useState(false);
  const [wppButtonClicked, setWppButtonClicked] = useState(true);

  const handleButtonWpp = useCallback(() => {
    setEmailButtonClicked(false);
    setWppButtonClicked(true);
  }, []);

  const handleButtonEmail = useCallback(() => {
    setEmailButtonClicked(true);
    setWppButtonClicked(false);
  }, []);

  return (
    <Grid>
      <ListUsers />
      <IconsListUtil
        emailButtonClicked={emailButtonClicked}
        handleButtonEmail={handleButtonEmail}
        wppButtonClicked={wppButtonClicked}
        handleButtonWpp={handleButtonWpp}
      />
      {emailButtonClicked === false ? <CentralChat /> : <Inbox />}
      <UserInfo />
    </Grid>
  );
};

export default Main;

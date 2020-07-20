import React from "react";
import { NavLinkProps } from "react-router-dom";

import { Content, ClienteInfo } from "./styles";

export interface ClientProps extends NavLinkProps {
  conversation?: number;
}

const ClientToList: React.FC<ClientProps> = ({
  conversation,
  children,
  ...props
}) => {
  return (
    <Content>
      <ClienteInfo conversation={conversation} {...props}>
        <div id="info_client">{children}</div>
        <div id="counter_of_notification">
          <p>{conversation}</p>
        </div>
      </ClienteInfo>
    </Content>
  );
};

export default ClientToList;

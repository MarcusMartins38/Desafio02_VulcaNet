import React from "react";
import { NavLinkProps } from "react-router-dom";

import { Link } from "./styles";

export interface IconProps extends NavLinkProps {
  conversation?: number;
}

const IconUtil: React.FC<IconProps> = ({
  conversation,
  children,
  ...props
}) => {
  return (
    <Link {...props} conversation={conversation}>
      {children}
    </Link>
  );
};

export default IconUtil;

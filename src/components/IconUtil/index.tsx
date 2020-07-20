import React, { useEffect } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp, FaRegCalendarAlt, FaRocketchat } from "react-icons/fa";
import { AiOutlineSkype, AiOutlineMail } from "react-icons/ai";

import { Link } from "./styles";

export interface IconProps extends NavLinkProps {
  conversation?: number;
}

const IconUtil: React.FC<IconProps> = ({
  conversation,
  children,
  ...props
}) => {
  useEffect(() => {
    console.log({ ...props });
  }, [props]);
  return (
    <Link {...props} conversation={conversation}>
      {children}
    </Link>
  );
};

export default IconUtil;

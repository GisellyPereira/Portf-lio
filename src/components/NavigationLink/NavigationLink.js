import React from "react";
import { Link } from "react-router-dom";

const NavigationLink = ({ to, children }) => (
  <Link to={to} className="ml-1 underline text-primary-head-lightGray font-semibold">
    {children}
  </Link>
);

export default NavigationLink;

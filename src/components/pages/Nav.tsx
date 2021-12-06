import React from "react";
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/buy">buy</Link>
      <Link to="/rent">Rent</Link>
    </div>
  );
};

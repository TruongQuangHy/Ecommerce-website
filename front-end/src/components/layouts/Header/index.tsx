import React from "react";
import Nav from "./Nav";

interface HeaderProps {
  handleShow: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleShow }) => {
  return (
    <header>
      <Nav handleShow={handleShow} />
    </header>
  );
};
export default Header;

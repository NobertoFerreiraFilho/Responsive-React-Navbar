import React, { useState, useEffect } from "react";
//Styles
import { Wrapper, Content, Logo, Menu, BtnMenu } from "./NavBar.styles";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <Wrapper>
      <Content>
        <Logo src="yourlogo.jpg" alt="YOUR LOGO" />
        <Menu>
          {(toggleMenu || screenWidth > 500) && (
            <ul className="list">
              <a href='/'><li className="items">Home</li></a>
              <a href='/'><li className="items">Proucts</li></a>
              <a href='/'><li className="items">Contact</li></a>
              <a href='/'><li className="items">About</li></a>
            </ul>
          )}
        </Menu>
        {screenWidth <= 500 && (
          <BtnMenu onClick={toggleNav} className="btn">
            <FontAwesomeIcon icon={faBars} size="2x" color="white" />
          </BtnMenu>
        )}
      </Content>
    </Wrapper>
  );
};

export default NavBar;

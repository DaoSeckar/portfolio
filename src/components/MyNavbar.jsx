import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const NavList = styled.ul`
  display: flex;
  
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 1rem;
`;

const NavItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 1rem;
  cursor: pointer;
  &:hover {
    color: #ff8b38;
  }
`;


const Logo = styled.img`
  height: 60px;
  
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
  }
`;

const MyNavbar = () => {
  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Nav>
      <NavList>
      <Logo src="./img/Icon.png" />
        <NavItem>
          <StyledNavLink
            to="/"
            exact
            onClick={() => handleNavLinkClick("hero")}
          >
            Home
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink
            to="/about"
            onClick={() => handleNavLinkClick("about")}
          >
            About
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink
            to="/works"
            onClick={() => handleNavLinkClick("works")}
          >
            Works
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink
            to="/contact"
            onClick={() => handleNavLinkClick("contact")}
          >
            Contact
          </StyledNavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default MyNavbar;

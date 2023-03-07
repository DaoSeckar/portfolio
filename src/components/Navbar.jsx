import React from 'react'
import styled from "styled-components"

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 1400px) {
    width: 90%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 769px) {
    margin-bottom: 0;
    
  }
`;

const Logo = styled.img`
  height: 69px;
  
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
  }
`;


const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  font-size: 18px;

  @media only screen and (max-width: 1100px) {
    font-size: 16px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
`;

const Icon = styled.img`
  width: 24px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 32px;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/Icon.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Project</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;

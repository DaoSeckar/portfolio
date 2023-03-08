import React from 'react'
import styled from "styled-components"
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #2A1D36;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #2A1D36;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Left>
        <Canvas>
          <Cube />
        </Canvas>
        </Left>
        <Right>
          <Title>This website was created with Vite, React, CSS, JS, and Three.js</Title>
          <WhatIDo>
            <Line src="./img/line.png" />
            <Subtitle>Spinning hello cube to catch your attention(Not Mobile Compatible)</Subtitle>
          </WhatIDo>
          <Desc>
            Thank you for visitting my portoflio!
          </Desc>
       
          <Button>See my works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
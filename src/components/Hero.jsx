import React from 'react'
import styled from "styled-components"
import { saveAs } from 'file-saver';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0 5%;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1248px) {
    margin: 0 100px;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;


const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
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
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    padding-left: 0px;
  }
`;

const Img = styled.img`
    width: 800px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;
    @media only screen and (max-width: 1248px) {
        width: 600px;
        height: 600px;
        }
    @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
    }
    @keyframes animate {
        to {
            transform: translateY(20px);
        }
    }
`;
const Hero = () => {

  const downloadFile = () => {
    const pdfUrl = '/img/ResumeFinal.pdf';
    const pdfName = 'ResumeFinal.pdf';
    saveAs(pdfUrl, pdfName);
}

    return (
        <Section id="hero">
            {/* <Navbar /> */}
            <Container>
                <Left>
                    <Title>Hello I'm Dao!</Title>
                    <WhatIDo>
                        <Line src="./img/line.png"></Line>
                        
                        <Subtitle>This is my portfolio</Subtitle>
                    </WhatIDo>
                    <Desc>I enjoy creating fun softwares and websites</Desc>
                    <Button onClick={downloadFile}>Download My Resume Here!</Button>
                </Left>
                <Right> 
                    <Img src="./img/animation.gif" />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero
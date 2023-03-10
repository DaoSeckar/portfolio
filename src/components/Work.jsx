import React, { useState } from "react";
import styled from "styled-components";

const data = [
  {
    title: "Web Design",
    description: "This is developed using React, Html, Css, JS",
    image: "https://cdn.discordapp.com/attachments/728451357748756510/1083593312751079484/image.png",
    link: "https://cozy-croquembouche-3d3693.netlify.app/",
  },
  {
    title: "Projects",
    description:
      "Projects that I have developed over the years",
    image: "https://cdn.discordapp.com/attachments/728451357748756510/1083595714061422672/image.png",
    link: "https://github.com/DaoSeckar/portfolio",
  },
  {
    title: "Social Media",
    icons: [
      //{
        //name: "Facebook",
        //icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
        //link: "https://www.facebook.com/",
      //},
      {
        name: "Linkedin",
        icon: "https://cdn-icons-png.flaticon.com/512/3536/3536569.png",
        link: "https://www.linkedin.com/in/dao-seckar/",
      },
      {
        name: "Github",
        icon: "https://cdn-icons-png.flaticon.com/512/3291/3291695.png",
        link: "https://github.com/DaoSeckar",
      },
    ],
  },
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: 200px;
  }
`;

const WorkTitle = styled.h2`
  font-size: 64px;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;

const ProjectTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

const ProjectLink = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #2A1D36;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #0070c0;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const SocialMediaIcon = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  text-decoration: none;
`;

const IconImage = styled.img`
  width: 50px;
  height: 50px;
`;

const IconName = styled.span`
  font-size: 18px;
  margin-top: 10px;
`;

const Work = () => {
  const [work, setWork] = useState(null);

  const handleProjectClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Section id="works">
      <Container>
        <Left>
          <List>
            {data.map((item, index) => (
              <ListItem
                key={index}
                text={item.title}
                onClick={() => setWork(item)}
              >
                {item.title}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work && work.link && (
            <Project>
              <ProjectImage src={work.image} alt={work.title} />
              <ProjectTitle>{work.title}</ProjectTitle>
              <ProjectDescription>{work.description}</ProjectDescription>
              <ProjectLink onClick={() => handleProjectClick(work.link)}>
                Visit Site
              </ProjectLink>
            </Project>
          )}
          {work && work.icons && (
            <SocialMedia>
              {work.icons.map((icon, index) => (
                <SocialMediaIcon key={index} href={icon.link} target="_blank">
                  <IconImage src={icon.icon}  />
                  <IconName>{icon.name}</IconName>
                </SocialMediaIcon>
              ))}
            </SocialMedia>
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Work;

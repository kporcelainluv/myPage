import React from "react";
import styled from "styled-components";
import avatar from "../static/avatar.jpg";

const Title = styled.h1`
  font-size: 3rem;
  line-height: 5rem;
  color: #333;
  margin: 0;
  text-align: left;
  font-family: Helvetica, sans-serif;
  letter-spacing: -0.57px;
`;

const Heading = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0;
  text-align: left;
  font-family: Helvetica, sans-serif;
  margin-bottom: 50px;
`;

const AboutBlock = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 2em;
  margin-left: 15em;
`;
const Wrap = styled.section`
  display: flex;
`;
const PortfolioLink = styled.a`
  color: black;
  font-size: 1rem;
  color: #212121;
  font-family: Helvetica, sans-serif;
  margin-top: 1em;
  text-decoration: underline;
`;
export default () => (
  <Wrap>
    <AboutBlock>
      <Heading>I WORK REMOTELY AS A</Heading>
      <Title>
        Front End Developer <br />
        focused on React
        <br />
        Responsive HTML/CSS
        <br /> Interested in Digital Design
      </Title>
      <PortfolioLink href="https://github.com/kporcelainluv">
        Works
      </PortfolioLink>
    </AboutBlock>

    <img src={avatar} width="100" height="50" />
  </Wrap>
);

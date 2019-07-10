import React from "react";
import styled from "styled-components";
import { Flex, Box } from "rebass";

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
  margin-left: 10em;
`;

const Wrapper = styled.section`
  display: flex;
  height: 100%;
`;

const PortfolioLink = styled.a`
  font-size: 1rem;
  color: #212121;
  font-family: Helvetica, sans-serif;
  margin-top: 1em;
  text-decoration: underline;
`;
const ImgBlock = styled.section`
  display: flex;
  margin-top: 8em;
  margin-left: 6em;
  flex-direction: column;
`;
const LinksNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.4em;
`;
const SocialLink = styled.span`
  font-size: 1rem;
  color: #212121;
  font-family: Helvetica, sans-serif;
  text-decoration: underline;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Img = styled.img`
  filter: grayscale(100%);
  border-radius: 50%;
`;

export default () => (
  <Wrapper>
    <Container>
      <Flex justifyContent="center">
        <Img src={`static/avatar.jpg`} width="120" height="120" />
      </Flex>
      <Box justifyContent="center">
        <Box mb="32px">Xenia Zhukova</Box>
        <Box>Frontend developer interested in digital design</Box>
        <Box mb="32px">
          <ul>
            <li>Responsive HTML/CSS</li>
            <li>React/Redux</li>
            <li>Apollo, Graphql</li>
            <li>Node</li>
            <li>a little bit of Clojure/Clojurescript</li>
          </ul>
        </Box>
      </Box>
      <Box mb="32px">
        My social accounts
        <ul>
          <li>github https://github.com/kporcelainluv</li>
          <li>telegram https://t.me/ksushaz</li>
          <li>zhukovaksusha@gmail.com</li>
        </ul>
      </Box>
      <Box mb="16px">
        My works
        <ul>
          <li>tic tac toe in javascript</li>
          <li>tic tac toe in typescript</li>
          <li>html academy, level1</li>
          <li>html academy, level1</li>
          <li>javascript, level2</li>
        </ul>
      </Box>
    </Container>
  </Wrapper>
);

import React from "react";
import styled from "styled-components";

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
const Wrap = styled.section`
  display: flex;
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
export default () => (
  <Wrap>
    <ImgBlock>
      <img src={`static/avatar.jpg`} width="240" height="240" />
      <LinksNav>
        <SocialLink href="https://twitter.com/kporcelainluv">
          Twitter
        </SocialLink>
        <SocialLink href="https://www.instagram.com/solitare4/">
          Instagram
        </SocialLink>
        <SocialLink href="https://t.me/ksushaz">Telegram</SocialLink>
      </LinksNav>
    </ImgBlock>
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
  </Wrap>
);

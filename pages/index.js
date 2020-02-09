import React from "react";
import styled from "styled-components";
import { Flex } from 'rebass';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 32px;
  font-family: 'Raleway', Roboto, sans-serif;
  font-size: 18px;
  line-height: 32px;
  
  h1 {
    margin-bottom: 8px;
  }
  
  h2 {
    margin: 0 0 8px;
  }
  
  h3 {
    font-weight: bold;
  }
  
  @media (max-width: 800px) {
    font-size: 14px;
    padding: 16px;
    
    .avatar {
      width: 100px;
      height: 100px;
    }
  }
`;

const A = styled.a`
  color: black;
  
  &:hover, focus {
    color: #333;
  }
`;

const HiddenElement = styled.h2`
position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0px;
  padding: 0px;
  clip: rect(0 0 0 0);
  overflow: hidden;
`

export default () => (
  <Container>
    <div>
      <HiddenElement className='visually-hidden'>Xenia Zhukova's website</HiddenElement>
      <Flex justifyContent={'center'}>
        <img className="avatar" src={`static/avatar.jpg`} width="120" height="120" alt={"Xenia Zhukova's photo"}/>
      </Flex>
      <Flex alignItems={'center'} flexDirection={'column'} mb={'16px'}>
        <h1>Xenia Zhukova</h1>
        <h2>Front-end developer</h2>
      </Flex>
      <section>
        <h3>Skills</h3>
        <ul>
          <li>Responsive HTML/CSS</li>
          <li>SASS</li>
          <li>Javascript</li>
          <li>React/Redux</li>
          <li>Firebase</li>
          <li>Styled components</li>
        </ul>
      </section>
      <section>
        <h3>Social</h3>
        <ul>
          <li><A href="https://github.com/kporcelainluv">Github</A></li>
          <li><A href="https://t.me/ksushaz">Telegram</A></li>
          <li><A href="mailto:zhukovaksusha@gmail.com">zhukovaksusha@gmail.com</A></li>
        </ul>
      </section>
      <section>
        <h3>Projects</h3>
        <ul>
          <li><A href="https://github.com/kporcelainluv/226838-device">HTML Academy, HTML/CSS 1</A></li>
          <li><A href="https://github.com/kporcelainluv/226838-sedona-17">HTML Academy, HTML/CSS 2</A></li>
          <li><A href="https://github.com/kporcelainluv/226838-cinemaddict-10">HTML Academy, JS 2</A></li>
          <li><A href="https://github.com/kporcelainluv/cinemaddict-react-app">Cinemaddict project in React.js</A></li>
          <li><A href="https://github.com/kporcelainluv/questionaryProject">Questionary project in React.js</A></li>
        </ul>
      </section>
      <section>
        <h3>Certificates</h3>
        <ul>
          <li><A href={`static/html1.pdf`}>HTML Academy, HTML/CSS 1</A></li>
          <li><A href={`static/html2.pdf`}>HTML Academy, HTML/CSS 2</A></li>
          <li><A href={`static/JS2.pdf`}>HTML Academy, Java Script 2</A></li>
          <li><A href='https://www.freecodecamp.org/certification/kporcelainluv/javascript-algorithms-and-data-structures'>FreeCodeCamp, JavaScript Algorithms and Data Structures</A></li>
          <li><A href={`#`}>Udemy, Modern React with Redux</A></li>
          <li><A href={`static/Coursera1.pdf`}>Coursera, Introduction to Python</A></li>
          <li><A href={`static/Coursera2.pdf`}>Coursera, Diving into Python</A></li>
          <li><A href={`static/stepik.pdf`}>Stepik.org, Programming on Python</A></li>
          <li><A href={`static/loftschool.pdf`}>Loftschool, Web-development for beginners</A></li>
        </ul>
      </section>
    </div>
  </Container>
);

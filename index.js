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
  
  h1 {
    margin-bottom: 8px;
  }
  
  h2 {
    margin: 0 0 8px;
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

export default () => (
  <Container>
    <div>
      <Flex justifyContent={'center'}>
        <img className="avatar" src={`static/avatar.jpg`} width="120" height="120" alt={"Xenia Zhukova's photo"}/>
      </Flex>
      <Flex alignItems={'center'} flexDirection={'column'} mb={'16px'}>
        <h1>Xenia Zhukova</h1>
        <h2>Frontend developer</h2>
      </Flex>
      <section>
        I have experience working with
        <ul>
          <li>Responsive HTML/CSS</li>
          <li>Javascript/Typescript</li>
          <li>React/Redux</li>
          <li>Apollo, Graphql</li>
          <li>Node</li>
          <li>a little bit of Clojure/Clojurescript</li>
        </ul>
      </section>
      <section>
        My social accounts
        <ul>
          <li><A href="https://github.com/kporcelainluv">Github</A></li>
          <li><A href="https://t.me/ksushaz">Telegram</A></li>
          <li><A href="mailto:zhukovaksusha@gmail.com">zhukovaksusha@gmail.com</A></li>
        </ul>
      </section>
      <section>
        My works
        <ul>
          <li><A href="https://github.com/kporcelainluv">HTML Academy, HTML/CSS 1</A></li>
          <li><A href="https://github.com/kporcelainluv">HTML Academy, HTML/CSS 2</A></li>
          <li><A href="https://github.com/kporcelainluv">HTML Academy, JS 2</A></li>
        </ul>
      </section>
      <section>
        My certificates
        <ul>
          <li><A href={`static/html1.pdf`}>HTML Academy, HTML/CSS 1</A></li>
          <li><A href={`static/html2.pdf`}>HTML Academy, HTML/CSS 2</A></li>
          <li><A href={`static/JS2.pdf`}>HTML Academy, Java Script 2</A></li>
          <li><A href='https://www.freecodecamp.org/certification/kporcelainluv/javascript-algorithms-and-data-structures'>FreeCodeCamp, JavaScript Algorithms and Data Structures</A></li>

          <li><A href={`static/Coursera1.pdf`}>Coursera, Intoduction to Python</A></li>
          <li><A href={`static/Coursera2.pdf`}>Coursera, Diving into Python</A></li>
          <li><A href={`static/stepik.pdf`}>Stepik.org, Programming on Python</A></li>
          <li><A href={`static/loftschool.pdf`}>Loftschool, Web-development for begginers</A></li>
        </ul>
      </section>
    </div>
  </Container>
);

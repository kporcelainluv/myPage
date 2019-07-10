import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
  }

  #__next {
    height: 100vh;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

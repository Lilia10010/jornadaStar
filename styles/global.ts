import { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    

  }
  body {
    background: #0e1217;
    position: relative;
    font-family: 'Roboto', sans-serif;
  }

  body, html {
    scroll-behavior: smooth;
    scrollbar-color: #ce3df3 #C2D2E4;
    color: #c6c6c6;
    -webkit-font-smoothing: antialiased;
    ::-webkit-scrollbar-track {
      background-color: transparent;
      position: absolute;
      opacity: 0.7;

    }
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #ce3df3

    }
  }
  body, input, button {
  }
  :root {
/* 
    --color-primary: #ce3df3; */
    --color-primary: #FFE300;

    --background-primary: #0e1217;
    --background-secondary: #1c2530;

    --box-shadow-primary:  rgba(0, 0, 0, 0.616) 0px 20px 30px -10px;

    --border-radius-primary: 3px;

    --padding-inner-default: 20px;
    --gray: #E5E5E5;
    --white: #f8f8f8;
    --titles: #363F5F;
    --secondary: #969CB2;
  }
  button {
    cursor: pointer;
  }

`;

export default StyleGlobal;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #fff;
    background-color:${(props) => props.theme.colors.background};
    padding: 16px;
    max-height: 100vh;
  }
`;
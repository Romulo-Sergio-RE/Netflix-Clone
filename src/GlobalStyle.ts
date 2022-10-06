import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html{
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
    }
    body{
      background: rgba(12, 10, 10, 1);
    }
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
`
;
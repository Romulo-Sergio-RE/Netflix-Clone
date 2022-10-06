import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html{
      font-size: 16px;
    }
    body{
      background: rgba(32, 29, 29, 1);
    }
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
`
;
import { createGlobalStyle } from "styled-components";
import { device } from "./breakpoints";

type Theme = {
	theme: {
		body: string;
		text: string;
	};
};
export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after{
      margin: 0;
      padding:0;
      box-sizing: inherit;
  }  

  html{
      box-sizing: border-box;
      font-size: 62.5%;
    

    
  }

  body {
    background: ${({ theme }: Theme) => theme.body};
    color: ${({ theme }: Theme) => theme.text};
    font-family: "Nunito Sans", sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
    transition: all 0.50s linear;

  }
  `;

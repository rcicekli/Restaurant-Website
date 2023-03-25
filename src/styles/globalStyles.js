import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
  }

  p {
    line-height: 1.4rem;
  }

  .btn-primary {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .5s linear;

  }
  .mynav{
    background: ${({ theme }) => theme.bodynavbar};
    
  }
  .raise{
    color: ${({ theme }) => theme.text};
   
  }
  .foodtext{
    color: ${({ theme }) => theme.text};
   
  }
  .abone{
    color: ${({ theme }) => theme.foottext};
  }

.yemekbtn{
  color: ${({ theme }) => theme.text};

}
.foot{

  color: ${({ theme }) => theme.foottext};

}
.bizkimizbtn{
  color: ${({ theme }) => theme.text};

}
.myfooter{
  background: ${({ theme }) => theme.bodyfooter};

}
.feather{
  background: ${({ theme }) => theme.son};
  color: ${({ theme }) => theme.text};



}
`;

export const lightTheme = {
  body: "#E8D4C3",
  text: "#121212",
  primary: "#6200ee",
  bodynavbar:"rgba(233, 213, 196, 0.45)",
  bodyfooter:"rgb(73,63,62)",
  foottext:"#E8D4C3",
  son:"gray"
};

export const darkTheme = {
  body: "#121212",
  text: "#fff",
  primary: "#bb86fc",
  bodynavbar:"#121212",
  bodyfooter:"#121212",
  foottext:"#fff",
  son:"#FFA500"

};

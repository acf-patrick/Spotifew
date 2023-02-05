import styled, { createGlobalStyle, css } from "styled-components";

const fonts = css`
  @font-face {
    font-family: GTWalsheim;
    src: url("/fonts/GTWalsheimPro-Regular.ttf");
  }

  @font-face {
    font-family: Poppins;
    src: url("/fonts/Poppins-Regular.ttf");
  }
`;

export const GlobalStyles = createGlobalStyle<{ theme: any }>`
  ${fonts}
  
  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-family: GTWalsheim, Poppins, system-ui, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    letter-spacing: "-0.04rem";
    margin: 0 0 10px;
  }

  p {
    margin: 0 0 10px;
  }
  
  a,
  button {
    transition: all 0.3s ease;
    color: inherit;
  }

  a {
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  button {
    border: 0;
    cursor: pointer;
    font-family: inherit;
    border-radius: ${({ theme }) => theme.borderRadius.pill};
    background: rgba(0, 0, 0, 0.7);
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 700;
    padding: ${({ theme }) => `${theme.spacings.xs} ${theme.spacings.sm}`};

    &:hover,
    &:focus {
      background: ${({ theme }) => theme.colors.darkGrey};
      outline: 0;
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
`;

export const StyledContainer = styled.div`
  min-height: 100vh;
`;

export const StyledLogoutButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacings.sm};
  right: ${({ theme }) => theme.spacings.md};
  padding: ${({ theme }) => `${theme.spacings.xs} ${theme.spacings.sm}`};
  background: rgba(0, 0, 0, 0.7);
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  z-index: 5;

  @media (min-width: 768px) {
    right: ${({ theme }) => theme.spacings.lg};
  }
`;

import styled, { keyframes } from "styled-components";

const StyledLoginButton = styled.a`
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacings.sm} ${theme.spacings.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;

  &:hover,
  &:focus {
    text-decoration: none;
    filter: brightness(1.1);
  }
`;

const LogoGrowing = keyframes`
  from {
    width: 0;
  } to {
    width: 180px;
  }
`;

const StyledLoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  div {
    aspect-ratio: 1/1;
    margin-bottom: 1.5rem;
    animation: ${LogoGrowing} 1s both;
  }
`;

const LONGIN_URI =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/login"
    : "https://spotifew.onrender.com/login";

export default function Login() {
  return (
    <StyledLoginContainer>
      <div>
        <img src="/images/Spotify_logo_without_text.svg" alt="spotify" />
      </div>
      <StyledLoginButton href={LONGIN_URI}>
        Log in to Spotify
      </StyledLoginButton>
    </StyledLoginContainer>
  );
}

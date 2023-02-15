import styled from "styled-components";

const StyledNotFoundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    text-align: center;
    margin: 2rem 0;
  }

  button {
    padding: 1rem 2rem;
  }

  .logo img {
    max-width: 100px;
  }

  h1 {
    font-size: 3rem;
    margin: 1rem 0;
  }

  p {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  h1,
  p,
  .logo {
    text-align: center;
  }
`;

export default StyledNotFoundContainer;

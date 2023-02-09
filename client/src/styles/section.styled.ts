import styled from "styled-components";

const StyledSection = styled.section`
  &:first-of-type {
    .inner {
      padding-top: 0;
    }
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin-bottom: ${({ theme }) => theme.spacings.xl};
  }

  .heading {
    display: flex;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }

  .breadcrumb {
    display: flex;
    color: ${({ theme }) => theme.colors.lightGrey};

    &:after {
      content: "/";
      display: block;
      margin: 0 ${({ theme }) => theme.spacings.sm};
    }

    a {
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  .inner {
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    position: relative;
    padding: ${({ theme }) => `${theme.spacings.lg} ${theme.spacings.md}`};

    @media (min-width: 768px) {
      padding: ${({ theme }) => `${theme.spacings.xl} ${theme.spacings.xxl}`};
    }
  }

  .see-all {
    display: flex;
    align-items: flex-end;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    font-weight: 700;
    letter-spacing: 0.1rem;
    padding-bottom: 2px;
  }
`;

export default StyledSection;

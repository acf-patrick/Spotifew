import styled from "styled-components";

const StyledGrid = styled.ul<{ type?: string }>`
  li {
    background-color: ${({ theme }) => theme.colors.nearBlack};
    border-radius: ${({ theme }) => theme.borderRadius.subtle};
    transition: background-color 300ms ease;
    cursor: default;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.darkGrey};

      img {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
      }
    }

    & > div {
      padding: ${({ theme }) => theme.spacing.sm};

      div {
        position: relative;
        padding-top: 100%;
        margin: 0 auto ${({ theme }) => theme.spacings.lg};

        img {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          background-color: ${({ theme }) => theme.colors.darkGrey};
          border-radius: ${({ type }) => (type === "artist" ? "50%" : "2px")};
        }
      }

      @media (min-width: 768px) {
        padding: ${({ theme }) => theme.spacings.md};
      }
    }

    h3 {
      margin: 0 0 ${({ theme }) => theme.spacings.xxs};
      font-size: ${({ theme }) => theme.fontSizes.md};
      letter-spacing: normal;
    }

    p {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      color: ${({ theme }) => theme.colors.lightGrey};
    }

    a {
      display: block;
      width: 100%;
      height: 100%;

      &:hover,
      &:focus {
        text-decoration: none;
      }
    }
  }
`;

export default StyledGrid;

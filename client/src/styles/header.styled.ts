import styled from "styled-components";

const StyledHeader = styled.header<{ type?: string }>`
  display: flex;
  align-items: center;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  background-color: ${({ theme }) => theme.colors.grey};
  height: 30vh;
  max-height: 500px;
  min-height: 250px;

  @media (min-width: 768px) {
    min-height: 340px;
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 20vh;
    background-color: ${({ theme }) => theme.colors.grey};
    background: linear-gradient(
      rgba(0, 0, 0, 0.6), ${({ theme }) => theme.colors.black}
    );
    position: absolute;
    top: 100%;
    z-index: -1;
  }

  position: relative;

  & > div {
    display: flex;
    align-items: flex-end;
    width: 100%;
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    padding: ${({ theme }) => `${theme.spacings.lg} ${theme.spacings.md}`};

    @media (min-width: 768px) {
      padding: ${({ theme }) => `${theme.spacings.xl} ${theme.spacings.xxl}`};
    }
  }

  img {
    width: 20%;
    max-width: 250px;
    min-width: 120px;
    margin-right: ${({ theme }) => theme.spacings.lg};
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
    background: ${({ theme }) => theme.colors.grey};
    border-radius: ${({ type }) => (type === "user" ? "50%" : "0")};

    @media (min-width: 768px) {
      margin-right: ${({ theme }) => theme.spacings.xl};
    }
  }

  .datas {
    div {
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.fontSizes.xxs};
      font-weight: bold;
      margin-bottom: ${({ theme }) => theme.spacings.xs};
    }

    h1 {
      font-size: clamp(2.5rem, 6vw, 6rem);
      font-weight: 900;
      line-height: 1;
      margin: 0 0 ${({ theme }) => theme.spacings.xs} 0;

      @media (min-width: 768px) {
        margin: 0 0 ${({ theme }) => theme.spacings.xs} -5px;
      }
    }

    p {
      display: flex;
      align-items: center;
      font-size: ${({ theme }) => theme.fontSizes.sm};
      color: ${({ theme }) => theme.colors.lightGrey};
      margin: 0;

      span {
        display: flex;
        align-items: center;

        &:not(:last-of-type)::after {
          content: "•";
          display: block;
          margin: 0 ${({ theme }) => theme.spacings.xs};
          color: ${({ theme }) => theme.colors.lightGrey};
          font-size: 8px;
        }
      }

      @media (max-width: 414px) {
        * {
          font-size: 0.65rem;
        }
      }
    }
  }
`;

export default StyledHeader;

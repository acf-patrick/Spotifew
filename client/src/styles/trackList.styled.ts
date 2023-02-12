import styled from "styled-components";

const StyledTrackList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: grid;
    align-items: center;
    grid-template-columns: 20px 1fr;
    grid-gap: ${({ theme }) => theme.spacings.md};
    padding: ${({ theme }) => theme.spacings.sm};
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    border-radius: ${({ theme }) => theme.borderRadius.subtle};
    transition: background-color 300ms linear;
    cursor: default;
    margin: 1rem;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.darkGrey};
    }

    .num {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: ${({ theme }) => theme.fontSizes.md};
      font-variant-numeric: tabular-nums;
      overflow: visible;
    }

    .title-group {
      display: flex;
      align-items: center;
    }

    .image {
      margin-right: ${({ theme }) => theme.spacings.sm};
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      background-color: ${({ theme }) => theme.colors.darkGrey};
    }

    .name {
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSizes.md};

      a:hover {
        text-decoration: none;
      }
    }

    .album {
      display: none;

      @media (min-width: 768px) {
        display: block;
        white-space: nowrap;
      }
    }

    .duration {
      display: none;

      @media (min-width: 768px) {
        display: flex;
        justify-content: flex-end;
        font-variant-numeric: tabular-nums;
      }
    }

    @media (min-width: 768px) {
      grid-template-columns: 20px 4fr 2fr minmax(60px, 1fr);
      padding: ${({ theme }) => `${theme.spacings.xxs} ${theme.spacings.sm}`};
    }
  }
`;

export default StyledTrackList;

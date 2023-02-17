import styled from "styled-components";

const StyledRangeButtons = styled.div`
  display: flex;
  
  @media (min-width: 768px) {
    justify-content: flex-end;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }

  li {
    margin-right: ${({ theme }) => theme.spacings.xs};

    @media (min-width: 768px) {
      margin-left: ${({ theme }) => theme.spacings.xs};
      margin-right: 0;
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.darkGrey};

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.grey};
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export default StyledRangeButtons;

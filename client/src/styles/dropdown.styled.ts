import styled from "styled-components";

const StyledDropdown = styled.div<{ active: string }>`
  position: absolute;
  top: 0;
  right: ${({ theme }) => theme.spacings.md};
  z-index: 1;

  @media (min-width: 768px) {
    right: ${({ theme }) => theme.spacings.xxl};
  }

  &:after {
    display: block;
    width: 0;
    height: 0;
    content: "";
    position: absolute;
    top: 15px;
    right: ${({ theme }) => theme.spacings.sm};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid ${({ theme }) => theme.colors.white};
  }

  select {
    -webkit-appearance: none;
    appearance: none;
    background-color: ${(props) =>
      props.active ? "rgba(255, 255, 255, 0.1)" : "transparent"};
    color: white;
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius.subtle};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-family: inherit;
    padding: ${({ theme }) =>
      `${theme.spacings.xs} ${theme.spacings.xl} ${theme.spacings.xs} ${theme.spacings.sm}`};
  }

  option {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export default StyledDropdown;

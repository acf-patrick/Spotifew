import styled, { keyframes } from "styled-components";

const dance = keyframes`
  from {
    heihgt: 10px;
  } to {
    height: 100%;
  }
`;

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 50vh;

  .bars {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    width: 100px;
    min-width: 100px;
    height: 50px;
    margin: 0 auto;
    z-index: 2;
    position: relative;
    left: 0;
    right: 0;
  }
`;

const StyledBar = styled.div<{ delay?: string }>`
  width: 10px;
  height: 5px;
  margin: 0 2px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  animation: 400ms linear ${(props) => props.delay || "0ms"} infinite alternate
    ${dance};
`;

function Loader() {
  return <StyledLoader>
    <div className="bars">
      <StyledBar delay="250ms" />
      <StyledBar delay="715ms" />
      <StyledBar delay="475ms" />
      <StyledBar delay="25ms" />
      <StyledBar delay="190ms" />
    </div>
  </StyledLoader>
}

export default Loader;

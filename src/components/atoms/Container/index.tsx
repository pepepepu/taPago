import styled from "styled-components";

interface ContainerProps {
  $bgColor?: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${({ $bgColor }) => $bgColor || "transparent"};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Container;

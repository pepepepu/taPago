import { type ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { Image } from "../components";

import blockImage from "../assets/billy/info.png";

const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 24px;
  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  margin: 16px;
  font-size: 2.5rem;
`;

const Message = styled.p`
  font-size: 1.1rem;
  max-width: 800px;
  line-height: 1.1;
`;

interface DeviceRestrictorProps {
  children: ReactNode;
}

export function DeviceRestrictor({ children }: DeviceRestrictorProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    return (
      <WarningContainer>
        <Image src={blockImage} style={{ width: "300px" }} />
        <Title>Melhor experiência em dispositivos móveis</Title>
        <Message>
          O <strong>bills</strong> é otimizado para celulares e tablets. Acesse
          pelo seu dispositivo móvel ou ajuste o tamanho da janela do navegador
          para continuar.
        </Message>
      </WarningContainer>
    );
  }

  return <>{children}</>;
}

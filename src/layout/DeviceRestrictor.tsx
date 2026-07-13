import { type ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.yellow};
  margin-bottom: 16px;
  font-size: 2.5rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
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
        <Title>Acesso Restrito</Title>
        <Message>
          O TáPago foi projetado exclusivamente para a experiência em
          dispositivos móveis e tablets. Por favor, acesse através do seu
          celular ou reduza a largura da janela do seu navegador.
        </Message>
      </WarningContainer>
    );
  }

  return <>{children}</>;
}

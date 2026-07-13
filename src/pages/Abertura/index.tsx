import { motion } from "framer-motion";
import {
  PiArrowRightBold,
  PiCalendarCheckFill,
  PiCoinsFill,
  PiCreditCardFill,
  PiMoneyFill,
  PiPiggyBankFill,
  PiPlusBold,
  PiWalletFill,
} from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Button, Container, Text } from "../../components";

const CarouselWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex: 1;
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  width: max-content;
`;

const IconGroup = styled.div`
  display: flex;
  gap: 54px;
  padding-right: 54px;
`;

const IconBox = styled.div<{ $bgColor: string }>`
  width: 72px;
  border-radius: 20px;
  background-color: ${({ $bgColor }) => $bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export function Abertura() {
  const navigate = useNavigate();
  const theme = useTheme();

  const featureIcons = [
    { Icon: PiWalletFill },
    { Icon: PiCalendarCheckFill },
    { Icon: PiPiggyBankFill },
    { Icon: PiMoneyFill },
    { Icon: PiCoinsFill },
    { Icon: PiCreditCardFill },
  ];

  return (
    <Container
      $bgColor={theme.colors.white}
      style={{
        height: "100dvh",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "36px",
        gap: "50px",
        overflowX: "hidden",
      }}
    >
      <Text
        $color={theme.colors.black}
        $align="left"
        $size="2rem"
        style={{
          fontFamily: theme.fonts.title,
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        táPAGO!
      </Text>
      <CarouselWrapper>
        <CarouselTrack
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          <IconGroup>
            {featureIcons.map((item, index) => {
              const Icon = item.Icon;
              return (
                <IconBox key={`group1-${index}`} $bgColor="transparent">
                  <Icon size="4rem" color={theme.colors.black} />
                </IconBox>
              );
            })}
          </IconGroup>
          <IconGroup>
            {featureIcons.map((item, index) => {
              const Icon = item.Icon;
              return (
                <IconBox key={`group2-${index}`} $bgColor="transparent">
                  <Icon size="4rem" color={theme.colors.black} />
                </IconBox>
              );
            })}
          </IconGroup>
        </CarouselTrack>
      </CarouselWrapper>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text
          $color={theme.colors.black}
          $align="left"
          $size="2.5rem"
          style={{
            fontFamily: theme.fonts.body,
            fontWeight: 500,
            lineHeight: 1,
          }}
        >
          Organize seus boletos com tranquilidade
        </Text>
        <Text
          $color={theme.colors.black}
          $align="left"
          $size="1.2rem"
          style={{
            fontFamily: theme.fonts.body,
            fontWeight: 400,
          }}
        >
          porque boleto bom é boleto pago
        </Text>
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          $bgColor={theme.colors.black}
          $fullWidth
          onClick={() => navigate("/entrar")}
          style={{
            borderRadius: "99px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${theme.colors.black}`,
          }}
        >
          <Text
            $color={theme.colors.white}
            $align="center"
            $size="1rem"
            style={{
              fontFamily: theme.fonts.highlight,
              fontWeight: 400,
            }}
          >
            entrar
          </Text>
          <PiArrowRightBold size={"1rem"} color={theme.colors.white} />
        </Button>
        <Button
          $bgColor="transparent"
          $fullWidth
          onClick={() => navigate("/criar-conta")}
          style={{
            borderRadius: "99px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${theme.colors.black}`,
          }}
        >
          <Text
            $color={theme.colors.black}
            $align="center"
            $size="1rem"
            style={{
              fontFamily: theme.fonts.highlight,
              fontWeight: 500,
            }}
          >
            criar conta
          </Text>
          <PiPlusBold size={"1rem"} color={theme.colors.black} />
        </Button>
      </Container>
    </Container>
  );
}

export default Abertura;

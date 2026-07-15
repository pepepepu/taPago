import { PiArrowRightBold, PiPlusBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Button, Container, Text } from "../../components";
import happyBilly from "../../assets/billy/realyHappy.png";

const ImageWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroImage = styled.img`
  width: clamp(250px, 50%, 500px);
  max-height: 100%;
  object-fit: contain;
`;

export function Abertura() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Container
      $bgColor={theme.colors.white}
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "36px",
        overflowX: "hidden",
      }}
    >
      <Text
        $color={theme.colors.black}
        $align="left"
        $size="clamp(2rem, 5vw, 2.5rem)"
        style={{
          fontFamily: theme.fonts.title,
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        bills.
      </Text>

      <ImageWrapper>
        <HeroImage src={happyBilly} />
      </ImageWrapper>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text
          $color={theme.colors.black}
          $align="left"
          $size="clamp(1.8rem, 6vw, 3rem)"
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
          $size="clamp(1rem, 3vw, 1.5rem)"
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
            $size="clamp(0.875rem, 2.5vw, 1.125rem)"
            style={{
              fontFamily: theme.fonts.highlight,
              fontWeight: 400,
            }}
          >
            entrar
          </Text>
          <PiArrowRightBold
            size={"clamp(0.875rem, 2.5vw, 1.125rem)"}
            color={theme.colors.white}
          />
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
            $size="clamp(0.875rem, 2.5vw, 1.125rem)"
            style={{
              fontFamily: theme.fonts.highlight,
              fontWeight: 500,
            }}
          >
            criar conta
          </Text>
          <PiPlusBold
            size={"clamp(0.875rem, 2.5vw, 1.125rem)"}
            color={theme.colors.black}
          />
        </Button>
      </Container>
    </Container>
  );
}

export default Abertura;

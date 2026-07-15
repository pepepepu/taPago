import { motion } from "framer-motion";
import { PiArrowRightBold, PiPlusBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Button, Container, Text } from "../../components";
import happyBilly from "../../assets/billy/realyHappy.png";

const ImageWrapper = styled(motion.div)`
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

const MotionButton = motion(Button);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  } as const,
};

export function Abertura() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Container
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
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
      <motion.div
        variants={itemVariants}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
      </motion.div>

      <ImageWrapper variants={itemVariants}>
        <HeroImage src={happyBilly} />
      </ImageWrapper>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <motion.div variants={itemVariants}>
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
          </motion.div>
          <motion.div variants={itemVariants}>
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
          </motion.div>
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
          <motion.div variants={itemVariants} style={{ width: "100%" }}>
            <MotionButton
              whileTap={{ gap: "32px", scale: 0.95 }}
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
                gap: "8px",
              }}
            >
              <Text
                $color={theme.colors.white}
                $align="center"
                $size="clamp(0.875rem, 2.5vw, 1.125rem)"
                style={{
                  fontFamily: theme.fonts.highlight,
                  fontWeight: 400,
                  pointerEvents: "none",
                }}
              >
                entrar
              </Text>
              <PiArrowRightBold
                size={"clamp(0.875rem, 2.5vw, 1.125rem)"}
                color={theme.colors.white}
                style={{ pointerEvents: "none" }}
              />
            </MotionButton>
          </motion.div>

          <motion.div variants={itemVariants} style={{ width: "100%" }}>
            <MotionButton
              whileTap={{ gap: "32px", scale: 0.95 }}
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
                gap: "8px",
              }}
            >
              <Text
                $color={theme.colors.black}
                $align="center"
                $size="clamp(0.875rem, 2.5vw, 1.125rem)"
                style={{
                  fontFamily: theme.fonts.highlight,
                  fontWeight: 500,
                  pointerEvents: "none",
                }}
              >
                criar conta
              </Text>
              <PiPlusBold
                size={"clamp(0.875rem, 2.5vw, 1.125rem)"}
                color={theme.colors.black}
                style={{ pointerEvents: "none" }}
              />
            </MotionButton>
          </motion.div>
        </Container>
      </Container>
    </Container>
  );
}

export default Abertura;

import { motion, AnimatePresence } from "framer-motion";
import {
  PiArrowFatLeftFill,
  PiArrowRightBold,
  PiEyeClosedBold,
  PiEyeFill,
  PiSpinnerGapBold,
  PiWarningCircleBold,
} from "react-icons/pi";
import styled, { useTheme } from "styled-components";
import { Button, Container, Text, TextInput } from "../../components";
import { useSignUp } from "../../hooks/useSignUp";

const ScrollableArea = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 40dvh;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const MotionButton = motion(Button);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  } as const,
};

const errorVariants = {
  hidden: { opacity: 0, height: 0, marginTop: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    marginTop: 16,
    transition: { duration: 0.2 },
  },
  exit: { opacity: 0, height: 0, marginTop: 0, transition: { duration: 0.2 } },
};

export function CriarConta() {
  const theme = useTheme();

  const {
    name,
    email,
    birthDate,
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
    isLoading,
    errorMsg,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleDateChange,
    toggleShowPassword,
    toggleShowConfirmPassword,
    handleRegister,
    goBack,
    goToLogin,
  } = useSignUp();

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
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <MotionButton
          variants={itemVariants}
          type="button"
          onClick={goBack}
          whileTap={{ scale: 0.8 }}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0px",
            width: "auto",
          }}
        >
          <PiArrowFatLeftFill size="1.5rem" color={theme.colors.black} />
        </MotionButton>
        <motion.div variants={itemVariants}>
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
        <div style={{ width: "1.5rem" }} />
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "48px",
          alignItems: "stretch",
          pointerEvents: isLoading ? "none" : "auto",
          transition: "opacity 0.3s ease",
          margin: "auto 0",
          width: "100%",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            alignItems: "flex-start",
          }}
        >
          <motion.div variants={itemVariants}>
            <Text
              $color={theme.colors.black}
              $align="left"
              $size="clamp(2.5rem, 8vw, 3.5rem)"
              style={{
                fontFamily: theme.fonts.title,
                lineHeight: 1,
                fontWeight: 700,
              }}
            >
              criar conta.
            </Text>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Text
              $color={theme.colors.black}
              $align="left"
              $size="clamp(1rem, 3vw, 1.2rem)"
              style={{
                fontFamily: theme.fonts.body,
                fontWeight: 400,
              }}
            >
              junte-se a nós e domine seus boletos.
            </Text>
          </motion.div>
          <AnimatePresence>
            {errorMsg && (
              <motion.div
                variants={errorVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: `${theme.colors.red}20`,
                  padding: "12px 16px",
                  borderRadius: "8px",
                  width: "100%",
                  border: `1px solid ${theme.colors.red}50`,
                }}
              >
                <PiWarningCircleBold size="1.2rem" color={theme.colors.red} />
                <Text
                  $color={theme.colors.red}
                  $size="0.875rem"
                  style={{
                    fontFamily: theme.fonts.body,
                    fontWeight: 500,
                  }}
                >
                  {errorMsg}
                </Text>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>

        <form
          onSubmit={handleRegister}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "48px",
            width: "100%",
            opacity: isLoading ? 0.5 : 1,
            transition: "opacity 0.3s ease",
          }}
        >
          <ScrollableArea>
            <Container
              as={motion.div}
              variants={itemVariants}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Text
                $color={theme.colors.black}
                $size="0.875rem"
                style={{
                  fontFamily: theme.fonts.highlight,
                  fontWeight: 500,
                }}
              >
                nome completo
              </Text>
              <TextInput
                type="text"
                placeholder="seu nome"
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                required
              />
            </Container>

            <Container
              as={motion.div}
              variants={itemVariants}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Text
                $color={theme.colors.black}
                $size="0.875rem"
                style={{
                  fontFamily: theme.fonts.highlight,
                  fontWeight: 500,
                }}
              >
                data de nascimento
              </Text>
              <TextInput
                type="text"
                placeholder="dd/mm/aaaa"
                value={birthDate}
                onChange={handleDateChange}
                required
              />
            </Container>

            <Container
              as={motion.div}
              variants={itemVariants}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Text
                $color={theme.colors.black}
                $size="0.875rem"
                style={{
                  fontFamily: theme.fonts.highlight,
                  fontWeight: 500,
                }}
              >
                email
              </Text>
              <TextInput
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                required
              />
            </Container>

            <Container
              as={motion.div}
              variants={itemVariants}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Text
                $color={theme.colors.black}
                $size="0.875rem"
                style={{
                  fontFamily: theme.fonts.highlight,
                  fontWeight: 500,
                }}
              >
                senha
              </Text>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TextInput
                  type={showPassword ? "text" : "password"}
                  placeholder="crie uma senha"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  required
                  style={{ paddingRight: "48px", width: "100%" }}
                />
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.8 }}
                  onClick={toggleShowPassword}
                  style={{
                    position: "absolute",
                    right: "16px",
                    background: "transparent",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {showPassword ? (
                    <PiEyeClosedBold
                      size="1.25rem"
                      color={theme.colors.black}
                    />
                  ) : (
                    <PiEyeFill size="1.25rem" color={theme.colors.black} />
                  )}
                </motion.button>
              </div>
            </Container>

            <Container
              as={motion.div}
              variants={itemVariants}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Text
                $color={theme.colors.black}
                $size="0.875rem"
                style={{
                  fontFamily: theme.fonts.highlight,
                  fontWeight: 500,
                }}
              >
                confirmar senha
              </Text>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TextInput
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="repita a senha"
                  value={confirmPassword}
                  onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                  required
                  style={{ paddingRight: "48px", width: "100%" }}
                />
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.8 }}
                  onClick={toggleShowConfirmPassword}
                  style={{
                    position: "absolute",
                    right: "16px",
                    background: "transparent",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {showConfirmPassword ? (
                    <PiEyeClosedBold
                      size="1.25rem"
                      color={theme.colors.black}
                    />
                  ) : (
                    <PiEyeFill size="1.25rem" color={theme.colors.black} />
                  )}
                </motion.button>
              </div>
            </Container>
          </ScrollableArea>

          <motion.div variants={itemVariants} style={{ width: "100%" }}>
            <MotionButton
              type="submit"
              whileTap={{ gap: "32px", scale: 0.95 }}
              $bgColor={theme.colors.black}
              $fullWidth
              style={{
                borderRadius: "99px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                border: `1px solid ${theme.colors.black}`,
                padding: "16px",
                height: "56px",
                gap: "8px",
              }}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PiSpinnerGapBold size="1.5rem" color={theme.colors.white} />
                </motion.div>
              ) : (
                <>
                  <Text
                    $color={theme.colors.white}
                    $align="center"
                    $size="clamp(0.875rem, 2.5vw, 1.125rem)"
                    style={{
                      fontFamily: theme.fonts.highlight,
                      fontWeight: 500,
                      pointerEvents: "none",
                    }}
                  >
                    cadastrar
                  </Text>
                  <PiArrowRightBold
                    size="clamp(0.875rem, 2.5vw, 1.125rem)"
                    color={theme.colors.white}
                    style={{ pointerEvents: "none" }}
                  />
                </>
              )}
            </MotionButton>
          </motion.div>
        </form>
      </Container>

      <Container
        as={motion.div}
        variants={itemVariants}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: "24px",
          flexShrink: 0,
        }}
      >
        <Text
          $color={theme.colors.black}
          $align="center"
          $size="0.875rem"
          style={{
            fontFamily: theme.fonts.highlight,
            fontWeight: 400,
          }}
        >
          já tem uma conta?{" "}
          <motion.span
            whileTap={{ scale: 0.95, opacity: 0.7 }}
            onClick={goToLogin}
            style={{
              fontWeight: 700,
              textDecoration: "underline",
              cursor: "pointer",
              display: "inline-block",
            }}
          >
            entrar
          </motion.span>
        </Text>
      </Container>
    </Container>
  );
}

export default CriarConta;

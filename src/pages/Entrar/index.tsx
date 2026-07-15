import { motion } from "framer-motion";
import { useState } from "react";
import {
  PiArrowFatLeftFill,
  PiArrowRightBold,
  PiEyeClosedBold,
  PiEyeFill,
  PiSpinnerGapBold,
} from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { Button, Container, Text, TextInput } from "../../components";

export function Entrar() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/inicio");
    }, 2000);
  };

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
      {/* Título e botão de voltar */}
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button
          type="button"
          onClick={() => navigate(-1)}
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
        </Button>
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
        <div style={{ width: "1.5rem" }} />
      </Container>

      {/* Área do Formulário */}
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "48px",
          alignItems: "stretch",
          pointerEvents: isLoading ? "none" : "auto",
          transition: "opacity 0.3s ease",
          margin: "auto 0",
        }}
      >
        {/* Título do formulário */}
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            alignItems: "flex-start",
          }}
        >
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
            entrar.
          </Text>
          <Text
            $color={theme.colors.black}
            $align="left"
            $size="clamp(1rem, 3vw, 1.2rem)"
            style={{
              fontFamily: theme.fonts.body,
              fontWeight: 400,
            }}
          >
            que bom ver você por aqui novamente.
          </Text>
        </Container>

        {/* Campos de inserção do formulário */}
        <Container
          as={"form"}
          onSubmit={handleLogin}
          style={{
            opacity: isLoading ? 0.5 : 1,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
          }}
        >
          <Container
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Container>

          <Container
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
                placeholder="sua senha de acesso"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ paddingRight: "48px" }}
              />
              <Button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
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
                  <PiEyeClosedBold size="1.25rem" color={theme.colors.black} />
                ) : (
                  <PiEyeFill size="1.25rem" color={theme.colors.black} />
                )}
              </Button>
            </div>
            <Text
              $color={theme.colors.black}
              $align="right"
              $size="0.875rem"
              onClick={() => navigate("/esqueci-senha")}
              style={{
                width: "auto",
                fontFamily: theme.fonts.highlight,
                fontWeight: 500,
                textDecoration: "underline",
                cursor: "pointer",
                marginTop: "8px",
                letterSpacing: "-1px",
              }}
            >
              esqueci a senha
            </Text>
          </Container>

          {/* Botão de Login */}
          <Button
            type="submit"
            $bgColor={theme.colors.black}
            $fullWidth
            style={{
              borderRadius: "99px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${theme.colors.black}`,
              marginTop: "16px",
              padding: "16px",
              height: "56px",
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
                  }}
                >
                  entrar
                </Text>
                <PiArrowRightBold
                  size="clamp(0.875rem, 2.5vw, 1.125rem)"
                  color={theme.colors.white}
                />
              </>
            )}
          </Button>
        </Container>
      </Container>

      {/* Botão de cadastrar */}
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: "24px",
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
          não tem uma conta?{" "}
          <span
            onClick={() => navigate("/criar-conta")}
            style={{
              fontWeight: 700,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            cadastre-se
          </span>
        </Text>
      </Container>
    </Container>
  );
}

export default Entrar;

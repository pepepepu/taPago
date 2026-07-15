import { motion } from "framer-motion";
import { useState } from "react";
import {
  PiArrowFatLeftFill,
  PiArrowRightBold,
  PiEyeBold,
  PiEyeClosedBold,
  PiSpinnerGapBold,
} from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Button, Container, Text, TextInput } from "../../components";

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

export function CriarConta() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + "/" + value.slice(5);
    setBirthDate(value.slice(0, 10));
  };

  const handleRegister = (e: React.FormEvent) => {
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
                onChange={(e) => setName(e.target.value)}
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
                data de nascimento
              </Text>
              <TextInput
                type="text"
                placeholder="DD/MM/AAAA"
                value={birthDate}
                onChange={handleDateChange}
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
                  placeholder="crie uma senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ paddingRight: "48px" }}
                />
                <button
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
                    <PiEyeClosedBold
                      size="1.25rem"
                      color={theme.colors.black}
                    />
                  ) : (
                    <PiEyeBold size="1.25rem" color={theme.colors.black} />
                  )}
                </button>
              </div>
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
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={{ paddingRight: "48px" }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                    <PiEyeBold size="1.25rem" color={theme.colors.black} />
                  )}
                </button>
              </div>
            </Container>
          </ScrollableArea>
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
                  cadastrar
                </Text>
                <PiArrowRightBold
                  size="clamp(0.875rem, 2.5vw, 1.125rem)"
                  color={theme.colors.white}
                />
              </>
            )}
          </Button>
        </form>
      </Container>

      <Container
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
          <span
            onClick={() => navigate("/entrar")}
            style={{
              fontWeight: 700,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            entrar
          </span>
        </Text>
      </Container>
    </Container>
  );
}

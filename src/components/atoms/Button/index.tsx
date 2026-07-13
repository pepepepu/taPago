import styled from "styled-components";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $bgColor?: string;
  $textColor?: string;
  $fullWidth?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ $bgColor, theme }) => $bgColor || theme.colors.green};
  color: ${({ $textColor, theme }) => $textColor || theme.colors.white};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 700;
  font-size: 1rem;
  padding: 14px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition:
    opacity 0.2s ease-in-out,
    transform 0.1s ease-in-out;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }
`;

export default Button;

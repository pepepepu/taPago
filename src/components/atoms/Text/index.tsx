import styled from "styled-components";

interface TextProps {
  $color?: string;
  $align?: "left" | "center" | "right" | "justify";
  $weight?: 400 | 500 | 700;
  $lineHeight?: string | number;
  $size?: string;
  $fontFamily?: "body" | "title" | "highlight";
}

const Text = styled.p<TextProps>`
  color: ${({ $color, theme }) => $color || theme.colors.black};
  text-align: ${({ $align }) => $align || "left"};
  font-weight: ${({ $weight }) => $weight || 400};
  line-height: ${({ $lineHeight }) => $lineHeight || 1.5};
  font-size: ${({ $size }) => $size || "1rem"};
  font-family: ${({ $fontFamily, theme }) =>
    $fontFamily === "title"
      ? theme.fonts.title
      : $fontFamily === "highlight"
        ? theme.fonts.highlight
        : theme.fonts.body};
`;

export default Text;

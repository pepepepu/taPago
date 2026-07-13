import styled from "styled-components";
import type { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  $borderRadius?: string;
  $objectFit?: "cover" | "contain" | "fill";
}

const Image = styled.img<ImageProps>`
  width: 100%;
  height: auto;
  border-radius: ${({ $borderRadius }) => $borderRadius || "0"};
  object-fit: ${({ $objectFit }) => $objectFit || "cover"};
  display: block;
`;

export default Image;

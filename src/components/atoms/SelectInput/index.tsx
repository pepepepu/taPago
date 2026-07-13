import styled from "styled-components";
import type { SelectHTMLAttributes } from "react";

const SelectInput = styled.select<SelectHTMLAttributes<HTMLSelectElement>>`
  width: 100%;
  padding: 14px 16px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  outline: none;
  appearance: none;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.colors.green};
  }
`;

export default SelectInput;

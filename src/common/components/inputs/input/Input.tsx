import { TextField } from "@mui/material";

import { input } from "./Input.styles";

export interface InputProps {
  placeholder: string;
  size?: "small" | "medium" | "large";
  variant?: "standard" | "outlined";
  isDisabled?: boolean;
  isRequired?: boolean;
  type?: "password" | "email" | "date";
}

const Input = ({
  placeholder,
  size = "medium",
  variant = "outlined",
  isDisabled = false,
  isRequired = false,
  type,
}: InputProps) => (
  <TextField
    placeholder={placeholder}
    variant={variant}
    disabled={isDisabled}
    required={isRequired}
    type={type}
    sx={input(size)}
  />
);

export default Input;

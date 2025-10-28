import React from "react";
import tokens from "../../tokens.json";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        border: `1px solid ${tokens.color.primary}`,
        borderRadius: tokens.radius.sm,
        padding: tokens.spacing.sm,
        width: "100%",
        fontFamily: tokens.font.family,
        fontSize: tokens.font.size.md,
      }}
    />
  );
};
